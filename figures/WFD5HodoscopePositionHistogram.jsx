export default function makeWFD5HodoscopePositionHistogram({ Plot, SettingTypes }) {
  return class WFD5HodoscopePositionHistogram extends Plot {
    static displayName = 'WFD5 Hodoscope Position Histogram';
    static name = 'WFD5HodoscopePositionHistogram';

    static get settingSchema() {
      return {
        ...super.settingSchema,
        dataUrl: {
          type: SettingTypes.STRING,
          default: 'http://localhost:8001/api/json_path?last=1&json_path=/data_products/HodoscopePositionHistogram',
          label: 'Data URL',
          onChange: 'onUpdateTick',
          advanced: true,
        },
      };
    }

    // Parse TH2D JSON and construct plotly heatmap + marginal histograms
    extractPlotData(raw) {
      const hist = raw?.data;
      if (!hist || !Array.isArray(hist.fArray)) return null;

      const xAxis = hist.fXaxis || {};
      const yAxis = hist.fYaxis || {};

      const nBinsX = xAxis.fNbins;
      const nBinsY = yAxis.fNbins;

      if (!nBinsX || !nBinsY) return null;

      const binEdgesX = xAxis.fXbins || this.makeLinearBins(xAxis.fXmin, xAxis.fXmax, nBinsX);
      const binEdgesY = yAxis.fXbins || this.makeLinearBins(yAxis.fXmin, yAxis.fXmax, nBinsY);

      // TH2D fArray layout: 
      // fArray[0] = underflow, next nBinsX*nBinsY elements = bin contents, fArray end = overflow
      // fArray length = nBinsX*nBinsY + 2 usually

      // Extract 2D histogram counts from fArray ignoring underflow and overflow
      const countsFlat = hist.fArray.slice(1, 1 + nBinsX * nBinsY);

      // Reshape to 2D array [y][x] for heatmap (ROOT stores histograms in row-major order)
      const counts2D = [];
      for (let iy = 0; iy < nBinsY; iy++) {
        const row = [];
        for (let ix = 0; ix < nBinsX; ix++) {
          row.push(countsFlat[iy * nBinsX + ix] || 0);
        }
        counts2D.push(row);
      }

      // Compute marginal histograms (sum counts along x and y axes)
      const marginalX = new Array(nBinsX).fill(0);
      const marginalY = new Array(nBinsY).fill(0);
      for (let iy = 0; iy < nBinsY; iy++) {
        for (let ix = 0; ix < nBinsX; ix++) {
          const val = counts2D[iy][ix];
          marginalX[ix] += val;
          marginalY[iy] += val;
        }
      }

      // Use bin centers for axes: centers = (edges[i] + edges[i+1]) / 2
      const centersX = [];
      for (let i = 0; i < nBinsX; i++) {
        centersX.push(0.5 * (binEdgesX[i] + binEdgesX[i + 1]));
      }
      const centersY = [];
      for (let i = 0; i < nBinsY; i++) {
        centersY.push(0.5 * (binEdgesY[i] + binEdgesY[i + 1]));
      }

      return { 
        heatmap: {
          z: counts2D,
          x: centersX,
          y: centersY,
          type: 'heatmap',
          colorscale: 'Viridis',
          colorbar: { title: 'Counts' },
          hoverinfo: 'x+y+z',
          name: '2D Histogram',
          showscale: true,
        },
        marginalX: {
          x: centersX,
          y: marginalX,
          type: 'bar',
          name: 'X marginal',
          marker: { color: 'steelblue' },
        },
        marginalY: {
          x: marginalY,
          y: centersY,
          type: 'bar',
          name: 'Y marginal',
          orientation: 'h',
          marker: { color: 'steelblue' },
        },
        layout: {
          grid: { rows: 2, columns: 2, roworder: 'top to bottom', 
                  subplots: [['xy', 'xMarginal'], ['yMarginal', 'empty']],
                  columnwidth: [0.7, 0.3], rowheight: [0.3, 0.7], 
                  xgap: 0.02, ygap: 0.02,
          },
          showlegend: false,
          autosize: true,
          margin: { t: 30, r: 30, l: 40, b: 40 },
          // Main heatmap
          xaxis: { domain: [0, 0.7], anchor: 'y' },
          yaxis: { domain: [0, 0.7], anchor: 'x', autorange: 'reversed' },
          // X marginal on top
          xaxis2: { domain: [0, 0.7], anchor: 'y2' },
          yaxis2: { domain: [0.7, 1], anchor: 'x2', showticklabels: false },
          // Y marginal on right
          xaxis3: { domain: [0.7, 1], anchor: 'y3', showticklabels: false },
          yaxis3: { domain: [0, 0.7], anchor: 'x3' },
        }
      };
    }

    makeLinearBins(min, max, n) {
      const bins = [];
      const step = (max - min) / n;
      for (let i = 0; i <= n; i++) bins.push(min + i * step);
      return bins;
    }

    initPlot(raw) {
      const dataObj = this.extractPlotData(raw);
      if (!dataObj) return { data: [], layout: {} };

      // Return the traces and layout in the expected structure for multi-axes subplot
      return {
        data: [
          { ...dataObj.heatmap, xaxis: 'x', yaxis: 'y' },
          { ...dataObj.marginalX, xaxis: 'x2', yaxis: 'y2' },
          { ...dataObj.marginalY, xaxis: 'x3', yaxis: 'y3' },
        ],
        layout: dataObj.layout,
      };
    }

    updatePlot(raw) {
      return this.initPlot(raw);
    }
  };
}
