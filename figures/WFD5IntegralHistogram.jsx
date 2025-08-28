export default function makeWFD5IntegralHistogram({ Plot, SettingTypes }) {
  return class WFD5IntegralHistogram extends Plot {
    static displayName = 'WFD5 Integral Histogram';
    static name = 'WFD5IntegralHistogram';

    static get settingSchema() {
      return {
        ...super.settingSchema,
        
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

        // Channel fallback
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

        // Data URL (override the default from Figure)
        dataUrl: {
          type: SettingTypes.STRING,
          default:
            'http://127.0.0.1:3001/api/json_path?last=1&json_path=/data_products/WFD5TraceIntegralHistogramCollection',
          label: 'Data URL',
          onChange: 'onUpdateTick',
          advanced: true,
        },

        // Basic bar style
        barColor: {
          type: SettingTypes.COLOR,
          default: 'rgba(70,130,180,1)', // steelblue
          label: 'Bar Color',
          onChange: 'onLayoutUpdate',
          advanced: true,
        },

        // Advanced bar styling
        barBorderColor: {
          type: SettingTypes.COLOR,
          default: 'rgba(0,0,0,1)',
          label: 'Bar Border Color',
          onChange: 'onLayoutUpdate',
          advanced: true,
        },
        barBorderWidth: {
          type: SettingTypes.FLOAT,
          default: 0,
          label: 'Bar Border Width',
          onChange: 'onLayoutUpdate',
          advanced: true,
        },

        // Y-axis scale
        useLogScale: {
          type: SettingTypes.BOOLEAN,
          default: false,
          label: 'Use Log Scale (Y-axis) (Requires Refresh)',
          onChange: 'onLayoutUpdate',
          advanced: false,
        },

        // X-axis locking
        lockXAxis: {
          type: SettingTypes.BOOLEAN,
          default: false,
          label: 'Lock X-Axis Range (Requires Refresh)',
          onChange: 'onLayoutUpdate',
          advanced: true,
        },
        xAxisMin: {
          type: SettingTypes.FLOAT,
          default: 0,
          label: 'X-Axis Min (Requires Refresh)',
          onChange: 'onLayoutUpdate',
          advanced: true,
        },
        xAxisMax: {
          type: SettingTypes.FLOAT,
          default: 1000,
          label: 'X-Axis Max (Requires Refresh)',
          onChange: 'onLayoutUpdate',
          advanced: true,
        },

        // Y-axis locking
        lockYAxis: {
          type: SettingTypes.BOOLEAN,
          default: false,
          label: 'Lock Y-Axis Range (Requires Refresh)',
          onChange: 'onLayoutUpdate',
          advanced: true,
        },
        yAxisMin: {
          type: SettingTypes.FLOAT,
          default: 1,
          label: 'Y-Axis Min (Requires Refresh)',
          onChange: 'onLayoutUpdate',
          advanced: true,
        },
        yAxisMax: {
          type: SettingTypes.FLOAT,
          default: 1000,
          label: 'Y-Axis Max (Requires Refresh)',
          onChange: 'onLayoutUpdate',
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
        layout: undefined, // Don't update layout on data updates
      };
    }

    // Helper function to extract crate/amc/channel from histogram name/title
    extractChannelInfo(name, title) {
      const text = `${name} ${title}`.toLowerCase();
      
      // Use word boundaries to ensure exact number matches
      const crateMatch = text.match(/crate[_\s]*(\d+)(?:[_\s]|$)/);
      const amcMatch = text.match(/amc[_\s]*(\d+)(?:[_\s]|$)/);
      const channelMatch = text.match(/ch[_\s]*(\d+)(?:[_\s]|$)/);
      
      return {
        crate: crateMatch ? parseInt(crateMatch[1], 10) : null,
        amcSlot: amcMatch ? parseInt(amcMatch[1], 10) : null,
        channel: channelMatch ? parseInt(channelMatch[1], 10) : null,
      };
    }

    // Helper function to extract detector/subdetector from histogram name/title
    extractDetectorInfo(name, title) {
      const text = `${name} ${title}`.toLowerCase();
      
      // Use word boundaries to ensure exact matches for detector names
      const detMatch = text.match(/det[_\s]*([a-zA-Z0-9]+)(?:[_\s]|$)/);
      const subdetMatch = text.match(/subdet[_\s]*([a-zA-Z0-9]+)(?:[_\s]|$)/);
      
      return {
        detectorSystem: detMatch ? detMatch[1] : null,
        subdetector: subdetMatch ? subdetMatch[1] : null,
      };
    }

    extractPlotData(raw) {
      const list = raw?.data?.arr;
      if (!Array.isArray(list)) return null;

      const s = this.settings;

      let match = null;
      let matchMethod = null;
      let settingsToUpdate = {};

      // Try to match by detector/subdetector first
      if (s.detectorSystem && s.subdetector) {
        // Escape special regex characters and use precise matching
        const escapedDetector = s.detectorSystem.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const escapedSubdetector = s.subdetector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        
        const detectorPattern = `det[_\\s]*${escapedDetector}(?:[_\\s]|$)`;
        const subdetectorPattern = `subdet[_\\s]*${escapedSubdetector}(?:[_\\s]|$)`;
        
        const combinedPattern = new RegExp(
          `(?=.*${detectorPattern})(?=.*${subdetectorPattern})`,
          'i'
        );

        match = list.find((h) => {
          const name = h.fName ?? '';
          const title = h.fTitle ?? '';
          const fullText = `${name} ${title}`;
          return combinedPattern.test(fullText);
        });
        
        if (match) {
          matchMethod = 'detector';
          // Extract channel info and update settings
          const channelInfo = this.extractChannelInfo(match.fName ?? '', match.fTitle ?? '');
          if (channelInfo.crate !== null && s.crate !== channelInfo.crate) {
            settingsToUpdate.crate = channelInfo.crate;
          }
          if (channelInfo.amcSlot !== null && s.amcSlot !== channelInfo.amcSlot) {
            settingsToUpdate.amcSlot = channelInfo.amcSlot;
          }
          if (channelInfo.channel !== null && s.channel !== channelInfo.channel) {
            settingsToUpdate.channel = channelInfo.channel;
          }
        }
      }

      // Fall back to crate/amc/channel if no detector match
      if (!match && (s.crate || s.amcSlot || s.channel)) {
        // Use precise matching with word boundaries for numbers
        const cratePattern = s.crate ? `crate[_\\s]*${s.crate}(?:[_\\s]|$)` : '';
        const amcPattern = s.amcSlot ? `amc[_\\s]*${s.amcSlot}(?:[_\\s]|$)` : '';
        const channelPattern = s.channel ? `ch[_\\s]*${s.channel}(?:[_\\s]|$)` : '';
        
        // Build combined pattern with positive lookaheads for all specified values
        const patterns = [cratePattern, amcPattern, channelPattern].filter(p => p);
        const combinedPattern = new RegExp(
          patterns.map(p => `(?=.*${p})`).join(''),
          'i'
        );

        match = list.find((h) => {
          const name = h.fName ?? '';
          const title = h.fTitle ?? '';
          const fullText = `${name} ${title}`;
          return combinedPattern.test(fullText);
        });
        
        if (match) {
          matchMethod = 'channel';
          // Extract detector info and update settings
          const detectorInfo = this.extractDetectorInfo(match.fName ?? '', match.fTitle ?? '');
          if (detectorInfo.detectorSystem && s.detectorSystem !== detectorInfo.detectorSystem) {
            settingsToUpdate.detectorSystem = detectorInfo.detectorSystem;
          }
          if (detectorInfo.subdetector && s.subdetector !== detectorInfo.subdetector) {
            settingsToUpdate.subdetector = detectorInfo.subdetector;
          }
        }
      }

      // Update settings if we found complementary info
      if (Object.keys(settingsToUpdate).length > 0 && typeof this.props.onSettingsCorrected === 'function') {
        const newSettings = { ...s, ...settingsToUpdate };
        console.log(`[${this.id || 'WFD5IntegralHistogram'}] Auto-syncing settings via ${matchMethod} match:`, settingsToUpdate);
        // Use setTimeout to avoid updating during render
        setTimeout(() => this.props.onSettingsCorrected(newSettings), 0);
      }

      if (!match || !Array.isArray(match.fArray)) return null;

      const fXaxis = match.fXaxis || {};
      const nBins = fXaxis.fNbins || match.fArray.length - 2;
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
        name: match.fName || s.detectorSystem || `Crate ${s.crate}, AMC ${s.amcSlot}, Ch ${s.channel}`,
        marker: {
          color: s.barColor,
          line: { color: s.barBorderColor, width: s.barBorderWidth },
        },
        hoverinfo: 'x+y+name',
        width: binWidth,
      };
    }

    buildLayout(trace) {
      const s = this.settings;
      
      let xAxisConfig = {
        title: 'Integral',
      };
      
      let yAxisConfig = {
        title: 'Counts',
        type: s.useLogScale ? 'log' : 'linear',
      };

      // Apply X-axis locking
      if (s.lockXAxis) {
        xAxisConfig.range = [s.xAxisMin, s.xAxisMax];
        xAxisConfig.autorange = false;
      } else if (trace) {
        xAxisConfig.range = [trace.x[0], trace.x[trace.x.length - 1]];
      }

      // Apply Y-axis locking
      if (s.lockYAxis) {
        if (s.useLogScale) {
          // For log scale, convert linear values to log space
          // Ensure minimum value is > 0 for log scale
          const logMin = s.yAxisMin > 0 ? Math.log10(s.yAxisMin) : 0;
          const logMax = s.yAxisMax > 0 ? Math.log10(s.yAxisMax) : 2;
          yAxisConfig.range = [logMin, logMax];
        } else {
          yAxisConfig.range = [s.yAxisMin, s.yAxisMax];
        }
        yAxisConfig.autorange = false;
      }
      
      return {
        autosize: true,
        margin: { t: 30, r: 20, l: 40, b: 40 },
        xaxis: xAxisConfig,
        yaxis: yAxisConfig,
        bargap: 0,
        legend: { orientation: 'h', y: -0.2 },
      };
    }
  }
}