function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _get() {
  return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
    var p = _superPropBase(e, t);
    if (p) {
      var n = Object.getOwnPropertyDescriptor(p, t);
      return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
    }
  }, _get.apply(null, arguments);
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(t, "prototype", {
    writable: false
  }), e && _setPrototypeOf(t, e);
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _superPropBase(t, o) {
  for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)););
  return t;
}
function _superPropGet(t, o, e, r) {
  var p = _get(_getPrototypeOf(t), o, e);
  return p;
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

function makeWFD5IntegralHistogram(_ref) {
  var _WFD5IntegralHistogram;
  var Plot = _ref.Plot,
    SettingTypes = _ref.SettingTypes;
  return _WFD5IntegralHistogram = /*#__PURE__*/function (_Plot) {
    function WFD5IntegralHistogram() {
      _classCallCheck(this, WFD5IntegralHistogram);
      return _callSuper(this, WFD5IntegralHistogram, arguments);
    }
    _inherits(WFD5IntegralHistogram, _Plot);
    return _createClass(WFD5IntegralHistogram, [{
      key: "initPlot",
      value: function initPlot(raw) {
        var data = this.extractPlotData(raw);
        return {
          data: data ? [data] : [],
          layout: this.buildLayout(data)
        };
      }
    }, {
      key: "updatePlot",
      value: function updatePlot(raw) {
        var data = this.extractPlotData(raw);
        return {
          data: data ? [data] : [],
          layout: undefined
        };
      }
    }, {
      key: "extractPlotData",
      value: function extractPlotData(raw) {
        var _raw$data, _fXaxis$fXmin, _fXaxis$fXmax;
        var list = raw === null || raw === void 0 || (_raw$data = raw.data) === null || _raw$data === void 0 ? void 0 : _raw$data.arr;
        if (!Array.isArray(list)) return null;
        var _this$settings = this.settings,
          crate = _this$settings.crate,
          amcSlot = _this$settings.amcSlot,
          channel = _this$settings.channel;
        var pattern = new RegExp("crate[_\\s]*".concat(crate, ".*amc[_\\s]*").concat(amcSlot, ".*ch[_\\s]*").concat(channel), 'i');
        var match = list.find(function (h) {
          var _h$fName, _h$fTitle;
          var name = (_h$fName = h.fName) !== null && _h$fName !== void 0 ? _h$fName : '';
          var title = (_h$fTitle = h.fTitle) !== null && _h$fTitle !== void 0 ? _h$fTitle : '';
          return pattern.test(name) || pattern.test(title);
        });
        if (!match || !Array.isArray(match.fArray)) return null;
        var fXaxis = match.fXaxis || {};
        var nBins = fXaxis.fNbins || match.fArray.length - 2;
        var xMin = (_fXaxis$fXmin = fXaxis.fXmin) !== null && _fXaxis$fXmin !== void 0 ? _fXaxis$fXmin : 0;
        var xMax = (_fXaxis$fXmax = fXaxis.fXmax) !== null && _fXaxis$fXmax !== void 0 ? _fXaxis$fXmax : 1;
        var binWidth = (xMax - xMin) / nBins;
        var binEdges = Array.from({
          length: nBins + 1
        }, function (_, i) {
          return xMin + i * binWidth;
        });
        var counts = match.fArray.slice(1, nBins + 1); // skip underflow
        var yVals = [0].concat(_toConsumableArray(counts));
        return {
          type: 'bar',
          x: binEdges,
          y: yVals,
          name: match.fName || "crate_".concat(crate, "_amc_").concat(amcSlot, "_ch_").concat(channel),
          marker: {
            color: 'steelblue'
          },
          hoverinfo: 'x+y+name',
          width: binWidth
        };
      }
    }, {
      key: "buildLayout",
      value: function buildLayout(trace) {
        if (!trace) return {};
        return {
          autosize: true,
          margin: {
            t: 30,
            r: 20,
            l: 40,
            b: 40
          },
          xaxis: {
            title: 'Integral',
            range: [trace.x[0], trace.x[trace.x.length - 1]]
          },
          yaxis: {
            title: 'Counts'
          },
          bargap: 0,
          legend: {
            orientation: 'h',
            y: -0.2
          }
        };
      }
    }], [{
      key: "settingSchema",
      get: function get() {
        return _objectSpread2(_objectSpread2({}, _superPropGet(WFD5IntegralHistogram, "settingSchema", this)), {}, {
          crate: {
            type: SettingTypes.INT,
            "default": 0,
            label: 'Crate #',
            onChange: 'onUpdateTick'
          },
          amcSlot: {
            type: SettingTypes.INT,
            "default": 0,
            label: 'AMC Slot #',
            onChange: 'onUpdateTick'
          },
          channel: {
            type: SettingTypes.INT,
            "default": 0,
            label: 'Channel #',
            onChange: 'onUpdateTick'
          },
          dataUrl: {
            type: SettingTypes.STRING,
            "default": 'http://127.0.0.1:8001/api/json_path?last=1&json_path=/data_products/WFD5TraceIntegralHistogramCollection',
            label: 'Data URL',
            onChange: 'onUpdateTick',
            advanced: true
          }
        });
      }
    }]);
  }(Plot), _defineProperty(_WFD5IntegralHistogram, "displayName", 'WFD5 Integral Histogram'), _defineProperty(_WFD5IntegralHistogram, "name", 'WFD5IntegralHistogram'), _WFD5IntegralHistogram;
}

function makeWFD5WaveformTraces(_ref) {
  var _WFD5WaveformTraces;
  var Plot = _ref.Plot,
    SettingTypes = _ref.SettingTypes;
  return _WFD5WaveformTraces = /*#__PURE__*/function (_Plot) {
    function WFD5WaveformTraces() {
      _classCallCheck(this, WFD5WaveformTraces);
      return _callSuper(this, WFD5WaveformTraces, arguments);
    }
    _inherits(WFD5WaveformTraces, _Plot);
    return _createClass(WFD5WaveformTraces, [{
      key: "initPlot",
      value: function initPlot(raw) {
        var trace = this.buildTrace(raw);
        return {
          data: trace ? [trace] : [],
          layout: {
            autosize: true,
            margin: {
              t: 30,
              r: 20,
              l: 40,
              b: 40
            },
            xaxis: {
              title: 'Sample Number'
            },
            yaxis: {
              title: 'ADC Value'
            },
            legend: {
              orientation: 'h',
              y: -0.2
            }
          }
        };
      }
    }, {
      key: "updatePlot",
      value: function updatePlot(raw) {
        var trace = this.buildTrace(raw);
        return {
          data: trace ? [trace] : [],
          layout: undefined
        };
      }
    }, {
      key: "buildTrace",
      value: function buildTrace(raw) {
        var _raw$data;
        var list = raw === null || raw === void 0 || (_raw$data = raw.data) === null || _raw$data === void 0 ? void 0 : _raw$data.arr;
        if (!Array.isArray(list)) return null;
        var _this$settings = this.settings,
          crate = _this$settings.crate,
          amcSlot = _this$settings.amcSlot,
          channel = _this$settings.channel;
        var wf = list.find(function (w) {
          return w.crateNum === crate && w.amcNum === amcSlot && w.channelTag === channel && Array.isArray(w.trace);
        });
        if (!wf) return null;
        return {
          type: 'scatter',
          mode: 'lines',
          x: wf.trace.map(function (_, i) {
            return i;
          }),
          y: wf.trace,
          name: "Crate ".concat(crate, ", AMC ").concat(amcSlot, ", Ch ").concat(channel),
          line: {
            color: 'steelblue'
          },
          hoverinfo: 'x+y+name'
        };
      }
    }], [{
      key: "settingSchema",
      get: function get() {
        return _objectSpread2(_objectSpread2({}, _superPropGet(WFD5WaveformTraces, "settingSchema", this)), {}, {
          crate: {
            type: SettingTypes.INT,
            "default": 0,
            label: 'Crate #',
            onChange: 'onUpdateTick'
          },
          amcSlot: {
            type: SettingTypes.INT,
            "default": 0,
            label: 'AMC Slot #',
            onChange: 'onUpdateTick'
          },
          channel: {
            type: SettingTypes.INT,
            "default": 0,
            label: 'Channel #',
            onChange: 'onUpdateTick'
          },
          dataUrl: {
            type: SettingTypes.STRING,
            "default": 'http://127.0.0.1:8001/api/json_path?last=1&json_path=/data_products/WFD5WaveformCollection',
            label: 'Data URL',
            onChange: 'onUpdateTick',
            advanced: true
          }
        });
      }
    }]);
  }(Plot), _defineProperty(_WFD5WaveformTraces, "displayName", 'WFD5 Waveform Traces'), _defineProperty(_WFD5WaveformTraces, "name", 'WFD5WaveformTraces'), _WFD5WaveformTraces;
}

function makeWFD5HodoscopePositionHistogram(_ref) {
  var _WFD5HodoscopePositionHistogram;
  var Plot = _ref.Plot,
    SettingTypes = _ref.SettingTypes;
  return _WFD5HodoscopePositionHistogram = /*#__PURE__*/function (_Plot) {
    function WFD5HodoscopePositionHistogram() {
      _classCallCheck(this, WFD5HodoscopePositionHistogram);
      return _callSuper(this, WFD5HodoscopePositionHistogram, arguments);
    }
    _inherits(WFD5HodoscopePositionHistogram, _Plot);
    return _createClass(WFD5HodoscopePositionHistogram, [{
      key: "extractPlotData",
      value:
      // Parse TH2D JSON and construct plotly heatmap + marginal histograms
      function extractPlotData(raw) {
        var hist = raw === null || raw === void 0 ? void 0 : raw.data;
        if (!hist || !Array.isArray(hist.fArray)) return null;
        var xAxis = hist.fXaxis || {};
        var yAxis = hist.fYaxis || {};
        var nBinsX = xAxis.fNbins;
        var nBinsY = yAxis.fNbins;
        if (!nBinsX || !nBinsY) return null;
        var binEdgesX = xAxis.fXbins || this.makeLinearBins(xAxis.fXmin, xAxis.fXmax, nBinsX);
        var binEdgesY = yAxis.fXbins || this.makeLinearBins(yAxis.fXmin, yAxis.fXmax, nBinsY);

        // TH2D fArray layout: 
        // fArray[0] = underflow, next nBinsX*nBinsY elements = bin contents, fArray end = overflow
        // fArray length = nBinsX*nBinsY + 2 usually

        // Extract 2D histogram counts from fArray ignoring underflow and overflow
        var countsFlat = hist.fArray.slice(1, 1 + nBinsX * nBinsY);

        // Reshape to 2D array [y][x] for heatmap (ROOT stores histograms in row-major order)
        var counts2D = [];
        for (var iy = 0; iy < nBinsY; iy++) {
          var row = [];
          for (var ix = 0; ix < nBinsX; ix++) {
            row.push(countsFlat[iy * nBinsX + ix] || 0);
          }
          counts2D.push(row);
        }

        // Compute marginal histograms (sum counts along x and y axes)
        var marginalX = new Array(nBinsX).fill(0);
        var marginalY = new Array(nBinsY).fill(0);
        for (var _iy = 0; _iy < nBinsY; _iy++) {
          for (var _ix = 0; _ix < nBinsX; _ix++) {
            var val = counts2D[_iy][_ix];
            marginalX[_ix] += val;
            marginalY[_iy] += val;
          }
        }

        // Use bin centers for axes: centers = (edges[i] + edges[i+1]) / 2
        var centersX = [];
        for (var i = 0; i < nBinsX; i++) {
          centersX.push(0.5 * (binEdgesX[i] + binEdgesX[i + 1]));
        }
        var centersY = [];
        for (var _i = 0; _i < nBinsY; _i++) {
          centersY.push(0.5 * (binEdgesY[_i] + binEdgesY[_i + 1]));
        }
        return {
          heatmap: {
            z: counts2D,
            x: centersX,
            y: centersY,
            type: 'heatmap',
            colorscale: 'Viridis',
            colorbar: {
              title: 'Counts'
            },
            hoverinfo: 'x+y+z',
            name: '2D Histogram',
            showscale: true
          },
          marginalX: {
            x: centersX,
            y: marginalX,
            type: 'bar',
            name: 'X marginal',
            marker: {
              color: 'steelblue'
            }
          },
          marginalY: {
            x: marginalY,
            y: centersY,
            type: 'bar',
            name: 'Y marginal',
            orientation: 'h',
            marker: {
              color: 'steelblue'
            }
          },
          layout: {
            grid: {
              rows: 2,
              columns: 2,
              roworder: 'top to bottom',
              subplots: [['xy', 'xMarginal'], ['yMarginal', 'empty']],
              columnwidth: [0.7, 0.3],
              rowheight: [0.3, 0.7],
              xgap: 0.02,
              ygap: 0.02
            },
            showlegend: false,
            autosize: true,
            margin: {
              t: 30,
              r: 30,
              l: 40,
              b: 40
            },
            // Main heatmap
            xaxis: {
              domain: [0, 0.7],
              anchor: 'y'
            },
            yaxis: {
              domain: [0, 0.7],
              anchor: 'x',
              autorange: 'reversed'
            },
            // X marginal on top
            xaxis2: {
              domain: [0, 0.7],
              anchor: 'y2'
            },
            yaxis2: {
              domain: [0.7, 1],
              anchor: 'x2',
              showticklabels: false
            },
            // Y marginal on right
            xaxis3: {
              domain: [0.7, 1],
              anchor: 'y3',
              showticklabels: false
            },
            yaxis3: {
              domain: [0, 0.7],
              anchor: 'x3'
            }
          }
        };
      }
    }, {
      key: "makeLinearBins",
      value: function makeLinearBins(min, max, n) {
        var bins = [];
        var step = (max - min) / n;
        for (var i = 0; i <= n; i++) bins.push(min + i * step);
        return bins;
      }
    }, {
      key: "initPlot",
      value: function initPlot(raw) {
        var dataObj = this.extractPlotData(raw);
        if (!dataObj) return {
          data: [],
          layout: {}
        };

        // Return the traces and layout in the expected structure for multi-axes subplot
        return {
          data: [_objectSpread2(_objectSpread2({}, dataObj.heatmap), {}, {
            xaxis: 'x',
            yaxis: 'y'
          }), _objectSpread2(_objectSpread2({}, dataObj.marginalX), {}, {
            xaxis: 'x2',
            yaxis: 'y2'
          }), _objectSpread2(_objectSpread2({}, dataObj.marginalY), {}, {
            xaxis: 'x3',
            yaxis: 'y3'
          })],
          layout: dataObj.layout
        };
      }
    }, {
      key: "updatePlot",
      value: function updatePlot(raw) {
        return this.initPlot(raw);
      }
    }], [{
      key: "settingSchema",
      get: function get() {
        return _objectSpread2(_objectSpread2({}, _superPropGet(WFD5HodoscopePositionHistogram, "settingSchema", this)), {}, {
          dataUrl: {
            type: SettingTypes.STRING,
            "default": 'http://localhost:8001/api/json_path?last=1&json_path=/data_products/HodoscopePositionHistogram',
            label: 'Data URL',
            onChange: 'onUpdateTick',
            advanced: true
          }
        });
      }
    }]);
  }(Plot), _defineProperty(_WFD5HodoscopePositionHistogram, "displayName", 'WFD5 Hodoscope Position Histogram'), _defineProperty(_WFD5HodoscopePositionHistogram, "name", 'WFD5HodoscopePositionHistogram'), _WFD5HodoscopePositionHistogram;
}

function registerFigures(_ref) {
  var registry = _ref.registry,
    baseClasses = _ref.baseClasses;
  var Plot = baseClasses.Plot,
    SettingTypes = baseClasses.SettingTypes;
  var WFD5IntegralHistogram = makeWFD5IntegralHistogram({
    Plot: Plot,
    SettingTypes: SettingTypes
  });
  var WFD5WaveformTraces = makeWFD5WaveformTraces({
    Plot: Plot,
    SettingTypes: SettingTypes
  });
  var WFD5HodoscopePositionHistogram = makeWFD5HodoscopePositionHistogram({
    Plot: Plot,
    SettingTypes: SettingTypes
  });
  registry.register(WFD5IntegralHistogram.name, WFD5IntegralHistogram);
  registry.register(WFD5WaveformTraces.name, WFD5WaveformTraces);
  registry.register(WFD5HodoscopePositionHistogram.name, WFD5HodoscopePositionHistogram);
}

// Expose globally for IIFE/eval() based plugin loading
if (typeof window !== 'undefined') {
  window.PluginRegister = registerFigures;
}

export { registerFigures as default };
