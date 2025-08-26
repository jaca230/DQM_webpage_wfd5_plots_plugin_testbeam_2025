export default function makeWFD5Waveform({ Figure, SettingTypes }) {
  return class WFD5Waveform extends Figure {
  static displayName = 'WFD5 Waveform';
  static name = 'WFD5Waveform';

  static get settingSchema() {
    return {
      // Data URLs
      traceDataUrl: {
        type: SettingTypes.STRING,
        default:
          'http://127.0.0.1:3000/api/json_path?last=1&json_path=/data_products/WFD5WaveformCollection',
        label: 'Trace Data URL',
        onChange: 'onUpdateTick',
        advanced: true,
      },
      integralDataUrl: {
        type: SettingTypes.STRING,
        default:
          'http://127.0.0.1:3000/api/json_path?last=1&json_path=/data_products/WFD5TraceIntegralCollection',
        label: 'Integral Data URL',
        onChange: 'onUpdateTick',
        advanced: true,
      },

      // Plot refresh speed
      updateFrequency: {
        type: SettingTypes.NUMBER,
        default: 2,
        label: 'Update Interval (s)',
        onChange: 'onUpdateFrequencyChange',
        advanced: false,
      },

      // Basic trace style
      traceColor: {
        type: SettingTypes.COLOR,
        default: 'rgba(70,130,180,1)', // steelblue
        label: 'Trace Color',
        onChange: 'onLayoutUpdate',
        advanced: false,
      },

      // Detector selection
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

      // Visual toggles
      showIntegralBounds: {
        type: SettingTypes.BOOLEAN,
        default: true,
        label: 'Show Integral Bounds',
        onChange: 'onLayoutUpdate',
      },
      showIntegralFill: {
        type: SettingTypes.BOOLEAN,
        default: true,
        label: 'Fill Integral Region',
        onChange: 'onLayoutUpdate',
        advanced: true,
      },
      showPedestal: {
        type: SettingTypes.BOOLEAN,
        default: true,
        label: 'Show Pedestal',
        onChange: 'onLayoutUpdate',
      },
      showPedestalStdev: {
        type: SettingTypes.BOOLEAN,
        default: false,
        label: 'Show Pedestal StdDev',
        onChange: 'onLayoutUpdate',
      },
      showIntegralInfoBox: {
        type: SettingTypes.BOOLEAN,
        default: true,
        label: 'Show Integral Info Box',
        onChange: 'onLayoutUpdate',
      },

      // Y axis settings
      subtractPedestal: {
        type: SettingTypes.BOOLEAN,
        default: false,
        label: 'Subtract Pedestal',
        onChange: 'onLayoutUpdate',
        advanced: false,
      },
      fixYAxis: {
        type: SettingTypes.BOOLEAN,
        default: false,
        label: 'Fix Y Axis Range',
        onChange: 'onLayoutUpdate',
        advanced: true,
      },
      yAxisMin: {
        type: SettingTypes.NUMBER,
        default: -2048, // -2^11
        label: 'Y Axis Min',
        onChange: 'onLayoutUpdate',
        advanced: true,
      },
      yAxisMax: {
        type: SettingTypes.NUMBER,
        default: 2048, // 2^11
        label: 'Y Axis Max',
        onChange: 'onLayoutUpdate',
        advanced: true,
      },

      // X axis settings
      fixXAxis: {
        type: SettingTypes.BOOLEAN,
        default: false,
        label: 'Fix X Axis Range',
        onChange: 'onLayoutUpdate',
        advanced: true,
      },
      xAxisMin: {
        type: SettingTypes.NUMBER,
        default: 0,
        label: 'X Axis Min',
        onChange: 'onLayoutUpdate',
        advanced: true,
      },
      xAxisMax: {
        type: SettingTypes.NUMBER,
        default: 2048,
        label: 'X Axis Max',
        onChange: 'onLayoutUpdate',
        advanced: true,
      },

      // Advanced visual style
      pedestalLineColor: {
        type: SettingTypes.COLOR,
        default: 'black',
        label: 'Pedestal Line Color',
        onChange: 'onLayoutUpdate',
        advanced: true,
      },
      pedestalLineWidth: {
        type: SettingTypes.NUMBER,
        default: 2,
        label: 'Pedestal Line Width',
        onChange: 'onLayoutUpdate',
        advanced: true,
      },
      pedestalLineDash: {
        type: SettingTypes.STRING,
        default: 'dash',
        label: 'Pedestal Line Dash',
        onChange: 'onLayoutUpdate',
        advanced: true,
      },
      pedestalStdevFillColor: {
        type: SettingTypes.COLOR,
        default: 'rgba(0,0,0,0.1)',
        label: 'Pedestal StdDev Fill Color',
        onChange: 'onLayoutUpdate',
        advanced: true,
      },
      integralLineColor: {
        type: SettingTypes.COLOR,
        default: 'black',
        label: 'Integral Bound Line Color',
        onChange: 'onLayoutUpdate',
        advanced: true,
      },
      integralLineWidth: {
        type: SettingTypes.NUMBER,
        default: 2,
        label: 'Integral Bound Line Width',
        onChange: 'onLayoutUpdate',
        advanced: true,
      },
      integralLineDash: {
        type: SettingTypes.STRING,
        default: 'dash',
        label: 'Integral Bound Line Dash',
        onChange: 'onLayoutUpdate',
        advanced: true,
      },
      integralFillColor: {
        type: SettingTypes.COLOR,
        default: 'rgba(100,150,255,0.15)',
        label: 'Integral Region Fill Color',
        onChange: 'onLayoutUpdate',
        advanced: true,
      },
      showIntegralWindowText: {
        type: SettingTypes.BOOLEAN,
        default: false,
        label: 'Show Integral Window Text',
        onChange: 'onLayoutUpdate',
        advanced: true,
      },
      integralInfoBoxBgColor: {
        type: SettingTypes.COLOR,
        default: 'rgba(255,255,255,0.8)',
        label: 'Info Box Background Color',
        onChange: 'onLayoutUpdate',
        advanced: true,
      },
      integralInfoBoxBorderColor: {
        type: SettingTypes.COLOR,
        default: 'black',
        label: 'Info Box Border Color',
        onChange: 'onLayoutUpdate',
        advanced: true,
      },
      integralInfoBoxX: {
        type: SettingTypes.NUMBER,
        default: 0.02,
        label: 'Integral Info Box X (paper coords)',
        onChange: 'onLayoutUpdate',
        advanced: true,
      },
      integralInfoBoxY: {
        type: SettingTypes.NUMBER,
        default: 0.98,
        label: 'Integral Info Box Y (paper coords)',
        onChange: 'onLayoutUpdate',
        advanced: true,
      },
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      layout: {},
      revision: 0,
      loading: true,
      error: null,
    };
    this.latestTraceRaw = null;
    this.latestIntegralRaw = null;
  }

  async onInit() {
    try {
      const [traceRaw, integralRaw] = await Promise.all([
        this.fetchJson(this.settings.traceDataUrl),
        this.fetchJson(this.settings.integralDataUrl),
      ]);
      this.latestTraceRaw = traceRaw;
      this.latestIntegralRaw = integralRaw;

      const { data, layout } = this.formatPlotly(traceRaw, integralRaw);
      this.setState({ data, layout, loading: false, error: null, revision: 0 });
    } catch (err) {
      this.setState({ error: err.message, loading: false });
    }
  }

  async onUpdateTick() {
    try {
      const [traceRaw, integralRaw] = await Promise.all([
        this.fetchJson(this.settings.traceDataUrl),
        this.fetchJson(this.settings.integralDataUrl),
      ]);
      this.latestTraceRaw = traceRaw;
      this.latestIntegralRaw = integralRaw;

      const { data, layout: newLayout } = this.formatPlotly(traceRaw, integralRaw);
      this.setState((prev) => ({
        data,
        layout: { ...prev.layout, shapes: newLayout.shapes, annotations: newLayout.annotations, yaxis: newLayout.yaxis, xaxis: newLayout.xaxis },
        error: null,
        revision: prev.revision + 1,
      }));
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  onLayoutUpdate() {
    if (this.latestTraceRaw && this.latestIntegralRaw) {
      const { data, layout } = this.formatPlotly(this.latestTraceRaw, this.latestIntegralRaw);
      this.setState((prev) => ({ data, layout, revision: prev.revision + 1 }));
    }
  }

  updateSetting(key, value) {
    const schema = this.constructor.settingSchema[key];
    let processedValue = value;

    if (schema) {
      switch (schema.type) {
        case SettingTypes.NUMBER:
          processedValue = Number(value);
          if (isNaN(processedValue)) processedValue = schema.default;
          break;
        case SettingTypes.INT:
          processedValue = parseInt(value);
          if (isNaN(processedValue)) processedValue = schema.default;
          break;
        case SettingTypes.BOOLEAN:
          processedValue = typeof value === 'string' ? value.toLowerCase() === 'true' : Boolean(value);
          break;
        case SettingTypes.STRING:
        case SettingTypes.COLOR:
          processedValue = String(value);
          break;
        default:
          break;
      }
    }

    this.settings = { ...this.settings, [key]: processedValue };
    const onChange = schema?.onChange;
    if (onChange === 'onUpdateTick') this.onUpdateTick();
    else if (onChange === 'onLayoutUpdate') this.onLayoutUpdate();
    else if (onChange === 'onUpdateFrequencyChange') this.onUpdateFrequencyChange?.(processedValue);
    this.forceUpdate();
  }

  async fetchJson(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error ${res.status} for URL ${url}`);
    return res.json();
  }

  formatPlotly(traceRaw, integralRaw) {
    const s = this.settings;

    const findMatchingItem = (list) => {
      if (!Array.isArray(list)) return { match: null, method: null };

      let match = null;
      let method = null;
      let settingsToUpdate = {};

      // Try detector/subdetector first
      if (s.detectorSystem && s.subdetector) {
        match = list.find(
          (item) => item.detectorSystem === s.detectorSystem && item.subdetector === s.subdetector
        );
        if (match) {
          method = 'detector';
          // Sync channel info from matched item
          const channelInfo = {
            ...(match.crateNum != null && { crate: match.crateNum }),
            ...(match.amcNum != null && { amcSlot: match.amcNum }),
            ...(match.channelTag != null && { channel: match.channelTag }),
          };
          settingsToUpdate = { ...settingsToUpdate, ...channelInfo };
        }
      }

      // Fall back to crate/amc/channel
      if (!match && (s.crate || s.amcSlot || s.channel)) {
        match = list.find(
          (item) => item.crateNum === s.crate && item.amcNum === s.amcSlot && item.channelTag === s.channel
        );
        if (match) {
          method = 'channel';
          // Sync detector info from matched item
          const detectorInfo = {
            ...(match.detectorSystem && { detectorSystem: match.detectorSystem }),
            ...(match.subdetector && { subdetector: match.subdetector }),
          };
          settingsToUpdate = { ...settingsToUpdate, ...detectorInfo };
        }
      }

      // Update settings if we found complementary info
      if (Object.keys(settingsToUpdate).length > 0) {
        const newSettings = { ...s, ...settingsToUpdate };
        
        // Check if any settings actually changed to avoid infinite loops
        const hasChanges = Object.keys(settingsToUpdate).some(
          key => s[key] !== settingsToUpdate[key]
        );
        
        if (hasChanges && typeof this.props.onSettingsCorrected === 'function') {
          console.log(`[${this.id}] Auto-syncing settings via ${method} match:`, settingsToUpdate);
          // Use setTimeout to avoid updating during render
          setTimeout(() => {
            this.props.onSettingsCorrected(newSettings);
          }, 0);
        }
      }

      return { match, method };
    };

    const traceList = traceRaw?.data?.arr;
    const integralList = integralRaw?.data?.arr;

    const { match: traceItem } = findMatchingItem(traceList);
    const { match: integralItem } = findMatchingItem(integralList);

    if (!traceItem || !Array.isArray(traceItem.trace)) {
      return {
        data: [],
        layout: { title: 'No trace data available', autosize: true, margin: { t: 50, r: 20, l: 60, b: 40 } }
      };
    }

    // Process trace data - subtract pedestal if enabled
    let processedTrace = [...traceItem.trace];
    let adjustedPedestalLevel = integralItem?.pedestalLevel;
    
    if (s.subtractPedestal && integralItem && typeof integralItem.pedestalLevel === 'number') {
      processedTrace = traceItem.trace.map(value => value - integralItem.pedestalLevel);
      adjustedPedestalLevel = 0; // Pedestal line should be at zero when subtracted
    }

    const traceData = {
      type: 'scatter',
      mode: 'lines',
      x: traceItem.trace.map((_, i) => i),
      y: processedTrace,
      name: `${traceItem.detectorSystem || 'N/A'} ${traceItem.subdetector || ''} (Crate ${traceItem.crateNum}, AMC ${traceItem.amcNum}, Ch ${traceItem.channelTag})`,
      line: { color: s.traceColor },
      hoverinfo: 'x+y+name',
    };

    const shapes = [];
    const annotations = [];

    if (integralItem && s.showIntegralBounds) {
      const { first: startSample, second: endSample } = integralItem.integration_window || {};

      if (startSample != null && endSample != null) {
        const yMin = Math.min(...processedTrace);
        const yMax = Math.max(...processedTrace);

        if (s.showIntegralFill) {
          shapes.push({
            type: 'rect',
            xref: 'x',
            x0: startSample,
            x1: endSample,
            yref: 'y',
            y0: yMin,
            y1: yMax,
            fillcolor: s.integralFillColor,
            line: { width: 0 },
          });
        }

        shapes.push(
          {
            type: 'line',
            x0: startSample,
            x1: startSample,
            y0: yMin,
            y1: yMax,
            line: { color: s.integralLineColor, width: s.integralLineWidth, dash: s.integralLineDash },
          },
          {
            type: 'line',
            x0: endSample,
            x1: endSample,
            y0: yMin,
            y1: yMax,
            line: { color: s.integralLineColor, width: s.integralLineWidth, dash: s.integralLineDash },
          }
        );

        if (s.showIntegralWindowText) {
          annotations.push({
            x: (startSample + endSample) / 2,
            y: 1.02,
            xref: 'x',
            yref: 'paper',
            text: `Integration Window: [${startSample}, ${endSample}]`,
            showarrow: false,
            font: { size: 12, color: s.integralLineColor },
            align: 'center',
          });
        }
      }
    }

    if (integralItem && s.showPedestal && typeof adjustedPedestalLevel === 'number') {
      shapes.push({
        type: 'line',
        x0: 0,
        x1: 1,
        xref: 'paper',
        y0: adjustedPedestalLevel,
        y1: adjustedPedestalLevel,
        line: { color: s.pedestalLineColor, width: s.pedestalLineWidth, dash: s.pedestalLineDash },
      });
    }

    if (integralItem && s.showPedestalStdev && typeof integralItem.pedestalStdev === 'number') {
      const pedestal = adjustedPedestalLevel;
      const stdev = integralItem.pedestalStdev;
      shapes.push({
        type: 'rect',
        xref: 'paper',
        x0: 0,
        x1: 1,
        y0: pedestal - stdev,
        y1: pedestal + stdev,
        fillcolor: s.pedestalStdevFillColor,
        line: { width: 0 },
      });
    }

    if (integralItem && s.showIntegralInfoBox) {
      annotations.push({
        x: s.integralInfoBoxX,
        y: s.integralInfoBoxY,
        xref: 'paper',
        yref: 'paper',
        text:
          `Integral: ${integralItem.integral?.toFixed(2) || 'N/A'}<br>` +
          `Amplitude: ${integralItem.amplitude?.toFixed(2) || 'N/A'}<br>` +
          `Peak Time: ${integralItem.peak_time || 'N/A'}`,
        showarrow: false,
        font: { size: 12, color: 'black' },
        align: 'left',
        bgcolor: s.integralInfoBoxBgColor,
        bordercolor: s.integralInfoBoxBorderColor,
        borderwidth: 1,
      });
    }

    // Configure Y-axis based on fixYAxis setting
    const yaxis = {
      title: 'ADC Value'
    };
    
    if (s.fixYAxis) {
      yaxis.range = [s.yAxisMin, s.yAxisMax];
      yaxis.autorange = false;
    } else {
      yaxis.autorange = true;
    }

    // Configure X-axis based on fixXAxis setting
    const xaxis = {
      title: 'Sample Number'
    };
    
    if (s.fixXAxis) {
      xaxis.range = [s.xAxisMin, s.xAxisMax];
      xaxis.autorange = false;
    } else {
      xaxis.autorange = true;
    }

    const layout = {
      autosize: true,
      margin: { t: 50, r: 20, l: 60, b: 40 },
      xaxis,
      yaxis,
      legend: { orientation: 'h', y: -0.15 },
      shapes,
      annotations,
    };

    return { data: [traceData], layout };
  }


  render() {
    const { data, layout, revision, loading, error } = this.state;

    return (
      <div className="no-drag" style={{ width: '100%', height: '100%' }}>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {!loading && !error && (
          <Plotly
            data={data}
            layout={layout}
            revision={revision}
            style={{ width: '100%', height: '100%' }}
            useResizeHandler
            config={{ responsive: true, modeBarButtonsToRemove: ['select2d', 'lasso2d'] }}
          />
        )}
      </div>
    );
  }
}
}