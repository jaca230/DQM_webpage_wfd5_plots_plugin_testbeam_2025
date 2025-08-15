import makeWFD5IntegralHistogram from './figures/WFD5IntegralHistogram.jsx';
import makeWFD5HodoscopePositionHistogram from './figures/WFD5HodoscopePositionHistogram.jsx';
import makeWFD5Waveform from './figures/WFD5Waveform.jsx';
import makeWFD5LysoArrayHistograms from './figures/WFD5LysoArrayHistograms.jsx';
import makeWFD5LysoArrayWaveforms from './figures/WFD5LysoArrayWaveforms.jsx';
import makeWFD5WaveformTraceOnly from './figures/WFD5WaveformTraceOnly.jsx';

function registerFigures({ registry, baseClasses }) {
  const { Figure, Plot, SettingTypes } = baseClasses;

  const figures = [
    makeWFD5IntegralHistogram({ Figure, Plot, SettingTypes }),
    makeWFD5HodoscopePositionHistogram({ Figure, Plot, SettingTypes }),
    makeWFD5Waveform({ Figure, Plot, SettingTypes }),
    makeWFD5LysoArrayHistograms({ Figure, Plot, SettingTypes }),
    makeWFD5LysoArrayWaveforms({ Figure, Plot, SettingTypes }),
    makeWFD5WaveformTraceOnly({ Figure, Plot, SettingTypes }),
  ];

  figures.forEach(fig => registry.register(fig.name, fig));
}

// Export for ES module import
export default registerFigures;

// Expose globally for IIFE/eval() based plugin loading
if (typeof window !== 'undefined') {
  window.PluginRegister = registerFigures;
}
