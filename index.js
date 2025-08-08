import makeWFD5IntegralHistogram from './figures/WFD5IntegralHistogram.jsx';
import makeWFD5WaveformTraces from './figures/WFD5WaveformTraces.jsx';

function registerFigures({ registry, baseClasses }) {
  const { Plot, SettingTypes } = baseClasses;

  const WFD5IntegralHistogram = makeWFD5IntegralHistogram({ Plot, SettingTypes });
  const WFD5WaveformTraces = makeWFD5WaveformTraces({ Plot, SettingTypes });

  registry.register(WFD5IntegralHistogram.name, WFD5IntegralHistogram);
  registry.register(WFD5WaveformTraces.name, WFD5WaveformTraces);
}

// Export for ES module import
export default registerFigures;

// Expose globally for IIFE/eval() based plugin loading
if (typeof window !== 'undefined') {
  window.PluginRegister = registerFigures;
}
