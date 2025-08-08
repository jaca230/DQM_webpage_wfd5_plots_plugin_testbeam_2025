export default function makeWFD5IntegralHistogram({ Plot, SettingTypes }) {
  return class WFD5IntegralHistogram extends Plot {
    static displayName = 'WFD5 Integral Histogram';
    static name = 'WFD5IntegralHistogram';

    static get settingSchema() {
      return {
        ...super.settingSchema,
        crate: {
          type: SettingTypes.INT,
          default: 0,
          label: 'Crate #',
          onChange: 'onUpdateTick',
        },
        amcSlot: {
          type: SettingTypes.INT,
          default: 0,
          label: 'AMC Slot #',
          onChange: 'onUpdateTick',
        },
        channel: {
          type: SettingTypes.INT,
          default: 0,
          label: 'Channel #',
          onChange: 'onUpdateTick',
        },
        dataUrl: {
          type: SettingTypes.STRING,
          default:
            'http://127.0.0.1:8001/api/json_path?last=1&json_path=/data_products/WFD5TraceIntegralHistogramCollection',
          label: 'Data URL',
          onChange: 'onUpdateTick',
          advanced: true,
        },
      };
    }

    initPlot(raw) {
      const data = this.extractPlotData(raw);
      return {
        data: data ? [data] : [],
        layout: this.buildLayout(data),
      };
    }

    updatePlot(raw) {
      const data = this.extractPlotData(raw);
      return {
        data: data ? [data] : [],
        layout: undefined,
      };
    }

    extractPlotData(raw) {
      const list = raw?.data?.arr;
      if (!Array.isArray(list)) return null;

      const { crate, amcSlot, channel } = this.settings;
      const pattern = new RegExp(`crate[_\\s]*${crate}.*amc[_\\s]*${amcSlot}.*ch[_\\s]*${channel}`, 'i');

      const match = list.find(h => {
        const name = h.fName ?? '';
        const title = h.fTitle ?? '';
        return pattern.test(name) || pattern.test(title);
      });

      if (!match || !Array.isArray(match.fArray)) return null;

      const fXaxis = match.fXaxis || {};
      const nBins = fXaxis.fNbins || (match.fArray.length - 2);
      const xMin = fXaxis.fXmin ?? 0;
      const xMax = fXaxis.fXmax ?? 1;
      const binWidth = (xMax - xMin) / nBins;

      const binEdges = Array.from({ length: nBins + 1 }, (_, i) => xMin + i * binWidth);
      const counts = match.fArray.slice(1, nBins + 1); // skip underflow
      const yVals = [0, ...counts];

      return {
        type: 'bar',
        x: binEdges,
        y: yVals,
        name: match.fName || `crate_${crate}_amc_${amcSlot}_ch_${channel}`,
        marker: { color: 'steelblue' },
        hoverinfo: 'x+y+name',
        width: binWidth,
      };
    }

    buildLayout(trace) {
      if (!trace) return {};
      return {
        autosize: true,
        margin: { t: 30, r: 20, l: 40, b: 40 },
        xaxis: {
          title: 'Integral',
          range: [trace.x[0], trace.x[trace.x.length - 1]],
        },
        yaxis: { title: 'Counts' },
        bargap: 0,
        legend: { orientation: 'h', y: -0.2 },
      };
    }
  };
}
