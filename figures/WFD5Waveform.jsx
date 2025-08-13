export default function makeWFD5Waveform({ Plot, SettingTypes }) {
  return class WFD5Waveform extends Plot {
    static displayName = 'WFD5 Waveform';
    static name = 'WFD5Waveform';

    static get settingSchema() {
      return {
        ...super.settingSchema,
        traceDataUrl: {
          type: SettingTypes.STRING,
          default:
            'http://127.0.0.1:8001/api/json_path?last=1&json_path=/data_products/WFD5WaveformCollection',
          label: 'Trace Data URL',
          onChange: 'onUpdateTick',
          advanced: true,
        },
        integralDataUrl: {
          type: SettingTypes.STRING,
          default:
            'http://127.0.0.1:8001/api/json_path?last=1&json_path=/data_products/WFD5TraceIntegralCollection',
          label: 'Integral Data URL',
          onChange: 'onUpdateTick',
          advanced: true,
        },
        detectorSystem: {
          type: SettingTypes.STRING,
          default: '',
          label: 'Detector System',
          onChange: 'onUpdateTick',
        },
        subdetector: {
          type: SettingTypes.STRING,
          default: '',
          label: 'Subdetector',
          onChange: 'onUpdateTick',
        },
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
        showIntegralBounds: {
          type: SettingTypes.BOOLEAN,
          default: true,
          label: 'Show Integral Bounds',
          onChange: 'onUpdateTick',
        },
        showPedestal: {
          type: SettingTypes.BOOLEAN,
          default: true,
          label: 'Show Pedestal',
          onChange: 'onUpdateTick',
        },
        showPedestalStdev: {
          type: SettingTypes.BOOLEAN,
          default: false,
          label: 'Show Pedestal StdDev',
          onChange: 'onUpdateTick',
        },
      };
    }

    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        error: null,
        data: [],
        layout: {},
        revision: 0,
      };
    }

    async fetchJson(url) {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP error ${res.status} for URL ${url}`);
      return res.json();
    }

    async onInit() {
      await this.loadData();
    }

    async onUpdateTick() {
      await this.loadData();
    }

    async loadData() {
      const { 
        traceDataUrl, 
        integralDataUrl, 
        detectorSystem, 
        subdetector, 
        crate, 
        amcSlot, 
        channel 
      } = this.settings;
      
      this.setState({ loading: true, error: null });

      try {
        const [traceRaw, integralRaw] = await Promise.all([
          this.fetchJson(traceDataUrl),
          this.fetchJson(integralDataUrl),
        ]);

        // Try to find matching waveform and integral
        const { traceData, actualTraceParams } = this.buildTrace(
          traceRaw, 
          detectorSystem, 
          subdetector, 
          crate, 
          amcSlot, 
          channel
        );
        
        const { integralInfo, actualIntegralParams } = this.extractIntegralInfo(
          integralRaw, 
          detectorSystem, 
          subdetector, 
          crate, 
          amcSlot, 
          channel
        );

        // Update settings with what was actually found
        this.updateSettingsWithActualParams(actualTraceParams || actualIntegralParams);

        const { data, layout } = this.composePlot(traceData, integralInfo);

        this.setState(state => ({
          data,
          layout,
          loading: false,
          error: null,
          revision: state.revision + 1,
        }));
      } catch (err) {
        this.setState({ error: err.message, loading: false });
      }
    }

    findMatchingItem(list, detectorSystem, subdetector, crate, amcSlot, channel) {
      if (!Array.isArray(list)) return null;

      // First try detector system and subdetector if provided
      if (detectorSystem && subdetector) {
        const item = list.find(w => 
          w.detectorSystem === detectorSystem && 
          w.subdetector === subdetector
        );
        if (item) {
          return {
            item,
            params: {
              detectorSystem: item.detectorSystem,
              subdetector: item.subdetector,
              crate: item.crateNum,
              amcSlot: item.amcNum,
              channel: item.channelTag
            }
          };
        }
      }

      // Fallback to crate/AMC/channel
      const item = list.find(w =>
        w.crateNum === crate &&
        w.amcNum === amcSlot &&
        w.channelTag === channel
      );

      if (item) {
        return {
          item,
          params: {
            detectorSystem: item.detectorSystem || '',
            subdetector: item.subdetector || '',
            crate: item.crateNum,
            amcSlot: item.amcNum,
            channel: item.channelTag
          }
        };
      }

      return null;
    }

    buildTrace(raw, detectorSystem, subdetector, crate, amcSlot, channel) {
      const list = raw?.data?.arr;
      const result = this.findMatchingItem(list, detectorSystem, subdetector, crate, amcSlot, channel);
      
      if (!result || !Array.isArray(result.item.trace)) {
        return { traceData: null, actualTraceParams: null };
      }

      const wf = result.item;
      const traceData = {
        type: 'scatter',
        mode: 'lines',
        x: wf.trace.map((_, i) => i),
        y: wf.trace,
        name: `${wf.detectorSystem || 'N/A'} ${wf.subdetector || ''} (Crate ${wf.crateNum}, AMC ${wf.amcNum}, Ch ${wf.channelTag})`,
        line: { color: 'steelblue' },
        hoverinfo: 'x+y+name',
      };

      return { traceData, actualTraceParams: result.params };
    }

    extractIntegralInfo(raw, detectorSystem, subdetector, crate, amcSlot, channel) {
      const list = raw?.data?.arr;
      const result = this.findMatchingItem(list, detectorSystem, subdetector, crate, amcSlot, channel);
      
      if (!result || typeof result.item.integral !== 'number') {
        return { integralInfo: null, actualIntegralParams: null };
      }

      return { integralInfo: result.item, actualIntegralParams: result.params };
    }

    updateSettingsWithActualParams(params) {
      if (!params) return;
      
      // Update settings with the actual parameters found
      Object.keys(params).forEach(key => {
        if (this.settings[key] !== params[key]) {
          this.settings[key] = params[key];
        }
      });
    }

    composePlot(traceData, integralInfo) {
      if (!traceData) {
        return {
          data: [],
          layout: { title: 'No trace data available' },
        };
      }

      const data = [traceData];
      const shapes = [];
      const annotations = [];

      // Add integral bounds as vertical dashed lines
      if (integralInfo && this.settings.showIntegralBounds && integralInfo.integration_window) {
        const { first: startSample, second: endSample } = integralInfo.integration_window;
        
        shapes.push(
          {
            type: 'line',
            x0: startSample,
            x1: startSample,
            y0: 0,
            y1: 1,
            yref: 'paper',
            line: {
              color: 'red',
              width: 2,
              dash: 'dash'
            }
          },
          {
            type: 'line',
            x0: endSample,
            x1: endSample,
            y0: 0,
            y1: 1,
            yref: 'paper',
            line: {
              color: 'red',
              width: 2,
              dash: 'dash'
            }
          }
        );

        annotations.push({
          x: (startSample + endSample) / 2,
          y: 1.02,
          xref: 'x',
          yref: 'paper',
          text: `Integration Window: [${startSample}, ${endSample}]`,
          showarrow: false,
          font: { size: 12, color: 'red' },
          align: 'center',
        });
      }

      // Add pedestal line
      if (traceData && integralInfo && this.settings.showPedestal && 
          typeof integralInfo.pedestalLevel === 'number') {
        shapes.push({
          type: 'line',
          x0: 0,
          x1: 1,
          xref: 'paper',
          y0: integralInfo.pedestalLevel,
          y1: integralInfo.pedestalLevel,
          line: {
            color: 'green',
            width: 2,
            dash: 'dash'
          }
        });
      }

      // Add pedestal standard deviation lines
      if (traceData && integralInfo && this.settings.showPedestalStdev && 
          typeof integralInfo.pedestalLevel === 'number' &&
          typeof integralInfo.pedestalStdev === 'number') {
        const pedestal = integralInfo.pedestalLevel;
        const stdev = integralInfo.pedestalStdev;
        
        shapes.push(
          {
            type: 'line',
            x0: 0,
            x1: 1,
            xref: 'paper',
            y0: pedestal + stdev,
            y1: pedestal + stdev,
            line: {
              color: 'lightgreen',
              width: 1,
              dash: 'dash'
            }
          },
          {
            type: 'line',
            x0: 0,
            x1: 1,
            xref: 'paper',
            y0: pedestal - stdev,
            y1: pedestal - stdev,
            line: {
              color: 'lightgreen',
              width: 1,
              dash: 'dash'
            }
          }
        );
      }

      // Add integral info annotation
      if (integralInfo) {
        annotations.push({
          x: 0.02,
          y: 0.98,
          xref: 'paper',
          yref: 'paper',
          text: `Integral: ${integralInfo.integral?.toFixed(2) || 'N/A'}<br>` +
                `Amplitude: ${integralInfo.amplitude?.toFixed(2) || 'N/A'}<br>` +
                `Peak Time: ${integralInfo.peak_time || 'N/A'}`,
          showarrow: false,
          font: { size: 12, color: 'black' },
          align: 'left',
          bgcolor: 'rgba(255,255,255,0.8)',
          bordercolor: 'black',
          borderwidth: 1
        });
      }

      const layout = {
        autosize: true,
        margin: { t: 50, r: 20, l: 60, b: 40 },
        xaxis: { title: 'Sample Number' },
        yaxis: { title: 'ADC Value' },
        legend: { orientation: 'h', y: -0.15 },
        shapes,
        annotations,
      };

      return { data, layout };
    }
  };
}