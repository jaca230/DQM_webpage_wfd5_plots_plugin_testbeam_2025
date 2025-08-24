export default function makeWFD5HodoscopePositionHistogram({ Plot, SettingTypes }) {
  return class WFD5HodoscopePositionHistogram extends Plot {
    static displayName = 'WFD5 Hodoscope Position Histogram';
    static name = 'WFD5HodoscopePositionHistogram';

    static get settingSchema() {
      return {
        ...super.settingSchema,
        dataUrl: {
          type: SettingTypes.STRING,
          default: 'http://localhost:3000/api/json_path?last=1&json_path=/data_products/HodoscopePositionHistogram',
          label: 'Data URL',
          onChange: 'onUpdateTick',
          advanced: true,
        },
        
        // Visual settings
        showColorbar: {
          type: SettingTypes.BOOLEAN,
          default: true,
          label: 'Show Colorbar',
          onChange: 'onLayoutUpdate',
          advanced: false,
        },
        heatmapColorscale: {
          type: SettingTypes.STRING,
          default: 'Viridis',
          label: 'Heatmap Color Scheme',
          onChange: 'onLayoutUpdate',
          advanced: false,
        },
        marginalBarColor: {
          type: SettingTypes.COLOR,
          default: 'rgba(70,130,180,1)',
          label: 'Marginal Bar Color',
          onChange: 'onLayoutUpdate',
          advanced: false,
        },
        
        // Log scale settings
        heatmapLogScale: {
          type: SettingTypes.BOOLEAN,
          default: false,
          label: 'Heatmap Log Scale',
          onChange: 'onLayoutUpdate',
          advanced: false,
        },
        xMarginalLogScale: {
          type: SettingTypes.BOOLEAN,
          default: false,
          label: 'X Marginal Log Scale',
          onChange: 'onLayoutUpdate',
          advanced: false,
        },
        yMarginalLogScale: {
          type: SettingTypes.BOOLEAN,
          default: false,
          label: 'Y Marginal Log Scale',
          onChange: 'onLayoutUpdate',
          advanced: false,
        },
        
        // Axis orientation settings
        swapXY: {
          type: SettingTypes.BOOLEAN,
          default: false,
          label: 'Swap X and Y Axes',
          onChange: 'onLayoutUpdate',
          advanced: true,
        },
        flipXAxis: {
          type: SettingTypes.BOOLEAN,
          default: false,
          label: 'Flip X Axis (bugged, requires refresh)',
          onChange: 'onLayoutUpdate',
          advanced: true,
        },
        flipYAxis: {
          type: SettingTypes.BOOLEAN,
          default: false,
          label: 'Flip Y Axis (bugged, requires refresh)',
          onChange: 'onLayoutUpdate',
          advanced: true,
        },
        
        // Layout settings
        marginalWidth: {
          type: SettingTypes.NUMBER,
          default: 0.25,
          label: 'Marginal Plot Width (fraction)',
          onChange: 'onLayoutUpdate',
          advanced: true,
        },
        marginalHeight: {
          type: SettingTypes.NUMBER,
          default: 0.25,
          label: 'Marginal Plot Height (fraction)',
          onChange: 'onLayoutUpdate',
          advanced: true,
        },
        plotGap: {
          type: SettingTypes.NUMBER,
          default: 0.02,
          label: 'Plot Gap',
          onChange: 'onLayoutUpdate',
          advanced: true,
        },
        
        // Advanced visual settings
        heatmapOpacity: {
          type: SettingTypes.NUMBER,
          default: 1.0,
          label: 'Heatmap Opacity',
          onChange: 'onLayoutUpdate',
          advanced: true,
        },
        marginalBarOpacity: {
          type: SettingTypes.NUMBER,
          default: 0.8,
          label: 'Marginal Bar Opacity',
          onChange: 'onLayoutUpdate',
          advanced: true,
        },
        showMarginalOutlines: {
          type: SettingTypes.BOOLEAN,
          default: false,
          label: 'Show Marginal Bar Outlines',
          onChange: 'onLayoutUpdate',
          advanced: true,
        },
        marginalOutlineColor: {
          type: SettingTypes.COLOR,
          default: "rgba(0,0,0,1)",
          label: 'Marginal Outline Color',
          onChange: 'onLayoutUpdate',
          advanced: true,
        },
      };
    }

    constructor(props) {
      super(props);
      this.cachedData = null; // Cache parsed data for layout-only updates
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
    
      // Bin edges
      const binEdgesX = xAxis.fXbins || this.makeLinearBins(xAxis.fXmin, xAxis.fXmax, nBinsX);
      const binEdgesY = yAxis.fXbins || this.makeLinearBins(yAxis.fXmin, yAxis.fXmax, nBinsY);
    
      // Full array including underflow/overflow
      const countsFlatFull = hist.fArray;
      const countsFull = [];
      for (let iy = 0; iy < nBinsY + 2; iy++) {
        countsFull.push(countsFlatFull.slice(iy * (nBinsX + 2), (iy + 1) * (nBinsX + 2)));
      }
    
      // Extract interior bins and transpose to match ROOT orientation
      const counts2D = [];
      for (let iy = 1; iy <= nBinsY; iy++) {
        const row = [];
        for (let ix = 1; ix <= nBinsX; ix++) {
          row.push(countsFull[iy][ix] || 0);
        }
        counts2D.push(row);
      }
    
      // Compute marginal sums
      const marginalX = new Array(nBinsX).fill(0);
      const marginalY = new Array(nBinsY).fill(0);
      for (let ix = 0; ix < nBinsX; ix++) {
        for (let iy = 0; iy < nBinsY; iy++) {
          const val = counts2D[iy][ix];
          marginalX[ix] += val;
          marginalY[iy] += val;
        }
      }

    
      // Bin centers
      const centersX = binEdgesX.slice(0, -1).map((v, i) => 0.5 * (v + binEdgesX[i + 1]));
      const centersY = binEdgesY.slice(0, -1).map((v, i) => 0.5 * (v + binEdgesY[i + 1]));
    
      return { counts2D, centersX, centersY, marginalX, marginalY, nBinsX, nBinsY };
    }


    makeLinearBins(min, max, n) {
      const bins = [];
      const step = (max - min) / n;
      for (let i = 0; i <= n; i++) bins.push(min + i * step);
      return bins;
    }

    buildPlotlyData() {
      if (!this.cachedData) return { data: [], layout: {} };

      const { counts2D, centersX, centersY, marginalX, marginalY } = this.cachedData;
      const s = this.settings;

      // Handle X/Y swapping
      let heatmapX = centersX;
      let heatmapY = centersY;
      let heatmapZ = counts2D;
      let marginalXData = marginalX;
      let marginalYData = marginalY;
      let marginalXCenters = centersX;
      let marginalYCenters = centersY;

      if (s.swapXY) {
        // Swap axes: transpose the heatmap data and swap marginals
        heatmapX = centersY;
        heatmapY = centersX;
        // Transpose the 2D array
        heatmapZ = counts2D[0].map((_, colIndex) => counts2D.map(row => row[colIndex]));
        // Swap marginal data
        marginalXData = marginalY;
        marginalYData = marginalX;
        marginalXCenters = centersY;
        marginalYCenters = centersX;
      }

      // Apply log scaling to heatmap if requested
      if (s.heatmapLogScale) {
        heatmapZ = heatmapZ.map(row => 
          row.map(val => val > 0 ? Math.log10(val) : null)
        );
      }

      // Apply log scaling to marginals if requested
      if (s.xMarginalLogScale) {
        marginalXData = marginalXData.map(val => val > 0 ? Math.log10(val) : null);
      }
      if (s.yMarginalLogScale) {
        marginalYData = marginalYData.map(val => val > 0 ? Math.log10(val) : null);
      }

      const heatmap = {
        z: heatmapZ,
        x: heatmapX,
        y: heatmapY,
        type: 'heatmap',
        colorscale: s.heatmapColorscale,
        colorbar: s.showColorbar ? { 
          title: s.heatmapLogScale ? 'log₁₀(Counts)' : 'Counts',
          titleside: 'right'
        } : null,
        showscale: s.showColorbar,
        hovertemplate: (s.swapXY ? 'Y' : 'X') + ': %{x}<br>' + 
                      (s.swapXY ? 'X' : 'Y') + ': %{y}<br>' + 
                      (s.heatmapLogScale ? 'log₁₀(Counts)' : 'Counts') + 
                      ': %{z}<extra></extra>',
        name: '2D Histogram',
        xaxis: 'x',
        yaxis: 'y',
        opacity: s.heatmapOpacity,
      };

      const marginalXTrace = {
        x: marginalXCenters,
        y: marginalXData,
        type: 'bar',
        name: (s.swapXY ? 'Y' : 'X') + ' marginal',
        marker: { 
          color: s.marginalBarColor,
          opacity: s.marginalBarOpacity,
          line: s.showMarginalOutlines ? {
            color: s.marginalOutlineColor,
            width: 1
          } : undefined
        },
        hovertemplate: (s.swapXY ? 'Y' : 'X') + ': %{x}<br>' + 
                      (s.xMarginalLogScale ? 'log₁₀(Counts)' : 'Counts') + 
                      ': %{y}<extra></extra>',
        xaxis: 'x2',
        yaxis: 'y2',
      };

      const marginalYTrace = {
        x: marginalYData,
        y: marginalYCenters,
        type: 'bar',
        name: (s.swapXY ? 'X' : 'Y') + ' marginal',
        orientation: 'h',
        marker: { 
          color: s.marginalBarColor,
          opacity: s.marginalBarOpacity,
          line: s.showMarginalOutlines ? {
            color: s.marginalOutlineColor,
            width: 1
          } : undefined
        },
        hovertemplate: (s.swapXY ? 'X' : 'Y') + ': %{y}<br>' + 
                      (s.yMarginalLogScale ? 'log₁₀(Counts)' : 'Counts') + 
                      ': %{x}<extra></extra>',
        xaxis: 'x3',
        yaxis: 'y3',
      };

      // Calculate layout dimensions
      const mainWidth = 1.0 - s.marginalWidth - s.plotGap;
      const mainHeight = 1.0 - s.marginalHeight - s.plotGap;

      const layout = {
        showlegend: false,
        autosize: true,
        margin: { t: 30, r: 30, l: 40, b: 40 },
        
        // Main heatmap (bottom-left)
        xaxis: { 
          domain: [0, mainWidth], 
          anchor: 'y',
          title: (s.swapXY ? 'Y' : 'X') + ' Position',
          autorange: s.flipXAxis ? 'reversed' : true,
        },
        yaxis: { 
          domain: [0, mainHeight], 
          anchor: 'x',
          title: (s.swapXY ? 'X' : 'Y') + ' Position',
          autorange: s.flipYAxis ? 'reversed' : true,
        },
        
        // X marginal (top)
        xaxis2: { 
          domain: [0, mainWidth], 
          anchor: 'y2',
          showticklabels: false,
          matches: 'x' // Ensure X axes are synchronized
        },
        yaxis2: { 
          domain: [mainHeight + s.plotGap, 1], 
          anchor: 'x2',
          title: s.xMarginalLogScale ? 'log₁₀(Counts)' : 'Counts',
        },
        
        // Y marginal (right)
        xaxis3: { 
          domain: [mainWidth + s.plotGap, 1], 
          anchor: 'y3',
          title: s.yMarginalLogScale ? 'log₁₀(Counts)' : 'Counts',
        },
        yaxis3: { 
          domain: [0, mainHeight], 
          anchor: 'x3',
          showticklabels: false,
          matches: 'y' // Ensure Y axes are synchronized
        },
        
        // Background color for better visual separation
        plot_bgcolor: 'white',
        paper_bgcolor: 'white',
      };

      return {
        data: [heatmap, marginalXTrace, marginalYTrace],
        layout,
      };
    }

    initPlot(raw) {
      const dataObj = this.extractPlotData(raw);
      if (!dataObj) return { data: [], layout: {} };

      this.cachedData = dataObj;
      return this.buildPlotlyData();
    }

    updatePlot(raw) {
      // Only update data if the raw data has changed
      const dataObj = this.extractPlotData(raw);
      if (!dataObj) return { data: [], layout: undefined };

      this.cachedData = dataObj;
      
      // For updatePlot, we only return new data, not layout
      const { data } = this.buildPlotlyData();
      return { data, layout: undefined };
    }

    onLayoutUpdate() {
      // Use cached data to rebuild with new layout settings
      if (this.cachedData) {
        const { data, layout } = this.buildPlotlyData();
        this.setState(prev => ({
          data,
          layout,
          revision: prev.revision + 1
        }));
      }
    }
  }
}
