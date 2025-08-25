export default function makeWFD5IntegralHistogram({ Plot, SettingTypes }) {
  return class WFD5IntegralHistogram extends Plot {
    static displayName = 'WFD5 Integral Histogram';
    static name = 'WFD5IntegralHistogram';

    static get settingSchema() {
      return {
        ...super.settingSchema,

        // Basic bar style
        barColor: {
          type: SettingTypes.COLOR,
          default: 'rgba(70,130,180,1)',
          label: 'Bar Color',
          onChange: 'onLayoutUpdate',
          advanced: false,
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

        // Detector / crate selection
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

        dataUrl: {
          type: SettingTypes.STRING,
          default:
            'http://127.0.0.1:3001/api/json_path?last=1&json_path=/data_products/WFD5TraceIntegralHistogramCollection',
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

      const {
        crate,
        amcSlot,
        channel,
        detectorSystem,
        subdetector,
        barColor,
        barBorderColor,
        barBorderWidth,
      } = this.settings;

      let match = null;
      let matchMethod = null;
      let settingsToUpdate = {};

      // Try to match by detector/subdetector first
      if (detectorSystem && subdetector) {
        // Escape special regex characters and use precise matching
        const escapedDetector = detectorSystem.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const escapedSubdetector = subdetector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        
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
          if (channelInfo.crate !== null || channelInfo.amcSlot !== null || channelInfo.channel !== null) {
            settingsToUpdate = {
              ...settingsToUpdate,
              ...(channelInfo.crate !== null && { crate: channelInfo.crate }),
              ...(channelInfo.amcSlot !== null && { amcSlot: channelInfo.amcSlot }),
              ...(channelInfo.channel !== null && { channel: channelInfo.channel }),
            };
          }
        }
      }

      // Fall back to crate/amc/channel if no detector match
      if (!match && (crate || amcSlot || channel)) {
        // Use precise matching with word boundaries for numbers
        const cratePattern = crate ? `crate[_\\s]*${crate}(?:[_\\s]|$)` : '';
        const amcPattern = amcSlot ? `amc[_\\s]*${amcSlot}(?:[_\\s]|$)` : '';
        const channelPattern = channel ? `ch[_\\s]*${channel}(?:[_\\s]|$)` : '';
        
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
          if (detectorInfo.detectorSystem || detectorInfo.subdetector) {
            settingsToUpdate = {
              ...settingsToUpdate,
              ...(detectorInfo.detectorSystem && { detectorSystem: detectorInfo.detectorSystem }),
              ...(detectorInfo.subdetector && { subdetector: detectorInfo.subdetector }),
            };
          }
        }
      }

      // Update settings if we found complementary info
      if (Object.keys(settingsToUpdate).length > 0) {
        const newSettings = { ...this.settings, ...settingsToUpdate };
        
        // Check if any settings actually changed to avoid infinite loops
        const hasChanges = Object.keys(settingsToUpdate).some(
          key => this.settings[key] !== settingsToUpdate[key]
        );
        
        if (hasChanges && typeof this.props.onSettingsCorrected === 'function') {
          console.log(`[${this.id}] Auto-syncing settings via ${matchMethod} match:`, settingsToUpdate);
          // Use setTimeout to avoid updating during render
          setTimeout(() => {
            this.props.onSettingsCorrected(newSettings);
          }, 0);
        }
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
        name: match.fName || `crate_${crate}_amc_${amcSlot}_ch_${channel}`,
        marker: {
          color: barColor,
          line: { color: barBorderColor, width: barBorderWidth },
        },
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
  }
}