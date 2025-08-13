function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
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
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _regenerator() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var e,
    t,
    r = "function" == typeof Symbol ? Symbol : {},
    n = r.iterator || "@@iterator",
    o = r.toStringTag || "@@toStringTag";
  function i(r, n, o, i) {
    var c = n && n.prototype instanceof Generator ? n : Generator,
      u = Object.create(c.prototype);
    return _regeneratorDefine(u, "_invoke", function (r, n, o) {
      var i,
        c,
        u,
        f = 0,
        p = o || [],
        y = false,
        G = {
          p: 0,
          n: 0,
          v: e,
          a: d,
          f: d.bind(e, 4),
          d: function (t, r) {
            return i = t, c = 0, u = e, G.n = r, a;
          }
        };
      function d(r, n) {
        for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
          var o,
            i = p[t],
            d = G.p,
            l = i[2];
          r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
        }
        if (o || r > 1) return a;
        throw y = true, n;
      }
      return function (o, p, l) {
        if (f > 1) throw TypeError("Generator is already running");
        for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
          i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
          try {
            if (f = 2, i) {
              if (c || (o = "next"), t = i[o]) {
                if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                u = t.value, c < 2 && (c = 0);
              } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
              i = e;
            } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
          } catch (t) {
            i = e, c = 1, u = t;
          } finally {
            f = 1;
          }
        }
        return {
          value: t,
          done: y
        };
      };
    }(r, o, i), true), u;
  }
  var a = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  t = Object.getPrototypeOf;
  var c = [][n] ? t(t([][n]())) : (_regeneratorDefine(t = {}, n, function () {
      return this;
    }), t),
    u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
  function f(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine(u), _regeneratorDefine(u, o, "Generator"), _regeneratorDefine(u, n, function () {
    return this;
  }), _regeneratorDefine(u, "toString", function () {
    return "[object Generator]";
  }), (_regenerator = function () {
    return {
      w: i,
      m: f
    };
  })();
}
function _regeneratorDefine(e, r, n, t) {
  var i = Object.defineProperty;
  try {
    i({}, "", {});
  } catch (e) {
    i = 0;
  }
  _regeneratorDefine = function (e, r, n, t) {
    if (r) i ? i(e, r, {
      value: n,
      enumerable: !t,
      configurable: !t,
      writable: !t
    }) : e[r] = n;else {
      function o(r, n) {
        _regeneratorDefine(e, r, function (e) {
          return this._invoke(r, n, e);
        });
      }
      o("next", 0), o("throw", 1), o("return", 2);
    }
  }, _regeneratorDefine(e, r, n, t);
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
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

function makeWFD5Waveform(_ref) {
  var _WFD5Waveform;
  var Plot = _ref.Plot,
    SettingTypes = _ref.SettingTypes;
  return _WFD5Waveform = /*#__PURE__*/function (_Plot) {
    function WFD5Waveform(props) {
      var _this;
      _classCallCheck(this, WFD5Waveform);
      _this = _callSuper(this, WFD5Waveform, [props]);
      _this.state = {
        loading: true,
        error: null,
        data: [],
        layout: {},
        revision: 0
      };
      return _this;
    }
    _inherits(WFD5Waveform, _Plot);
    return _createClass(WFD5Waveform, [{
      key: "fetchJson",
      value: function () {
        var _fetchJson = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(url) {
          var res;
          return _regenerator().w(function (_context) {
            while (1) switch (_context.n) {
              case 0:
                _context.n = 1;
                return fetch(url);
              case 1:
                res = _context.v;
                if (res.ok) {
                  _context.n = 2;
                  break;
                }
                throw new Error("HTTP error ".concat(res.status, " for URL ").concat(url));
              case 2:
                return _context.a(2, res.json());
            }
          }, _callee);
        }));
        function fetchJson(_x) {
          return _fetchJson.apply(this, arguments);
        }
        return fetchJson;
      }()
    }, {
      key: "onInit",
      value: function () {
        var _onInit = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
          return _regenerator().w(function (_context2) {
            while (1) switch (_context2.n) {
              case 0:
                _context2.n = 1;
                return this.loadData();
              case 1:
                return _context2.a(2);
            }
          }, _callee2, this);
        }));
        function onInit() {
          return _onInit.apply(this, arguments);
        }
        return onInit;
      }()
    }, {
      key: "onUpdateTick",
      value: function () {
        var _onUpdateTick = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
          return _regenerator().w(function (_context3) {
            while (1) switch (_context3.n) {
              case 0:
                _context3.n = 1;
                return this.loadData();
              case 1:
                return _context3.a(2);
            }
          }, _callee3, this);
        }));
        function onUpdateTick() {
          return _onUpdateTick.apply(this, arguments);
        }
        return onUpdateTick;
      }()
    }, {
      key: "loadData",
      value: function () {
        var _loadData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
          var _this$settings, traceDataUrl, integralDataUrl, detectorSystem, subdetector, crate, amcSlot, channel, _yield$Promise$all, _yield$Promise$all2, traceRaw, integralRaw, _this$buildTrace, traceData, actualTraceParams, _this$extractIntegral, integralInfo, actualIntegralParams, _this$composePlot, data, layout, _t;
          return _regenerator().w(function (_context4) {
            while (1) switch (_context4.n) {
              case 0:
                _this$settings = this.settings, traceDataUrl = _this$settings.traceDataUrl, integralDataUrl = _this$settings.integralDataUrl, detectorSystem = _this$settings.detectorSystem, subdetector = _this$settings.subdetector, crate = _this$settings.crate, amcSlot = _this$settings.amcSlot, channel = _this$settings.channel;
                this.setState({
                  loading: true,
                  error: null
                });
                _context4.p = 1;
                _context4.n = 2;
                return Promise.all([this.fetchJson(traceDataUrl), this.fetchJson(integralDataUrl)]);
              case 2:
                _yield$Promise$all = _context4.v;
                _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
                traceRaw = _yield$Promise$all2[0];
                integralRaw = _yield$Promise$all2[1];
                // Try to find matching waveform and integral
                _this$buildTrace = this.buildTrace(traceRaw, detectorSystem, subdetector, crate, amcSlot, channel), traceData = _this$buildTrace.traceData, actualTraceParams = _this$buildTrace.actualTraceParams;
                _this$extractIntegral = this.extractIntegralInfo(integralRaw, detectorSystem, subdetector, crate, amcSlot, channel), integralInfo = _this$extractIntegral.integralInfo, actualIntegralParams = _this$extractIntegral.actualIntegralParams; // Update settings with what was actually found
                this.updateSettingsWithActualParams(actualTraceParams || actualIntegralParams);
                _this$composePlot = this.composePlot(traceData, integralInfo), data = _this$composePlot.data, layout = _this$composePlot.layout;
                this.setState(function (state) {
                  return {
                    data: data,
                    layout: layout,
                    loading: false,
                    error: null,
                    revision: state.revision + 1
                  };
                });
                _context4.n = 4;
                break;
              case 3:
                _context4.p = 3;
                _t = _context4.v;
                this.setState({
                  error: _t.message,
                  loading: false
                });
              case 4:
                return _context4.a(2);
            }
          }, _callee4, this, [[1, 3]]);
        }));
        function loadData() {
          return _loadData.apply(this, arguments);
        }
        return loadData;
      }()
    }, {
      key: "findMatchingItem",
      value: function findMatchingItem(list, detectorSystem, subdetector, crate, amcSlot, channel) {
        if (!Array.isArray(list)) return null;

        // First try detector system and subdetector if provided
        if (detectorSystem && subdetector) {
          var _item = list.find(function (w) {
            return w.detectorSystem === detectorSystem && w.subdetector === subdetector;
          });
          if (_item) {
            return {
              item: _item,
              params: {
                detectorSystem: _item.detectorSystem,
                subdetector: _item.subdetector,
                crate: _item.crateNum,
                amcSlot: _item.amcNum,
                channel: _item.channelTag
              }
            };
          }
        }

        // Fallback to crate/AMC/channel
        var item = list.find(function (w) {
          return w.crateNum === crate && w.amcNum === amcSlot && w.channelTag === channel;
        });
        if (item) {
          return {
            item: item,
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
    }, {
      key: "buildTrace",
      value: function buildTrace(raw, detectorSystem, subdetector, crate, amcSlot, channel) {
        var _raw$data;
        var list = raw === null || raw === void 0 || (_raw$data = raw.data) === null || _raw$data === void 0 ? void 0 : _raw$data.arr;
        var result = this.findMatchingItem(list, detectorSystem, subdetector, crate, amcSlot, channel);
        if (!result || !Array.isArray(result.item.trace)) {
          return {
            traceData: null,
            actualTraceParams: null
          };
        }
        var wf = result.item;
        var traceData = {
          type: 'scatter',
          mode: 'lines',
          x: wf.trace.map(function (_, i) {
            return i;
          }),
          y: wf.trace,
          name: "".concat(wf.detectorSystem || 'N/A', " ").concat(wf.subdetector || '', " (Crate ").concat(wf.crateNum, ", AMC ").concat(wf.amcNum, ", Ch ").concat(wf.channelTag, ")"),
          line: {
            color: 'steelblue'
          },
          hoverinfo: 'x+y+name'
        };
        return {
          traceData: traceData,
          actualTraceParams: result.params
        };
      }
    }, {
      key: "extractIntegralInfo",
      value: function extractIntegralInfo(raw, detectorSystem, subdetector, crate, amcSlot, channel) {
        var _raw$data2;
        var list = raw === null || raw === void 0 || (_raw$data2 = raw.data) === null || _raw$data2 === void 0 ? void 0 : _raw$data2.arr;
        var result = this.findMatchingItem(list, detectorSystem, subdetector, crate, amcSlot, channel);
        if (!result || typeof result.item.integral !== 'number') {
          return {
            integralInfo: null,
            actualIntegralParams: null
          };
        }
        return {
          integralInfo: result.item,
          actualIntegralParams: result.params
        };
      }
    }, {
      key: "updateSettingsWithActualParams",
      value: function updateSettingsWithActualParams(params) {
        var _this2 = this;
        if (!params) return;

        // Update settings with the actual parameters found
        Object.keys(params).forEach(function (key) {
          if (_this2.settings[key] !== params[key]) {
            _this2.settings[key] = params[key];
          }
        });
      }
    }, {
      key: "composePlot",
      value: function composePlot(traceData, integralInfo) {
        if (!traceData) {
          return {
            data: [],
            layout: {
              title: 'No trace data available'
            }
          };
        }
        var data = [traceData];
        var shapes = [];
        var annotations = [];

        // Add integral bounds as vertical dashed lines
        if (integralInfo && this.settings.showIntegralBounds && integralInfo.integration_window) {
          var _integralInfo$integra = integralInfo.integration_window,
            startSample = _integralInfo$integra.first,
            endSample = _integralInfo$integra.second;
          shapes.push({
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
          }, {
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
          });
          annotations.push({
            x: (startSample + endSample) / 2,
            y: 1.02,
            xref: 'x',
            yref: 'paper',
            text: "Integration Window: [".concat(startSample, ", ").concat(endSample, "]"),
            showarrow: false,
            font: {
              size: 12,
              color: 'red'
            },
            align: 'center'
          });
        }

        // Add pedestal line
        if (traceData && integralInfo && this.settings.showPedestal && typeof integralInfo.pedestalLevel === 'number') {
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
        if (traceData && integralInfo && this.settings.showPedestalStdev && typeof integralInfo.pedestalLevel === 'number' && typeof integralInfo.pedestalStdev === 'number') {
          var pedestal = integralInfo.pedestalLevel;
          var stdev = integralInfo.pedestalStdev;
          shapes.push({
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
          }, {
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
          });
        }

        // Add integral info annotation
        if (integralInfo) {
          var _integralInfo$integra2, _integralInfo$amplitu;
          annotations.push({
            x: 0.02,
            y: 0.98,
            xref: 'paper',
            yref: 'paper',
            text: "Integral: ".concat(((_integralInfo$integra2 = integralInfo.integral) === null || _integralInfo$integra2 === void 0 ? void 0 : _integralInfo$integra2.toFixed(2)) || 'N/A', "<br>") + "Amplitude: ".concat(((_integralInfo$amplitu = integralInfo.amplitude) === null || _integralInfo$amplitu === void 0 ? void 0 : _integralInfo$amplitu.toFixed(2)) || 'N/A', "<br>") + "Peak Time: ".concat(integralInfo.peak_time || 'N/A'),
            showarrow: false,
            font: {
              size: 12,
              color: 'black'
            },
            align: 'left',
            bgcolor: 'rgba(255,255,255,0.8)',
            bordercolor: 'black',
            borderwidth: 1
          });
        }
        var layout = {
          autosize: true,
          margin: {
            t: 50,
            r: 20,
            l: 60,
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
            y: -0.15
          },
          shapes: shapes,
          annotations: annotations
        };
        return {
          data: data,
          layout: layout
        };
      }
    }], [{
      key: "settingSchema",
      get: function get() {
        return _objectSpread2(_objectSpread2({}, _superPropGet(WFD5Waveform, "settingSchema", this)), {}, {
          traceDataUrl: {
            type: SettingTypes.STRING,
            "default": 'http://127.0.0.1:8001/api/json_path?last=1&json_path=/data_products/WFD5WaveformCollection',
            label: 'Trace Data URL',
            onChange: 'onUpdateTick',
            advanced: true
          },
          integralDataUrl: {
            type: SettingTypes.STRING,
            "default": 'http://127.0.0.1:8001/api/json_path?last=1&json_path=/data_products/WFD5TraceIntegralCollection',
            label: 'Integral Data URL',
            onChange: 'onUpdateTick',
            advanced: true
          },
          detectorSystem: {
            type: SettingTypes.STRING,
            "default": '',
            label: 'Detector System',
            onChange: 'onUpdateTick'
          },
          subdetector: {
            type: SettingTypes.STRING,
            "default": '',
            label: 'Subdetector',
            onChange: 'onUpdateTick'
          },
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
          showIntegralBounds: {
            type: SettingTypes.BOOL,
            "default": true,
            label: 'Show Integral Bounds',
            onChange: 'onUpdateTick'
          },
          showPedestal: {
            type: SettingTypes.BOOL,
            "default": true,
            label: 'Show Pedestal',
            onChange: 'onUpdateTick'
          },
          showPedestalStdev: {
            type: SettingTypes.BOOL,
            "default": false,
            label: 'Show Pedestal StdDev',
            onChange: 'onUpdateTick'
          }
        });
      }
    }]);
  }(Plot), _defineProperty(_WFD5Waveform, "displayName", 'WFD5 Waveform'), _defineProperty(_WFD5Waveform, "name", 'WFD5Waveform'), _WFD5Waveform;
}

function registerFigures(_ref) {
  var registry = _ref.registry,
    baseClasses = _ref.baseClasses;
  baseClasses.Figure;
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
  var WFD5Waveform = makeWFD5Waveform({
    Plot: Plot,
    SettingTypes: SettingTypes
  });
  registry.register(WFD5IntegralHistogram.name, WFD5IntegralHistogram);
  registry.register(WFD5WaveformTraces.name, WFD5WaveformTraces);
  registry.register(WFD5HodoscopePositionHistogram.name, WFD5HodoscopePositionHistogram);
  registry.register(WFD5Waveform.name, WFD5Waveform);
}

// Expose globally for IIFE/eval() based plugin loading
if (typeof window !== 'undefined') {
  window.PluginRegister = registerFigures;
}

export { registerFigures as default };
