export default function makeWFD5WaveformTraces({ Plot, SettingTypes }) {
  return class WFD5WaveformTraces extends Plot {
    static displayName = 'WFD5 Waveform Traces';
    static name = 'WFD5WaveformTraces';

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
            'http://127.0.0.1:8001/api/json_path?last=1&json_path=/data_products/WFD5WaveformCollection',
          label: 'Data URL',
          onChange: 'onUpdateTick',
          advanced: true,
        },
      };
    }

    initPlot(raw) {
      const trace = this.buildTrace(raw);
      return {
        data: trace ? [trace] : [],
        layout: {
          autosize: true,
          margin: { t: 30, r: 20, l: 40, b: 40 },
          xaxis: { title: 'Sample Number' },
          yaxis: { title: 'ADC Value' },
          legend: { orientation: 'h', y: -0.2 },
        },
      };
    }

    updatePlot(raw) {
      const trace = this.buildTrace(raw);
      return {
        data: trace ? [trace] : [],
        layout: undefined,
      };
    }

    buildTrace(raw) {
      const list = raw?.data?.arr;
      if (!Array.isArray(list)) return null;

      const { crate, amcSlot, channel } = this.settings;

      const wf = list.find(
        w =>
          w.crateNum === crate &&
          w.amcNum === amcSlot &&
          w.channelTag === channel &&
          Array.isArray(w.trace)
      );

      if (!wf) return null;

      return {
        type: 'scatter',
        mode: 'lines',
        x: wf.trace.map((_, i) => i),
        y: wf.trace,
        name: `Crate ${crate}, AMC ${amcSlot}, Ch ${channel}`,
        line: { color: 'steelblue' },
        hoverinfo: 'x+y+name',
      };
    }
  };
}
