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

      // Helper function to extract crate/amc/channel from histogram name/title
    }, {
      key: "extractChannelInfo",
      value: function extractChannelInfo(name, title) {
        var text = "".concat(name, " ").concat(title).toLowerCase();

        // Use word boundaries to ensure exact number matches
        var crateMatch = text.match(/crate[_\s]*(\d+)(?:[_\s]|$)/);
        var amcMatch = text.match(/amc[_\s]*(\d+)(?:[_\s]|$)/);
        var channelMatch = text.match(/ch[_\s]*(\d+)(?:[_\s]|$)/);
        return {
          crate: crateMatch ? parseInt(crateMatch[1], 10) : null,
          amcSlot: amcMatch ? parseInt(amcMatch[1], 10) : null,
          channel: channelMatch ? parseInt(channelMatch[1], 10) : null
        };
      }

      // Helper function to extract detector/subdetector from histogram name/title
    }, {
      key: "extractDetectorInfo",
      value: function extractDetectorInfo(name, title) {
        var text = "".concat(name, " ").concat(title).toLowerCase();

        // Use word boundaries to ensure exact matches for detector names
        var detMatch = text.match(/det[_\s]*([a-zA-Z0-9]+)(?:[_\s]|$)/);
        var subdetMatch = text.match(/subdet[_\s]*([a-zA-Z0-9]+)(?:[_\s]|$)/);
        return {
          detectorSystem: detMatch ? detMatch[1] : null,
          subdetector: subdetMatch ? subdetMatch[1] : null
        };
      }
    }, {
      key: "extractPlotData",
      value: function extractPlotData(raw) {
        var _raw$data,
          _this = this,
          _fXaxis$fXmin,
          _fXaxis$fXmax;
        var list = raw === null || raw === void 0 || (_raw$data = raw.data) === null || _raw$data === void 0 ? void 0 : _raw$data.arr;
        if (!Array.isArray(list)) return null;
        var _this$settings = this.settings,
          crate = _this$settings.crate,
          amcSlot = _this$settings.amcSlot,
          channel = _this$settings.channel,
          detectorSystem = _this$settings.detectorSystem,
          subdetector = _this$settings.subdetector,
          barColor = _this$settings.barColor,
          barBorderColor = _this$settings.barBorderColor,
          barBorderWidth = _this$settings.barBorderWidth;
        var match = null;
        var matchMethod = null;
        var settingsToUpdate = {};

        // Try to match by detector/subdetector first
        if (detectorSystem && subdetector) {
          // Escape special regex characters and use precise matching
          var escapedDetector = detectorSystem.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          var escapedSubdetector = subdetector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          var detectorPattern = "det[_\\s]*".concat(escapedDetector, "(?:[_\\s]|$)");
          var subdetectorPattern = "subdet[_\\s]*".concat(escapedSubdetector, "(?:[_\\s]|$)");
          var combinedPattern = new RegExp("(?=.*".concat(detectorPattern, ")(?=.*").concat(subdetectorPattern, ")"), 'i');
          match = list.find(function (h) {
            var _h$fName, _h$fTitle;
            var name = (_h$fName = h.fName) !== null && _h$fName !== void 0 ? _h$fName : '';
            var title = (_h$fTitle = h.fTitle) !== null && _h$fTitle !== void 0 ? _h$fTitle : '';
            var fullText = "".concat(name, " ").concat(title);
            return combinedPattern.test(fullText);
          });
          if (match) {
            var _match$fName, _match$fTitle;
            matchMethod = 'detector';
            // Extract channel info and update settings
            var channelInfo = this.extractChannelInfo((_match$fName = match.fName) !== null && _match$fName !== void 0 ? _match$fName : '', (_match$fTitle = match.fTitle) !== null && _match$fTitle !== void 0 ? _match$fTitle : '');
            if (channelInfo.crate !== null || channelInfo.amcSlot !== null || channelInfo.channel !== null) {
              settingsToUpdate = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, settingsToUpdate), channelInfo.crate !== null && {
                crate: channelInfo.crate
              }), channelInfo.amcSlot !== null && {
                amcSlot: channelInfo.amcSlot
              }), channelInfo.channel !== null && {
                channel: channelInfo.channel
              });
            }
          }
        }

        // Fall back to crate/amc/channel if no detector match
        if (!match && (crate || amcSlot || channel)) {
          // Use precise matching with word boundaries for numbers
          var cratePattern = crate ? "crate[_\\s]*".concat(crate, "(?:[_\\s]|$)") : '';
          var amcPattern = amcSlot ? "amc[_\\s]*".concat(amcSlot, "(?:[_\\s]|$)") : '';
          var channelPattern = channel ? "ch[_\\s]*".concat(channel, "(?:[_\\s]|$)") : '';

          // Build combined pattern with positive lookaheads for all specified values
          var patterns = [cratePattern, amcPattern, channelPattern].filter(function (p) {
            return p;
          });
          var _combinedPattern = new RegExp(patterns.map(function (p) {
            return "(?=.*".concat(p, ")");
          }).join(''), 'i');
          match = list.find(function (h) {
            var _h$fName2, _h$fTitle2;
            var name = (_h$fName2 = h.fName) !== null && _h$fName2 !== void 0 ? _h$fName2 : '';
            var title = (_h$fTitle2 = h.fTitle) !== null && _h$fTitle2 !== void 0 ? _h$fTitle2 : '';
            var fullText = "".concat(name, " ").concat(title);
            return _combinedPattern.test(fullText);
          });
          if (match) {
            var _match$fName2, _match$fTitle2;
            matchMethod = 'channel';
            // Extract detector info and update settings
            var detectorInfo = this.extractDetectorInfo((_match$fName2 = match.fName) !== null && _match$fName2 !== void 0 ? _match$fName2 : '', (_match$fTitle2 = match.fTitle) !== null && _match$fTitle2 !== void 0 ? _match$fTitle2 : '');
            if (detectorInfo.detectorSystem || detectorInfo.subdetector) {
              settingsToUpdate = _objectSpread2(_objectSpread2(_objectSpread2({}, settingsToUpdate), detectorInfo.detectorSystem && {
                detectorSystem: detectorInfo.detectorSystem
              }), detectorInfo.subdetector && {
                subdetector: detectorInfo.subdetector
              });
            }
          }
        }

        // Update settings if we found complementary info
        if (Object.keys(settingsToUpdate).length > 0) {
          var newSettings = _objectSpread2(_objectSpread2({}, this.settings), settingsToUpdate);

          // Check if any settings actually changed to avoid infinite loops
          var hasChanges = Object.keys(settingsToUpdate).some(function (key) {
            return _this.settings[key] !== settingsToUpdate[key];
          });
          if (hasChanges && typeof this.props.onSettingsCorrected === 'function') {
            console.log("[".concat(this.id, "] Auto-syncing settings via ").concat(matchMethod, " match:"), settingsToUpdate);
            // Use setTimeout to avoid updating during render
            setTimeout(function () {
              _this.props.onSettingsCorrected(newSettings);
            }, 0);
          }
        }
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
            color: barColor,
            line: {
              color: barBorderColor,
              width: barBorderWidth
            }
          },
          hoverinfo: 'x+y+name',
          width: binWidth
        };
      }
    }, {
      key: "buildLayout",
      value: function buildLayout(trace) {
        if (!trace) return {};
        var useLogScale = this.settings.useLogScale;
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
            title: 'Counts',
            type: useLogScale ? 'log' : 'linear'
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
          dataUrl: {
            type: SettingTypes.STRING,
            "default": 'http://127.0.0.1:3001/api/json_path?last=1&json_path=/data_products/WFD5TraceIntegralHistogramCollection',
            label: 'Data URL',
            onChange: 'onUpdateTick',
            advanced: true
          },
          // Basic bar style
          barColor: {
            type: SettingTypes.COLOR,
            "default": 'rgba(70,130,180,1)',
            label: 'Bar Color',
            onChange: 'onLayoutUpdate',
            advanced: false
          },
          // Advanced bar styling
          barBorderColor: {
            type: SettingTypes.COLOR,
            "default": 'rgba(0,0,0,1)',
            label: 'Bar Border Color',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          barBorderWidth: {
            type: SettingTypes.FLOAT,
            "default": 0,
            label: 'Bar Border Width',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          // Detector / crate selection
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
          useLogScale: {
            type: SettingTypes.BOOLEAN,
            "default": false,
            label: 'Use Log Scale (Y-axis)',
            onChange: 'onLayoutUpdate',
            advanced: false
          }
        });
      }
    }]);
  }(Plot), _defineProperty(_WFD5IntegralHistogram, "displayName", 'WFD5 Integral Histogram'), _defineProperty(_WFD5IntegralHistogram, "name", 'WFD5IntegralHistogram'), _WFD5IntegralHistogram;
}

function makeWFD5HodoscopePositionHistogram(_ref) {
  var _WFD5HodoscopePositionHistogram;
  var Plot = _ref.Plot,
    SettingTypes = _ref.SettingTypes;
  return _WFD5HodoscopePositionHistogram = /*#__PURE__*/function (_Plot) {
    function WFD5HodoscopePositionHistogram(props) {
      var _this;
      _classCallCheck(this, WFD5HodoscopePositionHistogram);
      _this = _callSuper(this, WFD5HodoscopePositionHistogram, [props]);
      _this.cachedData = null; // Cache parsed data for layout-only updates
      return _this;
    }

    // Parse TH2D JSON and construct plotly heatmap + marginal histograms
    _inherits(WFD5HodoscopePositionHistogram, _Plot);
    return _createClass(WFD5HodoscopePositionHistogram, [{
      key: "extractPlotData",
      value: function extractPlotData(raw) {
        var hist = raw === null || raw === void 0 ? void 0 : raw.data;
        if (!hist || !Array.isArray(hist.fArray)) return null;
        var xAxis = hist.fXaxis || {};
        var yAxis = hist.fYaxis || {};
        var nBinsX = xAxis.fNbins;
        var nBinsY = yAxis.fNbins;
        if (!nBinsX || !nBinsY) return null;

        // Bin edges
        var binEdgesX = xAxis.fXbins || this.makeLinearBins(xAxis.fXmin, xAxis.fXmax, nBinsX);
        var binEdgesY = yAxis.fXbins || this.makeLinearBins(yAxis.fXmin, yAxis.fXmax, nBinsY);

        // Full array including underflow/overflow
        var countsFlatFull = hist.fArray;
        var countsFull = [];
        for (var iy = 0; iy < nBinsY + 2; iy++) {
          countsFull.push(countsFlatFull.slice(iy * (nBinsX + 2), (iy + 1) * (nBinsX + 2)));
        }

        // Extract interior bins and transpose to match ROOT orientation
        var counts2D = [];
        for (var _iy = 1; _iy <= nBinsY; _iy++) {
          var row = [];
          for (var ix = 1; ix <= nBinsX; ix++) {
            row.push(countsFull[_iy][ix] || 0);
          }
          counts2D.push(row);
        }

        // Compute marginal sums
        var marginalX = new Array(nBinsX).fill(0);
        var marginalY = new Array(nBinsY).fill(0);
        for (var _ix = 0; _ix < nBinsX; _ix++) {
          for (var _iy2 = 0; _iy2 < nBinsY; _iy2++) {
            var val = counts2D[_iy2][_ix];
            marginalX[_ix] += val;
            marginalY[_iy2] += val;
          }
        }

        // Bin centers
        var centersX = binEdgesX.slice(0, -1).map(function (v, i) {
          return 0.5 * (v + binEdgesX[i + 1]);
        });
        var centersY = binEdgesY.slice(0, -1).map(function (v, i) {
          return 0.5 * (v + binEdgesY[i + 1]);
        });
        return {
          counts2D: counts2D,
          centersX: centersX,
          centersY: centersY,
          marginalX: marginalX,
          marginalY: marginalY,
          nBinsX: nBinsX,
          nBinsY: nBinsY
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
      key: "buildPlotlyData",
      value: function buildPlotlyData() {
        if (!this.cachedData) return {
          data: [],
          layout: {}
        };
        var _this$cachedData = this.cachedData,
          counts2D = _this$cachedData.counts2D,
          centersX = _this$cachedData.centersX,
          centersY = _this$cachedData.centersY,
          marginalX = _this$cachedData.marginalX,
          marginalY = _this$cachedData.marginalY;
        var s = this.settings;

        // Handle X/Y swapping
        var heatmapX = centersX;
        var heatmapY = centersY;
        var heatmapZ = counts2D;
        var marginalXData = marginalX;
        var marginalYData = marginalY;
        var marginalXCenters = centersX;
        var marginalYCenters = centersY;
        if (s.swapXY) {
          // Swap axes: transpose the heatmap data and swap marginals
          heatmapX = centersY;
          heatmapY = centersX;
          // Transpose the 2D array
          heatmapZ = counts2D[0].map(function (_, colIndex) {
            return counts2D.map(function (row) {
              return row[colIndex];
            });
          });
          // Swap marginal data
          marginalXData = marginalY;
          marginalYData = marginalX;
          marginalXCenters = centersY;
          marginalYCenters = centersX;
        }

        // Apply log scaling to heatmap if requested
        if (s.heatmapLogScale) {
          heatmapZ = heatmapZ.map(function (row) {
            return row.map(function (val) {
              return val > 0 ? Math.log10(val) : null;
            });
          });
        }

        // Apply log scaling to marginals if requested
        if (s.xMarginalLogScale) {
          marginalXData = marginalXData.map(function (val) {
            return val > 0 ? Math.log10(val) : null;
          });
        }
        if (s.yMarginalLogScale) {
          marginalYData = marginalYData.map(function (val) {
            return val > 0 ? Math.log10(val) : null;
          });
        }
        var heatmap = {
          z: heatmapZ,
          x: heatmapX,
          y: heatmapY,
          type: 'heatmap',
          colorscale: s.heatmapColorscale,
          colorbar: s.showColorbar ? {
            title: s.heatmapLogScale ? 'log₁₀(Counts)' : 'Counts',
            titleside: 'right'
          } : null,
          showscale: s.showColorbar,
          hovertemplate: (s.swapXY ? 'Y' : 'X') + ': %{x}<br>' + (s.swapXY ? 'X' : 'Y') + ': %{y}<br>' + (s.heatmapLogScale ? 'log₁₀(Counts)' : 'Counts') + ': %{z}<extra></extra>',
          name: '2D Histogram',
          xaxis: 'x',
          yaxis: 'y',
          opacity: s.heatmapOpacity
        };
        var marginalXTrace = {
          x: marginalXCenters,
          y: marginalXData,
          type: 'bar',
          name: (s.swapXY ? 'Y' : 'X') + ' marginal',
          marker: {
            color: s.marginalBarColor,
            opacity: s.marginalBarOpacity,
            line: s.showMarginalOutlines ? {
              color: s.marginalOutlineColor,
              width: 1
            } : undefined
          },
          hovertemplate: (s.swapXY ? 'Y' : 'X') + ': %{x}<br>' + (s.xMarginalLogScale ? 'log₁₀(Counts)' : 'Counts') + ': %{y}<extra></extra>',
          xaxis: 'x2',
          yaxis: 'y2'
        };
        var marginalYTrace = {
          x: marginalYData,
          y: marginalYCenters,
          type: 'bar',
          name: (s.swapXY ? 'X' : 'Y') + ' marginal',
          orientation: 'h',
          marker: {
            color: s.marginalBarColor,
            opacity: s.marginalBarOpacity,
            line: s.showMarginalOutlines ? {
              color: s.marginalOutlineColor,
              width: 1
            } : undefined
          },
          hovertemplate: (s.swapXY ? 'X' : 'Y') + ': %{y}<br>' + (s.yMarginalLogScale ? 'log₁₀(Counts)' : 'Counts') + ': %{x}<extra></extra>',
          xaxis: 'x3',
          yaxis: 'y3'
        };

        // Calculate layout dimensions
        var mainWidth = 1.0 - s.marginalWidth - s.plotGap;
        var mainHeight = 1.0 - s.marginalHeight - s.plotGap;
        var layout = {
          showlegend: false,
          autosize: true,
          margin: {
            t: 30,
            r: 30,
            l: 40,
            b: 40
          },
          // Main heatmap (bottom-left)
          xaxis: {
            domain: [0, mainWidth],
            anchor: 'y',
            title: (s.swapXY ? 'Y' : 'X') + ' Position',
            autorange: s.flipXAxis ? 'reversed' : true
          },
          yaxis: {
            domain: [0, mainHeight],
            anchor: 'x',
            title: (s.swapXY ? 'X' : 'Y') + ' Position',
            autorange: s.flipYAxis ? 'reversed' : true
          },
          // X marginal (top)
          xaxis2: {
            domain: [0, mainWidth],
            anchor: 'y2',
            showticklabels: false,
            matches: 'x' // Ensure X axes are synchronized
          },
          yaxis2: {
            domain: [mainHeight + s.plotGap, 1],
            anchor: 'x2',
            title: s.xMarginalLogScale ? 'log₁₀(Counts)' : 'Counts'
          },
          // Y marginal (right)
          xaxis3: {
            domain: [mainWidth + s.plotGap, 1],
            anchor: 'y3',
            title: s.yMarginalLogScale ? 'log₁₀(Counts)' : 'Counts'
          },
          yaxis3: {
            domain: [0, mainHeight],
            anchor: 'x3',
            showticklabels: false,
            matches: 'y' // Ensure Y axes are synchronized
          },
          // Background color for better visual separation
          plot_bgcolor: 'white',
          paper_bgcolor: 'white'
        };
        return {
          data: [heatmap, marginalXTrace, marginalYTrace],
          layout: layout
        };
      }
    }, {
      key: "initPlot",
      value: function initPlot(raw) {
        var dataObj = this.extractPlotData(raw);
        if (!dataObj) return {
          data: [],
          layout: {}
        };
        this.cachedData = dataObj;
        return this.buildPlotlyData();
      }
    }, {
      key: "updatePlot",
      value: function updatePlot(raw) {
        // Only update data if the raw data has changed
        var dataObj = this.extractPlotData(raw);
        if (!dataObj) return {
          data: [],
          layout: undefined
        };
        this.cachedData = dataObj;

        // For updatePlot, we only return new data, not layout
        var _this$buildPlotlyData = this.buildPlotlyData(),
          data = _this$buildPlotlyData.data;
        return {
          data: data,
          layout: undefined
        };
      }
    }, {
      key: "onLayoutUpdate",
      value: function onLayoutUpdate() {
        // Use cached data to rebuild with new layout settings
        if (this.cachedData) {
          var _this$buildPlotlyData2 = this.buildPlotlyData(),
            data = _this$buildPlotlyData2.data,
            layout = _this$buildPlotlyData2.layout;
          this.setState(function (prev) {
            return {
              data: data,
              layout: layout,
              revision: prev.revision + 1
            };
          });
        }
      }
    }], [{
      key: "settingSchema",
      get: function get() {
        return _objectSpread2(_objectSpread2({}, _superPropGet(WFD5HodoscopePositionHistogram, "settingSchema", this)), {}, {
          dataUrl: {
            type: SettingTypes.STRING,
            "default": 'http://localhost:3001/api/json_path?last=1&json_path=/data_products/HodoscopePositionHistogram',
            label: 'Data URL',
            onChange: 'onUpdateTick',
            advanced: true
          },
          // Visual settings
          showColorbar: {
            type: SettingTypes.BOOLEAN,
            "default": true,
            label: 'Show Colorbar',
            onChange: 'onLayoutUpdate',
            advanced: false
          },
          heatmapColorscale: {
            type: SettingTypes.STRING,
            "default": 'Viridis',
            label: 'Heatmap Color Scheme',
            onChange: 'onLayoutUpdate',
            advanced: false
          },
          marginalBarColor: {
            type: SettingTypes.COLOR,
            "default": 'rgba(70,130,180,1)',
            label: 'Marginal Bar Color',
            onChange: 'onLayoutUpdate',
            advanced: false
          },
          // Log scale settings
          heatmapLogScale: {
            type: SettingTypes.BOOLEAN,
            "default": false,
            label: 'Heatmap Log Scale',
            onChange: 'onLayoutUpdate',
            advanced: false
          },
          xMarginalLogScale: {
            type: SettingTypes.BOOLEAN,
            "default": false,
            label: 'X Marginal Log Scale',
            onChange: 'onLayoutUpdate',
            advanced: false
          },
          yMarginalLogScale: {
            type: SettingTypes.BOOLEAN,
            "default": false,
            label: 'Y Marginal Log Scale',
            onChange: 'onLayoutUpdate',
            advanced: false
          },
          // Axis orientation settings
          swapXY: {
            type: SettingTypes.BOOLEAN,
            "default": false,
            label: 'Swap X and Y Axes',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          flipXAxis: {
            type: SettingTypes.BOOLEAN,
            "default": false,
            label: 'Flip X Axis (bugged, requires refresh)',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          flipYAxis: {
            type: SettingTypes.BOOLEAN,
            "default": false,
            label: 'Flip Y Axis (bugged, requires refresh)',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          // Layout settings
          marginalWidth: {
            type: SettingTypes.NUMBER,
            "default": 0.25,
            label: 'Marginal Plot Width (fraction)',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          marginalHeight: {
            type: SettingTypes.NUMBER,
            "default": 0.25,
            label: 'Marginal Plot Height (fraction)',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          plotGap: {
            type: SettingTypes.NUMBER,
            "default": 0.02,
            label: 'Plot Gap',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          // Advanced visual settings
          heatmapOpacity: {
            type: SettingTypes.NUMBER,
            "default": 1.0,
            label: 'Heatmap Opacity',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          marginalBarOpacity: {
            type: SettingTypes.NUMBER,
            "default": 0.8,
            label: 'Marginal Bar Opacity',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          showMarginalOutlines: {
            type: SettingTypes.BOOLEAN,
            "default": false,
            label: 'Show Marginal Bar Outlines',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          marginalOutlineColor: {
            type: SettingTypes.COLOR,
            "default": "rgba(0,0,0,1)",
            label: 'Marginal Outline Color',
            onChange: 'onLayoutUpdate',
            advanced: true
          }
        });
      }
    }]);
  }(Plot), _defineProperty(_WFD5HodoscopePositionHistogram, "displayName", 'WFD5 Hodoscope Position Histogram'), _defineProperty(_WFD5HodoscopePositionHistogram, "name", 'WFD5HodoscopePositionHistogram'), _WFD5HodoscopePositionHistogram;
}

function makeWFD5Waveform(_ref) {
  var _WFD5Waveform;
  var Figure = _ref.Figure,
    SettingTypes = _ref.SettingTypes;
  return _WFD5Waveform = /*#__PURE__*/function (_Figure) {
    function WFD5Waveform() {
      _classCallCheck(this, WFD5Waveform);
      return _callSuper(this, WFD5Waveform, arguments);
    }
    _inherits(WFD5Waveform, _Figure);
    return _createClass(WFD5Waveform, [{
      key: "onDataReceived",
      value: function onDataReceived(waveformRaw) {
        if (!waveformRaw) return;
        var _this$formatPlotly = this.formatPlotly(waveformRaw),
          data = _this$formatPlotly.data,
          layout = _this$formatPlotly.layout;
        this.setState(function (prev) {
          return {
            data: data,
            layout: layout,
            revision: (prev.revision || 0) + 1
          };
        });
      }
    }, {
      key: "onDataError",
      value: function onDataError(error) {
        this.setState({
          error: error
        });
      }
    }, {
      key: "formatPlotly",
      value: function formatPlotly(waveformRaw) {
        var _waveformRaw$data;
        var s = this.settings;
        var list = waveformRaw === null || waveformRaw === void 0 || (_waveformRaw$data = waveformRaw.data) === null || _waveformRaw$data === void 0 ? void 0 : _waveformRaw$data.arr;
        if (!(list !== null && list !== void 0 && list.length)) return {
          data: [],
          layout: {
            title: 'No waveform data',
            autosize: true
          }
        };
        var wfItem = list.find(function (item) {
          return s.detectorSystem && s.subdetector && item.detectorSystem === s.detectorSystem && item.subdetector === s.subdetector || item.crateNum === s.crate && item.amcNum === s.amcSlot && item.channelTag === s.channel;
        });
        if (!(wfItem !== null && wfItem !== void 0 && wfItem.trace)) return {
          data: [],
          layout: {
            title: 'No matching trace',
            autosize: true
          }
        };
        var processedTrace = _toConsumableArray(wfItem.trace);
        var pedestal = wfItem.pedestalLevel;
        if (s.subtractPedestal && typeof pedestal === 'number') {
          processedTrace = processedTrace.map(function (v) {
            return v - pedestal;
          });
          pedestal = 0;
        }
        var traceData = {
          type: 'scatter',
          mode: 'lines',
          x: processedTrace.map(function (_, i) {
            return i;
          }),
          y: processedTrace,
          line: {
            color: s.traceColor
          }
        };
        var shapes = [];
        var annotations = [];
        if (s.showIntegralBounds && wfItem.integration_window) {
          var _wfItem$integration_w = wfItem.integration_window,
            start = _wfItem$integration_w.first,
            end = _wfItem$integration_w.second;
          if (s.showIntegralFill) shapes.push({
            type: 'rect',
            x0: start,
            x1: end,
            y0: Math.min.apply(Math, _toConsumableArray(processedTrace)),
            y1: Math.max.apply(Math, _toConsumableArray(processedTrace)),
            fillcolor: s.integralFillColor,
            line: {
              width: 0
            }
          });
          shapes.push({
            type: 'line',
            x0: start,
            x1: start,
            y0: Math.min.apply(Math, _toConsumableArray(processedTrace)),
            y1: Math.max.apply(Math, _toConsumableArray(processedTrace)),
            line: {
              color: s.integralLineColor,
              width: s.integralLineWidth,
              dash: s.integralLineDash
            }
          });
          shapes.push({
            type: 'line',
            x0: end,
            x1: end,
            y0: Math.min.apply(Math, _toConsumableArray(processedTrace)),
            y1: Math.max.apply(Math, _toConsumableArray(processedTrace)),
            line: {
              color: s.integralLineColor,
              width: s.integralLineWidth,
              dash: s.integralLineDash
            }
          });
        }
        if (s.showPedestal && typeof pedestal === 'number') {
          shapes.push({
            type: 'line',
            x0: 0,
            x1: 1,
            xref: 'paper',
            y0: pedestal,
            y1: pedestal,
            line: {
              color: s.pedestalLineColor,
              width: s.pedestalLineWidth,
              dash: s.pedestalLineDash
            }
          });
        }
        if (s.showPedestalStdev && typeof wfItem.pedestalStdev === 'number') {
          shapes.push({
            type: 'rect',
            x0: 0,
            x1: 1,
            xref: 'paper',
            y0: pedestal - wfItem.pedestalStdev,
            y1: pedestal + wfItem.pedestalStdev,
            fillcolor: s.pedestalStdevFillColor,
            line: {
              width: 0
            }
          });
        }
        if (s.showIntegralInfoBox) {
          var _wfItem$integral, _wfItem$amplitude;
          annotations.push({
            x: s.integralInfoBoxX,
            y: s.integralInfoBoxY,
            xref: 'paper',
            yref: 'paper',
            text: "Integral: ".concat(((_wfItem$integral = wfItem.integral) === null || _wfItem$integral === void 0 ? void 0 : _wfItem$integral.toFixed(2)) || 'N/A', "<br>Amplitude: ").concat(((_wfItem$amplitude = wfItem.amplitude) === null || _wfItem$amplitude === void 0 ? void 0 : _wfItem$amplitude.toFixed(2)) || 'N/A', "<br>Peak: ").concat(wfItem.peak_time || 'N/A'),
            showarrow: false,
            bgcolor: s.integralInfoBoxBgColor,
            bordercolor: s.integralInfoBoxBorderColor,
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
            title: 'Sample',
            autorange: !s.fixXAxis,
            range: s.fixXAxis ? [s.xAxisMin, s.xAxisMax] : undefined
          },
          yaxis: {
            title: 'ADC',
            autorange: !s.fixYAxis,
            range: s.fixYAxis ? [s.yAxisMin, s.yAxisMax] : undefined
          },
          shapes: shapes,
          annotations: annotations
        };
        return {
          data: [traceData],
          layout: layout
        };
      }
    }, {
      key: "render",
      value: function render() {
        var _this$state = this.state,
          loading = _this$state.loading,
          error = _this$state.error,
          data = _this$state.data,
          layout = _this$state.layout,
          revision = _this$state.revision;
        if (loading) return /*#__PURE__*/React.createElement("div", null, "Loading...");
        if (error) return /*#__PURE__*/React.createElement("div", {
          style: {
            color: 'red'
          }
        }, "Error: ", error);
        return /*#__PURE__*/React.createElement(Plotly, {
          data: data,
          layout: layout,
          revision: revision,
          style: {
            width: '100%',
            height: '100%'
          },
          useResizeHandler: true,
          config: {
            responsive: true
          }
        });
      }
    }], [{
      key: "settingSchema",
      get: function get() {
        return _objectSpread2(_objectSpread2({}, _superPropGet(WFD5Waveform, "settingSchema", this)), {}, {
          dataUrl: {
            type: SettingTypes.STRING,
            "default": 'http://127.0.0.1:3001/api/json_path?last=1&json_path=/data_products/WFD5WaveformCollection',
            label: 'Data URL',
            onChange: 'onUpdateTick',
            advanced: true
          },
          traceColor: {
            type: SettingTypes.COLOR,
            "default": 'rgba(70,130,180,1)',
            label: 'Trace Color',
            onChange: 'onLayoutUpdate'
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
            type: SettingTypes.BOOLEAN,
            "default": true,
            label: 'Show Integral Bounds',
            onChange: 'onLayoutUpdate'
          },
          showIntegralFill: {
            type: SettingTypes.BOOLEAN,
            "default": true,
            label: 'Fill Integral Region',
            onChange: 'onLayoutUpdate'
          },
          showPedestal: {
            type: SettingTypes.BOOLEAN,
            "default": true,
            label: 'Show Pedestal',
            onChange: 'onLayoutUpdate'
          },
          showPedestalStdev: {
            type: SettingTypes.BOOLEAN,
            "default": false,
            label: 'Show Pedestal StdDev',
            onChange: 'onLayoutUpdate'
          },
          showIntegralInfoBox: {
            type: SettingTypes.BOOLEAN,
            "default": true,
            label: 'Show Integral Info Box',
            onChange: 'onLayoutUpdate'
          },
          subtractPedestal: {
            type: SettingTypes.BOOLEAN,
            "default": false,
            label: 'Subtract Pedestal',
            onChange: 'onLayoutUpdate'
          },
          fixYAxis: {
            type: SettingTypes.BOOLEAN,
            "default": false,
            label: 'Fix Y Axis Range',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          yAxisMin: {
            type: SettingTypes.NUMBER,
            "default": -2048,
            label: 'Y Axis Min',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          yAxisMax: {
            type: SettingTypes.NUMBER,
            "default": 2048,
            label: 'Y Axis Max',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          fixXAxis: {
            type: SettingTypes.BOOLEAN,
            "default": false,
            label: 'Fix X Axis Range',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          xAxisMin: {
            type: SettingTypes.NUMBER,
            "default": 0,
            label: 'X Axis Min',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          xAxisMax: {
            type: SettingTypes.NUMBER,
            "default": 2048,
            label: 'X Axis Max',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          pedestalLineColor: {
            type: SettingTypes.COLOR,
            "default": 'black',
            label: 'Pedestal Line Color',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          pedestalLineWidth: {
            type: SettingTypes.NUMBER,
            "default": 2,
            label: 'Pedestal Line Width',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          pedestalLineDash: {
            type: SettingTypes.STRING,
            "default": 'dash',
            label: 'Pedestal Line Dash',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          pedestalStdevFillColor: {
            type: SettingTypes.COLOR,
            "default": 'rgba(0,0,0,0.1)',
            label: 'Pedestal StdDev Fill Color',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          integralLineColor: {
            type: SettingTypes.COLOR,
            "default": 'black',
            label: 'Integral Bound Line Color',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          integralLineWidth: {
            type: SettingTypes.NUMBER,
            "default": 2,
            label: 'Integral Bound Line Width',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          integralLineDash: {
            type: SettingTypes.STRING,
            "default": 'dash',
            label: 'Integral Bound Line Dash',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          integralFillColor: {
            type: SettingTypes.COLOR,
            "default": 'rgba(100,150,255,0.15)',
            label: 'Integral Region Fill Color',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          showIntegralWindowText: {
            type: SettingTypes.BOOLEAN,
            "default": false,
            label: 'Show Integral Window Text',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          integralInfoBoxBgColor: {
            type: SettingTypes.COLOR,
            "default": 'rgba(255,255,255,0.8)',
            label: 'Info Box Background Color',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          integralInfoBoxBorderColor: {
            type: SettingTypes.COLOR,
            "default": 'black',
            label: 'Info Box Border Color',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          integralInfoBoxX: {
            type: SettingTypes.NUMBER,
            "default": 0.02,
            label: 'Integral Info Box X',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          integralInfoBoxY: {
            type: SettingTypes.NUMBER,
            "default": 0.98,
            label: 'Integral Info Box Y',
            onChange: 'onLayoutUpdate',
            advanced: true
          }
        });
      }
    }]);
  }(Figure), _defineProperty(_WFD5Waveform, "displayName", 'WFD5 Waveform '), _defineProperty(_WFD5Waveform, "name", 'WFD5Waveform'), _WFD5Waveform;
}

var vertices = [
	[
		0.4256113077648826,
		0.32063594464456063
	],
	[
		0.37333817268074604,
		0.19459633817857636
	],
	[
		0.5230018526163671,
		0.06926841434919531
	],
	[
		0.6804440600876969,
		0.1072397500161552
	],
	[
		0.7548327523228142,
		0.2866038053715944
	],
	[
		0.649663679935621,
		0.37467207617061893
	],
	[
		0.9217186856395312,
		0.3885109440610183
	],
	[
		0.9338208096370579,
		0.5481896366418003
	],
	[
		0.7841571297014369,
		0.6735175604711813
	],
	[
		0.666885933316717,
		0.6019071386894239
	],
	[
		0.7376346287997954,
		0.8618275597068756
	],
	[
		0.5876719452950029,
		0.9225430833339846
	],
	[
		0.4207860119782861,
		0.8206359446445607
	],
	[
		0.45347749909835855,
		0.6883099992356944
	],
	[
		0.22514759186270708,
		0.8351107859042627
	],
	[
		0.12036343241507533,
		0.7129563505697813
	],
	[
		0.1668859333167169,
		0.524646351334087
	],
	[
		0.30436157988442103,
		0.5144748412597019
	],
	[
		0.09249724108159944,
		0.3452822959786477
	],
	[
		0.17769975256516707,
		0.20907117943827827
	],
	[
		0.9504711724383932,
		0.2721289641118925
	],
	[
		0.9827777466189043,
		0.3500257248365319
	],
	[
		1,
		0.5772607873553369
	],
	[
		0.9797955498170159,
		0.6590427192114795
	],
	[
		0.4198606735823875,
		0.006286338942881928
	],
	[
		0.5048252957865966,
		0
	],
	[
		0.7288776679573351,
		0.054036131526058226
	],
	[
		0.8013552532244558,
		0.09829380613590005
	],
	[
		0,
		0.4227392126446631
	],
	[
		0.02020445018298409,
		0.34095728078852056
	],
	[
		0.14145417806344568,
		0.14711838417337939
	],
	[
		0.2064522393640291,
		0.09268919948915247
	],
	[
		0.271122332042665,
		0.9459638684739419
	],
	[
		0.19864474677554425,
		0.9017061938640999
	],
	[
		0.04952882756160683,
		0.7278710358881074
	],
	[
		0.017222253381095783,
		0.6499742751634681
	],
	[
		0.8585458219365545,
		0.8528816158266207
	],
	[
		0.7935477606359709,
		0.9073108005108474
	],
	[
		0.5801393264176125,
		0.993713661057118
	],
	[
		0.4951747042134034,
		1
	],
	[
		0.6956384201155791,
		0.48552515874029817
	],
	[
		0.8331140666832831,
		0.47535364866591295
	],
	[
		0.8796365675849246,
		0.28704364943021854
	],
	[
		0.774852408137293,
		0.16488921409573734
	],
	[
		0.579213988021714,
		0.17936405535543923
	],
	[
		0.5465225009016415,
		0.31169000076430564
	],
	[
		0.4123280547049971,
		0.07745691666601527
	],
	[
		0.2623653712002047,
		0.13817244029312434
	],
	[
		0.21584287029856314,
		0.3264824395288187
	],
	[
		0.333114066683283,
		0.3980928613105761
	],
	[
		0.06617919036294213,
		0.45181036335819974
	],
	[
		0.07828131436046887,
		0.6114890559389815
	],
	[
		0.24516724767718576,
		0.7133961946284055
	],
	[
		0.3503363200643789,
		0.625327923829381
	],
	[
		0.31955593991230324,
		0.8927602499838447
	],
	[
		0.47699814738363294,
		0.9307315856508046
	],
	[
		0.626661827319254,
		0.8054036618214235
	],
	[
		0.5743886922351175,
		0.6793640553554394
	],
	[
		0.822300247434833,
		0.7909288205617218
	],
	[
		0.9075027589184007,
		0.6547177040213522
	]
];
var pentagons = [
	[
		0,
		5,
		9,
		13,
		17
	],
	[
		7,
		23,
		36,
		10,
		8
	],
	[
		29,
		50,
		48,
		47,
		30
	],
	[
		49,
		53,
		57,
		40,
		45
	],
	[
		46,
		44,
		43,
		26,
		25
	],
	[
		3,
		27,
		20,
		6,
		4
	],
	[
		34,
		33,
		54,
		52,
		51
	],
	[
		12,
		11,
		39,
		32,
		14
	],
	[
		56,
		55,
		38,
		37,
		58
	],
	[
		42,
		41,
		59,
		22,
		21
	],
	[
		35,
		28,
		18,
		16,
		15
	],
	[
		31,
		24,
		2,
		1,
		19
	]
];
var hexagons = [
	[
		0,
		1,
		2,
		3,
		4,
		5
	],
	[
		5,
		4,
		6,
		7,
		8,
		9
	],
	[
		9,
		8,
		10,
		11,
		12,
		13
	],
	[
		13,
		12,
		14,
		15,
		16,
		17
	],
	[
		17,
		16,
		18,
		19,
		1,
		0
	]
];
var soccerBallData = {
	vertices: vertices,
	pentagons: pentagons,
	hexagons: hexagons
};

function makeWFD5LysoArrayHistograms(_ref) {
  var _WFD5LysoArrayHistograms;
  var Figure = _ref.Figure,
    SettingTypes = _ref.SettingTypes;
  return _WFD5LysoArrayHistograms = /*#__PURE__*/function (_Figure) {
    function WFD5LysoArrayHistograms(props) {
      var _this;
      _classCallCheck(this, WFD5LysoArrayHistograms);
      _this = _callSuper(this, WFD5LysoArrayHistograms, [props]);
      _this.latestHistogramRaw = null;
      _this.state.plotlyData = [];
      _this.state.plotlyLayout = {};
      _this.state.revision = 0;
      return _this;
    }
    _inherits(WFD5LysoArrayHistograms, _Figure);
    return _createClass(WFD5LysoArrayHistograms, [{
      key: "onDataReceived",
      value: function onDataReceived(histogramRaw) {
        this.latestHistogramRaw = histogramRaw;
        var _this$processHistogra = this.processHistogramData(histogramRaw),
          data = _this$processHistogra.data,
          layout = _this$processHistogra.layout;
        this.setState({
          plotlyData: data,
          plotlyLayout: layout,
          revision: this.state.revision + 1
        });
      }
    }, {
      key: "onLayoutUpdate",
      value: function onLayoutUpdate() {
        if (!this.latestHistogramRaw) return;
        var _this$processHistogra2 = this.processHistogramData(this.latestHistogramRaw),
          data = _this$processHistogra2.data,
          layout = _this$processHistogra2.layout;
        this.setState({
          plotlyData: data,
          plotlyLayout: layout,
          revision: this.state.revision + 1
        });
      }
    }, {
      key: "processHistogramData",
      value: function processHistogramData(histogramRaw) {
        var _this$settings = this.settings,
          detectorSystems = _this$settings.detectorSystems,
          subdetectors = _this$settings.subdetectors;
        var histogramsData = detectorSystems.map(function (detectorSystem, i) {
          var _histogramRaw$data;
          var subdetector = subdetectors[i];
          var histList = histogramRaw === null || histogramRaw === void 0 || (_histogramRaw$data = histogramRaw.data) === null || _histogramRaw$data === void 0 ? void 0 : _histogramRaw$data.arr;
          if (!Array.isArray(histList)) return null;
          var escapedDetector = detectorSystem.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          var escapedSubdetector = subdetector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          var detectorPattern = "det[_\\s]*".concat(escapedDetector, "(?:[_\\s]|$)");
          var subdetectorPattern = "subdet[_\\s]*".concat(escapedSubdetector, "(?:[_\\s]|$)");
          var combinedPattern = new RegExp("(?=.*".concat(detectorPattern, ")(?=.*").concat(subdetectorPattern, ")"), 'i');
          var histItem = histList.find(function (h) {
            var _h$fName, _h$fTitle;
            var name = (_h$fName = h.fName) !== null && _h$fName !== void 0 ? _h$fName : '';
            var title = (_h$fTitle = h.fTitle) !== null && _h$fTitle !== void 0 ? _h$fTitle : '';
            return combinedPattern.test("".concat(name, " ").concat(title));
          });
          return histItem ? {
            histItem: histItem,
            detectorSystem: detectorSystem,
            subdetector: subdetector,
            index: i
          } : null;
        });
        var _this$buildSoccerBall = this.buildSoccerBallSubplots(histogramsData),
          data = _this$buildSoccerBall.data,
          layout = _this$buildSoccerBall.layout;
        return {
          data: data,
          layout: layout
        };
      }
    }, {
      key: "extractHistogramData",
      value: function extractHistogramData(histItem, barColor) {
        var _fXaxis$fXmin, _fXaxis$fXmax;
        var _this$settings2 = this.settings,
          barBorderColor = _this$settings2.barBorderColor,
          barBorderWidth = _this$settings2.barBorderWidth;
        if (!histItem || !Array.isArray(histItem.fArray)) return null;
        var fXaxis = histItem.fXaxis || {};
        var nBins = fXaxis.fNbins || histItem.fArray.length - 2;
        var xMin = (_fXaxis$fXmin = fXaxis.fXmin) !== null && _fXaxis$fXmin !== void 0 ? _fXaxis$fXmin : 0;
        var xMax = (_fXaxis$fXmax = fXaxis.fXmax) !== null && _fXaxis$fXmax !== void 0 ? _fXaxis$fXmax : 1;
        var binWidth = (xMax - xMin) / nBins;
        var binEdges = Array.from({
          length: nBins + 1
        }, function (_, i) {
          return xMin + i * binWidth;
        });
        var counts = histItem.fArray.slice(1, nBins + 1);
        var yVals = [0].concat(_toConsumableArray(counts));
        return {
          type: 'bar',
          x: binEdges,
          y: yVals,
          name: histItem.fName || 'Histogram',
          marker: {
            color: barColor,
            line: {
              color: barBorderColor,
              width: barBorderWidth
            }
          },
          hoverinfo: 'x+y+name',
          width: binWidth
        };
      }
    }, {
      key: "buildSoccerBallSubplots",
      value: function buildSoccerBallSubplots(histogramsData) {
        var _this2 = this;
        var _this$settings3 = this.settings,
          barColors = _this$settings3.barColors,
          subplotSize = _this$settings3.subplotSize,
          showSubplotLabels = _this$settings3.showSubplotLabels,
          useLogScale = _this$settings3.useLogScale;
          _this$settings3.positionOffsetsX;
          _this$settings3.positionOffsetsY;
        var positions = this.getSoccerBallPositions();
        var plotlyTraces = [];
        var annotations = [];
        histogramsData.forEach(function (item, i) {
          if (!item || !item.histItem || i >= positions.length) return;
          var histData = _this2.extractHistogramData(item.histItem, barColors[i % barColors.length]);
          if (!histData) return;
          plotlyTraces.push(_objectSpread2(_objectSpread2({}, histData), {}, {
            name: "".concat(item.detectorSystem, " ").concat(item.subdetector),
            xaxis: "x".concat(i + 1),
            yaxis: "y".concat(i + 1),
            showlegend: false
          }));
          if (showSubplotLabels) {
            annotations.push({
              x: 0.5,
              y: 1.05,
              xref: "x".concat(i + 1, " domain"),
              yref: "y".concat(i + 1, " domain"),
              text: "".concat(item.detectorSystem, " ").concat(item.subdetector),
              showarrow: false,
              font: {
                size: 10,
                color: 'black'
              },
              align: 'center'
            });
          }
        });
        var layout = {
          autosize: true,
          margin: {
            t: 20,
            r: 20,
            b: 20,
            l: 20
          },
          showlegend: false,
          bargap: 0,
          paper_bgcolor: 'rgba(0,0,0,0)',
          plot_bgcolor: 'rgba(0,0,0,0)',
          annotations: annotations
        };
        positions.forEach(function (pos, i) {
          if (i < histogramsData.length && histogramsData[i]) {
            var clampedX = Math.max(subplotSize / 2, Math.min(1 - subplotSize / 2, pos.x));
            var clampedY = Math.max(subplotSize / 2, Math.min(1 - subplotSize / 2, pos.y));
            var xDomain = [clampedX - subplotSize / 2, clampedX + subplotSize / 2];
            var yDomain = [clampedY - subplotSize / 2, clampedY + subplotSize / 2];
            var xAxisKey = i === 0 ? 'xaxis' : "xaxis".concat(i + 1);
            var yAxisKey = i === 0 ? 'yaxis' : "yaxis".concat(i + 1);
            layout[xAxisKey] = {
              domain: xDomain,
              anchor: "y".concat(i + 1),
              showgrid: true,
              gridcolor: 'rgba(128,128,128,0.2)',
              showticklabels: true,
              zeroline: false,
              title: ''
            };
            layout[yAxisKey] = {
              domain: yDomain,
              anchor: "x".concat(i + 1),
              showgrid: true,
              gridcolor: 'rgba(128,128,128,0.2)',
              showticklabels: true,
              zeroline: false,
              title: '',
              type: useLogScale ? 'log' : 'linear'
            };
          }
        });
        return {
          data: plotlyTraces,
          layout: layout
        };
      }
    }, {
      key: "getSoccerBallPositions",
      value: function getSoccerBallPositions() {
        var _this$settings4 = this.settings,
          positionOffsetsX = _this$settings4.positionOffsetsX,
          positionOffsetsY = _this$settings4.positionOffsetsY;
        var width = 100;
        var height = 100;
        var scale = 115;
        var rotationDeg = 22.5;
        var centroid = soccerBallData.vertices.reduce(function (acc, v) {
          return [acc[0] + v[0], acc[1] + v[1]];
        }, [0, 0]).map(function (c) {
          return c / soccerBallData.vertices.length;
        });
        var rad = rotationDeg * Math.PI / 180;
        var cosA = Math.cos(rad);
        var sinA = Math.sin(rad);
        var transformVertex = function transformVertex(v) {
          var dx = v[0] - centroid[0];
          var dy = v[1] - centroid[1];
          var rx = dx * cosA - dy * sinA;
          var ry = dx * sinA + dy * cosA;
          return {
            x: rx * scale + width / 2,
            y: ry * scale + height / 2
          };
        };
        var vertices = soccerBallData.vertices.map(transformVertex);
        var positions = [];
        for (var i = 0; i < Math.min(6, soccerBallData.hexagons.length); i++) {
          var hex = soccerBallData.hexagons[i];
          var hexVertices = hex.map(function (idx) {
            return vertices[idx];
          });
          var center = hexVertices.reduce(function (acc, v) {
            return {
              x: acc.x + v.x,
              y: acc.y + v.y
            };
          }, {
            x: 0,
            y: 0
          });
          center.x /= hexVertices.length;
          center.y /= hexVertices.length;
          positions.push({
            x: center.x / width + positionOffsetsX[i] || 0,
            y: 1 - center.y / height + positionOffsetsY[i] || 0
          });
        }
        if (positions.length < 6 && soccerBallData.pentagons.length > 0) {
          var pent = soccerBallData.pentagons[0];
          var pentVertices = pent.map(function (idx) {
            return vertices[idx];
          });
          var _center = pentVertices.reduce(function (acc, v) {
            return {
              x: acc.x + v.x,
              y: acc.y + v.y
            };
          }, {
            x: 0,
            y: 0
          });
          _center.x /= pentVertices.length;
          _center.y /= pentVertices.length;
          positions.push({
            x: _center.x / width + positionOffsetsX[positions.length] || 0,
            y: 1 - _center.y / height + positionOffsetsY[positions.length] || 0
          });
        }
        return positions;
      }
    }, {
      key: "renderSoccerBallSVG",
      value: function renderSoccerBallSVG() {
        var _this$settings5 = this.settings,
          showSoccerBallOutline = _this$settings5.showSoccerBallOutline,
          soccerBallLineColor = _this$settings5.soccerBallLineColor;
        if (!showSoccerBallOutline) return null;
        var width = 100;
        var height = 100;
        var scale = 115;
        var rotationDeg = 22.5;
        var centroid = soccerBallData.vertices.reduce(function (acc, v) {
          return [acc[0] + v[0], acc[1] + v[1]];
        }, [0, 0]).map(function (c) {
          return c / soccerBallData.vertices.length;
        });
        var rad = rotationDeg * Math.PI / 180;
        var cosA = Math.cos(rad);
        var sinA = Math.sin(rad);
        var transformVertex = function transformVertex(v) {
          var dx = v[0] - centroid[0];
          var dy = v[1] - centroid[1];
          var rx = dx * cosA - dy * sinA;
          var ry = dx * sinA + dy * cosA;
          return {
            x: rx * scale + width / 2,
            y: ry * scale + height / 2
          };
        };
        var vertices = soccerBallData.vertices.map(transformVertex);
        var pentagon = soccerBallData.pentagons[0].map(function (i) {
          return vertices[i];
        });
        var hexagons = soccerBallData.hexagons.map(function (hex) {
          return hex.map(function (i) {
            return vertices[i];
          });
        });
        return /*#__PURE__*/React.createElement("svg", {
          width: "100%",
          height: "100%",
          viewBox: "0 0 ".concat(width, " ").concat(height),
          style: {
            position: 'absolute',
            top: 0,
            left: 0,
            pointerEvents: 'none',
            zIndex: 10
          }
        }, hexagons.map(function (hex, idx) {
          return /*#__PURE__*/React.createElement("polygon", {
            key: "hex-".concat(idx),
            points: hex.map(function (v) {
              return "".concat(v.x, ",").concat(v.y);
            }).join(' '),
            fill: "none",
            stroke: soccerBallLineColor,
            strokeWidth: "2"
          });
        }), /*#__PURE__*/React.createElement("polygon", {
          points: pentagon.map(function (v) {
            return "".concat(v.x, ",").concat(v.y);
          }).join(' '),
          fill: "none",
          stroke: soccerBallLineColor,
          strokeWidth: "2"
        }));
      }
    }, {
      key: "render",
      value: function render() {
        var _this$state = this.state,
          plotlyData = _this$state.plotlyData,
          plotlyLayout = _this$state.plotlyLayout,
          revision = _this$state.revision;
        return /*#__PURE__*/React.createElement("div", {
          className: "no-drag",
          style: {
            width: '100%',
            height: '100%',
            position: 'relative'
          }
        }, /*#__PURE__*/React.createElement(Plotly, {
          data: plotlyData,
          layout: plotlyLayout,
          revision: revision,
          style: {
            width: '100%',
            height: '100%'
          },
          useResizeHandler: true,
          config: {
            responsive: true,
            displayModeBar: true
          }
        }), this.renderSoccerBallSVG());
      }
    }], [{
      key: "settingSchema",
      get: function get() {
        return {
          updateFrequency: {
            type: SettingTypes.NUMBER,
            "default": 2,
            label: 'Update Interval (s)',
            onChange: 'onLayoutUpdate'
          },
          dataUrl: {
            type: SettingTypes.STRING,
            "default": 'http://127.0.0.1:3001/api/json_path?last=1&json_path=/data_products/WFD5TraceIntegralHistogramCollection',
            label: 'Data URL',
            advanced: true
          },
          detectorSystems: {
            type: SettingTypes.ARRAY,
            elementType: SettingTypes.STRING,
            "default": ['LYSO', 'LYSO', 'LYSO', 'LYSO', 'LYSO', 'LYSO'],
            label: 'Detector Systems'
          },
          subdetectors: {
            type: SettingTypes.ARRAY,
            elementType: SettingTypes.STRING,
            "default": ['HEX2', 'HEX3', 'HEX4', 'HEX5', 'HEX1', 'PENT'],
            label: 'Subdetectors'
          },
          barColors: {
            type: SettingTypes.ARRAY,
            elementType: SettingTypes.COLOR,
            "default": ['rgba(70,130,180,1)', 'rgba(220,20,60,1)', 'rgba(34,139,34,1)', 'rgba(255,140,0,1)', 'rgba(148,0,211,1)', 'rgba(255,215,0,1)'],
            label: 'Bar Colors'
          },
          showSoccerBallOutline: {
            type: SettingTypes.BOOLEAN,
            "default": true,
            label: 'Show Soccer Ball Outline'
          },
          soccerBallLineColor: {
            type: SettingTypes.COLOR,
            "default": 'rgba(51,51,51,0.3)',
            label: 'Soccer Ball Line Color',
            advanced: true
          },
          subplotSize: {
            type: SettingTypes.NUMBER,
            "default": 0.20,
            label: 'Subplot Size (fraction)'
          },
          positionOffsetsX: {
            type: SettingTypes.ARRAY,
            elementType: SettingTypes.NUMBER,
            "default": [0, 0, 0, 0, 0, 0],
            label: 'X Position Offsets',
            advanced: true
          },
          positionOffsetsY: {
            type: SettingTypes.ARRAY,
            elementType: SettingTypes.NUMBER,
            "default": [0, 0, 0, 0, 0, 0],
            label: 'Y Position Offsets',
            advanced: true
          },
          barBorderColor: {
            type: SettingTypes.COLOR,
            "default": 'rgba(0,0,0,1)',
            label: 'Bar Border Color',
            advanced: true
          },
          barBorderWidth: {
            type: SettingTypes.NUMBER,
            "default": 0,
            label: 'Bar Border Width',
            advanced: true
          },
          showSubplotLabels: {
            type: SettingTypes.BOOLEAN,
            "default": false,
            label: 'Show Subplot Labels',
            advanced: true
          },
          useLogScale: {
            type: SettingTypes.BOOLEAN,
            "default": false,
            label: 'Use Log Scale (Y-axis)'
          }
        };
      }
    }]);
  }(Figure), _defineProperty(_WFD5LysoArrayHistograms, "displayName", 'WFD5 Lyso Array Histograms'), _defineProperty(_WFD5LysoArrayHistograms, "name", 'WFD5LysoArrayHistograms'), _WFD5LysoArrayHistograms;
}

function makeWFD5LysoArrayWaveforms(_ref) {
  var _WFD5LysoArrayWaveforms;
  var Figure = _ref.Figure,
    SettingTypes = _ref.SettingTypes;
  return _WFD5LysoArrayWaveforms = /*#__PURE__*/function (_Figure) {
    function WFD5LysoArrayWaveforms() {
      _classCallCheck(this, WFD5LysoArrayWaveforms);
      return _callSuper(this, WFD5LysoArrayWaveforms, arguments);
    }
    _inherits(WFD5LysoArrayWaveforms, _Figure);
    return _createClass(WFD5LysoArrayWaveforms, [{
      key: "onDataReceived",
      value: function onDataReceived(waveformRaw) {
        if (!waveformRaw) return;
        var _this$formatPlotly = this.formatPlotly(waveformRaw),
          data = _this$formatPlotly.data,
          layout = _this$formatPlotly.layout;
        this.setState(function (prev) {
          return {
            data: data,
            layout: layout,
            revision: (prev.revision || 0) + 1
          };
        });
      }
    }, {
      key: "onDataError",
      value: function onDataError(error) {
        this.setState({
          error: error
        });
      }
    }, {
      key: "formatPlotly",
      value: function formatPlotly(waveformRaw) {
        var _waveformRaw$data;
        var _this$settings = this.settings,
          detectorSystems = _this$settings.detectorSystems,
          subdetectors = _this$settings.subdetectors;
        var list = waveformRaw === null || waveformRaw === void 0 || (_waveformRaw$data = waveformRaw.data) === null || _waveformRaw$data === void 0 ? void 0 : _waveformRaw$data.arr;
        if (!Array.isArray(list)) {
          return {
            data: [],
            layout: {
              title: 'No waveform data',
              autosize: true
            }
          };
        }

        // Find matching traces for each detector/subdetector pair
        var tracesData = detectorSystems.map(function (detectorSystem, i) {
          var subdetector = subdetectors[i];
          var wfItem = list.find(function (w) {
            return w.detectorSystem === detectorSystem && w.subdetector === subdetector;
          });
          return wfItem && wfItem.trace ? {
            wfItem: wfItem,
            detectorSystem: detectorSystem,
            subdetector: subdetector,
            index: i
          } : null;
        });
        var _this$buildSoccerBall = this.buildSoccerBallSubplots(tracesData),
          data = _this$buildSoccerBall.data,
          layout = _this$buildSoccerBall.layout;
        return {
          data: data,
          layout: layout
        };
      }
    }, {
      key: "getSoccerBallPositions",
      value: function getSoccerBallPositions() {
        var _this$settings2 = this.settings,
          positionOffsetsX = _this$settings2.positionOffsetsX,
          positionOffsetsY = _this$settings2.positionOffsetsY;
        var width = 100;
        var height = 100;
        var scale = 115;
        var rotationDeg = 22.5;
        var centroid = soccerBallData.vertices.reduce(function (acc, v) {
          return [acc[0] + v[0], acc[1] + v[1]];
        }, [0, 0]).map(function (c) {
          return c / soccerBallData.vertices.length;
        });
        var rad = rotationDeg * Math.PI / 180;
        var cosA = Math.cos(rad);
        var sinA = Math.sin(rad);
        var transformVertex = function transformVertex(v) {
          var dx = v[0] - centroid[0];
          var dy = v[1] - centroid[1];
          var rx = dx * cosA - dy * sinA;
          var ry = dx * sinA + dy * cosA;
          return {
            x: rx * scale + width / 2,
            y: ry * scale + height / 2
          };
        };
        var vertices = soccerBallData.vertices.map(transformVertex);
        var positions = [];
        for (var i = 0; i < Math.min(6, soccerBallData.hexagons.length); i++) {
          var hex = soccerBallData.hexagons[i];
          var hexVertices = hex.map(function (idx) {
            return vertices[idx];
          });
          var center = hexVertices.reduce(function (acc, v) {
            return {
              x: acc.x + v.x,
              y: acc.y + v.y
            };
          }, {
            x: 0,
            y: 0
          });
          center.x /= hexVertices.length;
          center.y /= hexVertices.length;
          var offsetX = positionOffsetsX[i] || 0;
          var offsetY = positionOffsetsY[i] || 0;
          positions.push({
            x: center.x / width + offsetX,
            y: 1 - center.y / height + offsetY
          });
        }
        if (positions.length < 6 && soccerBallData.pentagons.length > 0) {
          var pent = soccerBallData.pentagons[0];
          var pentVertices = pent.map(function (idx) {
            return vertices[idx];
          });
          var _center = pentVertices.reduce(function (acc, v) {
            return {
              x: acc.x + v.x,
              y: acc.y + v.y
            };
          }, {
            x: 0,
            y: 0
          });
          _center.x /= pentVertices.length;
          _center.y /= pentVertices.length;
          var _offsetX = positionOffsetsX[positions.length] || 0;
          var _offsetY = positionOffsetsY[positions.length] || 0;
          positions.push({
            x: _center.x / width + _offsetX,
            y: 1 - _center.y / height + _offsetY
          });
        }
        return positions;
      }
    }, {
      key: "buildSoccerBallSubplots",
      value: function buildSoccerBallSubplots(tracesData) {
        var _this$settings3 = this.settings,
          traceColors = _this$settings3.traceColors,
          subplotSize = _this$settings3.subplotSize,
          showIntegralBounds = _this$settings3.showIntegralBounds,
          showIntegralFill = _this$settings3.showIntegralFill,
          showPedestal = _this$settings3.showPedestal,
          showPedestalStdev = _this$settings3.showPedestalStdev,
          showIntegralInfoBox = _this$settings3.showIntegralInfoBox,
          showIntegralWindowText = _this$settings3.showIntegralWindowText,
          integralLineColor = _this$settings3.integralLineColor,
          integralLineWidth = _this$settings3.integralLineWidth,
          integralLineDash = _this$settings3.integralLineDash,
          integralFillColor = _this$settings3.integralFillColor,
          pedestalLineColor = _this$settings3.pedestalLineColor,
          pedestalLineWidth = _this$settings3.pedestalLineWidth,
          pedestalLineDash = _this$settings3.pedestalLineDash,
          pedestalStdevFillColor = _this$settings3.pedestalStdevFillColor,
          integralInfoBoxBgColor = _this$settings3.integralInfoBoxBgColor,
          integralInfoBoxBorderColor = _this$settings3.integralInfoBoxBorderColor,
          integralInfoBoxX = _this$settings3.integralInfoBoxX,
          integralInfoBoxY = _this$settings3.integralInfoBoxY,
          showSubplotLabels = _this$settings3.showSubplotLabels,
          subtractPedestal = _this$settings3.subtractPedestal,
          fixYAxis = _this$settings3.fixYAxis,
          yAxisMin = _this$settings3.yAxisMin,
          yAxisMax = _this$settings3.yAxisMax,
          fixXAxis = _this$settings3.fixXAxis,
          xAxisMin = _this$settings3.xAxisMin,
          xAxisMax = _this$settings3.xAxisMax;
        var positions = this.getSoccerBallPositions();
        var plotlyTraces = [];
        var shapes = [];
        var annotations = [];
        tracesData.forEach(function (item, i) {
          if (!item || !item.wfItem || !Array.isArray(item.wfItem.trace) || i >= positions.length) return;
          var wfItem = item.wfItem;
          var trace = wfItem.trace;
          var color = traceColors[i % traceColors.length];

          // Process trace data - subtract pedestal if enabled
          var processedTrace = _toConsumableArray(trace);
          var adjustedPedestalLevel = wfItem.pedestalLevel;
          if (subtractPedestal && typeof wfItem.pedestalLevel === 'number') {
            processedTrace = trace.map(function (value) {
              return value - wfItem.pedestalLevel;
            });
            adjustedPedestalLevel = 0;
          }

          // Main trace
          plotlyTraces.push({
            type: 'scatter',
            mode: 'lines',
            x: trace.map(function (_, idx) {
              return idx;
            }),
            y: processedTrace,
            line: {
              color: color
            },
            name: "".concat(item.detectorSystem, " ").concat(item.subdetector),
            xaxis: "x".concat(i + 1),
            yaxis: "y".concat(i + 1),
            showlegend: false,
            hoverinfo: 'x+y+name'
          });

          // Subplot labels
          if (showSubplotLabels) {
            annotations.push({
              x: 0.5,
              y: 1.05,
              xref: "x".concat(i + 1, " domain"),
              yref: "y".concat(i + 1, " domain"),
              text: "".concat(item.detectorSystem, " ").concat(item.subdetector),
              showarrow: false,
              font: {
                size: 10,
                color: 'black'
              },
              align: 'center'
            });
          }

          // Integral bounds + fill
          if (showIntegralBounds && wfItem.integration_window) {
            var _wfItem$integration_w = wfItem.integration_window,
              startSample = _wfItem$integration_w.first,
              endSample = _wfItem$integration_w.second;
            if (startSample != null && endSample != null) {
              var yMin = Math.min.apply(Math, _toConsumableArray(processedTrace));
              var yMax = Math.max.apply(Math, _toConsumableArray(processedTrace));
              if (showIntegralFill) {
                shapes.push({
                  type: 'rect',
                  xref: "x".concat(i + 1),
                  yref: "y".concat(i + 1),
                  x0: startSample,
                  x1: endSample,
                  y0: yMin,
                  y1: yMax,
                  fillcolor: integralFillColor,
                  line: {
                    width: 0
                  }
                });
              }
              shapes.push({
                type: 'line',
                xref: "x".concat(i + 1),
                yref: "y".concat(i + 1),
                x0: startSample,
                x1: startSample,
                y0: yMin,
                y1: yMax,
                line: {
                  color: integralLineColor,
                  width: integralLineWidth,
                  dash: integralLineDash
                }
              }, {
                type: 'line',
                xref: "x".concat(i + 1),
                yref: "y".concat(i + 1),
                x0: endSample,
                x1: endSample,
                y0: yMin,
                y1: yMax,
                line: {
                  color: integralLineColor,
                  width: integralLineWidth,
                  dash: integralLineDash
                }
              });
              if (showIntegralWindowText) {
                annotations.push({
                  x: (startSample + endSample) / 2,
                  y: yMax,
                  xref: "x".concat(i + 1),
                  yref: "y".concat(i + 1),
                  text: "[".concat(startSample, "-").concat(endSample, "]"),
                  showarrow: false,
                  font: {
                    size: 8,
                    color: 'black'
                  }
                });
              }
            }
          }

          // Pedestal line + stdev
          if (showPedestal && typeof adjustedPedestalLevel === 'number') {
            shapes.push({
              type: 'line',
              xref: "x".concat(i + 1),
              yref: "y".concat(i + 1),
              x0: 0,
              x1: trace.length - 1,
              y0: adjustedPedestalLevel,
              y1: adjustedPedestalLevel,
              line: {
                color: pedestalLineColor,
                width: pedestalLineWidth,
                dash: pedestalLineDash
              }
            });
            if (showPedestalStdev && typeof wfItem.pedestalStdev === 'number') {
              shapes.push({
                type: 'rect',
                xref: "x".concat(i + 1),
                yref: "y".concat(i + 1),
                x0: 0,
                x1: trace.length - 1,
                y0: adjustedPedestalLevel - wfItem.pedestalStdev,
                y1: adjustedPedestalLevel + wfItem.pedestalStdev,
                fillcolor: pedestalStdevFillColor,
                line: {
                  width: 0
                }
              });
            }
          }

          // Info box
          if (showIntegralInfoBox) {
            var _wfItem$integral, _wfItem$amplitude;
            annotations.push({
              x: integralInfoBoxX,
              y: integralInfoBoxY,
              xref: "x".concat(i + 1, " domain"),
              yref: "y".concat(i + 1, " domain"),
              text: "Int: ".concat(((_wfItem$integral = wfItem.integral) === null || _wfItem$integral === void 0 ? void 0 : _wfItem$integral.toFixed(1)) || 'N/A', "<br>") + "Amp: ".concat(((_wfItem$amplitude = wfItem.amplitude) === null || _wfItem$amplitude === void 0 ? void 0 : _wfItem$amplitude.toFixed(1)) || 'N/A'),
              showarrow: false,
              font: {
                size: 8,
                color: 'black'
              },
              align: 'left',
              bgcolor: integralInfoBoxBgColor,
              bordercolor: integralInfoBoxBorderColor,
              borderwidth: 1
            });
          }
        });

        // Layout + axes
        var layout = {
          autosize: true,
          margin: {
            t: 20,
            r: 20,
            b: 20,
            l: 20
          },
          showlegend: false,
          bargap: 0,
          shapes: shapes,
          annotations: annotations,
          paper_bgcolor: 'rgba(0,0,0,0)',
          plot_bgcolor: 'rgba(0,0,0,0)'
        };
        positions.forEach(function (pos, i) {
          if (i < tracesData.length && tracesData[i]) {
            var clampedX = Math.max(subplotSize / 2, Math.min(1 - subplotSize / 2, pos.x));
            var clampedY = Math.max(subplotSize / 2, Math.min(1 - subplotSize / 2, pos.y));
            var xDomain = [clampedX - subplotSize / 2, clampedX + subplotSize / 2];
            var yDomain = [clampedY - subplotSize / 2, clampedY + subplotSize / 2];
            var xAxisKey = i === 0 ? 'xaxis' : "xaxis".concat(i + 1);
            var yAxisKey = i === 0 ? 'yaxis' : "yaxis".concat(i + 1);
            var xAxisConfig = {
              domain: xDomain,
              anchor: "y".concat(i + 1),
              showgrid: true,
              gridcolor: 'rgba(128,128,128,0.2)',
              showticklabels: true,
              zeroline: true,
              title: ''
            };
            if (fixXAxis) {
              xAxisConfig.range = [xAxisMin, xAxisMax];
              xAxisConfig.autorange = false;
            } else {
              xAxisConfig.autorange = true;
            }
            var yAxisConfig = {
              domain: yDomain,
              anchor: "x".concat(i + 1),
              showgrid: true,
              gridcolor: 'rgba(128,128,128,0.2)',
              showticklabels: true,
              zeroline: true,
              title: ''
            };
            if (fixYAxis) {
              yAxisConfig.range = [yAxisMin, yAxisMax];
              yAxisConfig.autorange = false;
            } else {
              yAxisConfig.autorange = true;
            }
            layout[xAxisKey] = xAxisConfig;
            layout[yAxisKey] = yAxisConfig;
          }
        });
        return {
          data: plotlyTraces,
          layout: layout
        };
      }
    }, {
      key: "renderSoccerBallSVG",
      value: function renderSoccerBallSVG() {
        var _this$settings4 = this.settings,
          showSoccerBallOutline = _this$settings4.showSoccerBallOutline,
          soccerBallLineColor = _this$settings4.soccerBallLineColor;
        if (!showSoccerBallOutline) return null;
        var width = 100;
        var height = 100;
        var scale = 115;
        var rotationDeg = 22.5;
        var centroid = soccerBallData.vertices.reduce(function (acc, v) {
          return [acc[0] + v[0], acc[1] + v[1]];
        }, [0, 0]).map(function (c) {
          return c / soccerBallData.vertices.length;
        });
        var rad = rotationDeg * Math.PI / 180;
        var cosA = Math.cos(rad);
        var sinA = Math.sin(rad);
        var transformVertex = function transformVertex(v) {
          var dx = v[0] - centroid[0];
          var dy = v[1] - centroid[1];
          var rx = dx * cosA - dy * sinA;
          var ry = dx * sinA + dy * cosA;
          return {
            x: rx * scale + width / 2,
            y: ry * scale + height / 2
          };
        };
        var vertices = soccerBallData.vertices.map(transformVertex);
        var pentagon = soccerBallData.pentagons[0].map(function (i) {
          return vertices[i];
        });
        var hexagons = soccerBallData.hexagons.map(function (hex) {
          return hex.map(function (i) {
            return vertices[i];
          });
        });
        return /*#__PURE__*/React.createElement("svg", {
          width: "100%",
          height: "100%",
          viewBox: "0 0 ".concat(width, " ").concat(height),
          style: {
            position: 'absolute',
            top: 0,
            left: 0,
            pointerEvents: 'none',
            zIndex: 10
          }
        }, hexagons.map(function (hex, idx) {
          return /*#__PURE__*/React.createElement("polygon", {
            key: "hex-".concat(idx),
            points: hex.map(function (v) {
              return "".concat(v.x, ",").concat(v.y);
            }).join(' '),
            fill: "none",
            stroke: soccerBallLineColor,
            strokeWidth: "2"
          });
        }), /*#__PURE__*/React.createElement("polygon", {
          points: pentagon.map(function (v) {
            return "".concat(v.x, ",").concat(v.y);
          }).join(' '),
          fill: "none",
          stroke: soccerBallLineColor,
          strokeWidth: "2"
        }));
      }
    }, {
      key: "render",
      value: function render() {
        var _this$state = this.state,
          loading = _this$state.loading,
          error = _this$state.error,
          data = _this$state.data,
          layout = _this$state.layout,
          revision = _this$state.revision;
        return /*#__PURE__*/React.createElement("div", {
          className: "no-drag",
          style: {
            width: '100%',
            height: '100%',
            position: 'relative'
          }
        }, loading && /*#__PURE__*/React.createElement("div", null, "Loading..."), error && /*#__PURE__*/React.createElement("div", {
          style: {
            color: 'red'
          }
        }, "Error: ", error), !loading && !error && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Plotly, {
          data: data,
          layout: layout,
          revision: revision,
          style: {
            width: '100%',
            height: '100%'
          },
          useResizeHandler: true,
          config: {
            responsive: true,
            displayModeBar: true
          }
        }), this.renderSoccerBallSVG()));
      }
    }], [{
      key: "settingSchema",
      get: function get() {
        return _objectSpread2(_objectSpread2({}, _superPropGet(WFD5LysoArrayWaveforms, "settingSchema", this)), {}, {
          dataUrl: {
            type: SettingTypes.STRING,
            "default": 'http://127.0.0.1:3001/api/json_path?last=1&json_path=/data_products/WFD5WaveformCollection',
            label: 'Data URL',
            onChange: 'onUpdateTick',
            advanced: true
          },
          detectorSystems: {
            type: SettingTypes.ARRAY,
            elementType: SettingTypes.STRING,
            "default": ['LYSO', 'LYSO', 'LYSO', 'LYSO', 'LYSO', 'LYSO'],
            label: 'Detector Systems',
            advanced: false
          },
          subdetectors: {
            type: SettingTypes.ARRAY,
            elementType: SettingTypes.STRING,
            "default": ['HEX2', 'HEX3', 'HEX4', 'HEX5', 'HEX1', 'PENT'],
            label: 'Subdetectors',
            advanced: false
          },
          traceColors: {
            type: SettingTypes.ARRAY,
            elementType: SettingTypes.COLOR,
            "default": ['rgba(70,130,180,1)', 'rgba(220,20,60,1)', 'rgba(34,139,34,1)', 'rgba(255,140,0,1)', 'rgba(148,0,211,1)', 'rgba(255,215,0,1)'],
            label: 'Trace Colors',
            onChange: 'onLayoutUpdate',
            advanced: false
          },
          showSoccerBallOutline: {
            type: SettingTypes.BOOLEAN,
            "default": true,
            label: 'Show Soccer Ball Outline',
            onChange: 'onLayoutUpdate',
            advanced: false
          },
          soccerBallLineColor: {
            type: SettingTypes.COLOR,
            "default": 'rgba(51,51,51,0.3)',
            label: 'Soccer Ball Line Color',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          subplotSize: {
            type: SettingTypes.NUMBER,
            "default": 0.20,
            label: 'Subplot Size (fraction)',
            onChange: 'onLayoutUpdate',
            advanced: false
          },
          positionOffsetsX: {
            type: SettingTypes.ARRAY,
            elementType: SettingTypes.NUMBER,
            "default": [0, 0, 0, 0, 0, 0],
            label: 'X Position Offsets (fraction)',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          positionOffsetsY: {
            type: SettingTypes.ARRAY,
            elementType: SettingTypes.NUMBER,
            "default": [0, 0, 0, 0, 0, 0],
            label: 'Y Position Offsets (fraction)',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          showSubplotLabels: {
            type: SettingTypes.BOOLEAN,
            "default": false,
            label: 'Show Subplot Labels',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          subtractPedestal: {
            type: SettingTypes.BOOLEAN,
            "default": false,
            label: 'Subtract Pedestal (Global)',
            onChange: 'onLayoutUpdate',
            advanced: false
          },
          fixYAxis: {
            type: SettingTypes.BOOLEAN,
            "default": false,
            label: 'Fix Y Axis Range (Global)',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          yAxisMin: {
            type: SettingTypes.NUMBER,
            "default": -2048,
            label: 'Y Axis Min (Global)',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          yAxisMax: {
            type: SettingTypes.NUMBER,
            "default": 2048,
            label: 'Y Axis Max (Global)',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          fixXAxis: {
            type: SettingTypes.BOOLEAN,
            "default": false,
            label: 'Fix X Axis Range (Global)',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          xAxisMin: {
            type: SettingTypes.NUMBER,
            "default": 0,
            label: 'X Axis Min (Global)',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          xAxisMax: {
            type: SettingTypes.NUMBER,
            "default": 2048,
            label: 'X Axis Max (Global)',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          showIntegralBounds: {
            type: SettingTypes.BOOLEAN,
            "default": true,
            label: 'Show Integral Bounds',
            onChange: 'onLayoutUpdate'
          },
          showIntegralFill: {
            type: SettingTypes.BOOLEAN,
            "default": true,
            label: 'Fill Integral Region',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          showIntegralWindowText: {
            type: SettingTypes.BOOLEAN,
            "default": false,
            label: 'Show Integral Window Text',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          showPedestal: {
            type: SettingTypes.BOOLEAN,
            "default": true,
            label: 'Show Pedestal',
            onChange: 'onLayoutUpdate'
          },
          showPedestalStdev: {
            type: SettingTypes.BOOLEAN,
            "default": false,
            label: 'Show Pedestal StdDev',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          showIntegralInfoBox: {
            type: SettingTypes.BOOLEAN,
            "default": false,
            label: 'Show Integral Info Box',
            onChange: 'onLayoutUpdate'
          },
          pedestalLineColor: {
            type: SettingTypes.COLOR,
            "default": 'black',
            label: 'Pedestal Line Color',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          pedestalLineWidth: {
            type: SettingTypes.NUMBER,
            "default": 2,
            label: 'Pedestal Line Width',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          pedestalLineDash: {
            type: SettingTypes.STRING,
            "default": 'dash',
            label: 'Pedestal Line Dash',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          pedestalStdevFillColor: {
            type: SettingTypes.COLOR,
            "default": 'rgba(0,0,0,0.1)',
            label: 'Pedestal StdDev Fill Color',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          integralLineColor: {
            type: SettingTypes.COLOR,
            "default": 'black',
            label: 'Integral Bound Line Color',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          integralLineWidth: {
            type: SettingTypes.NUMBER,
            "default": 2,
            label: 'Integral Bound Line Width',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          integralLineDash: {
            type: SettingTypes.STRING,
            "default": 'dash',
            label: 'Integral Bound Line Dash',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          integralFillColor: {
            type: SettingTypes.COLOR,
            "default": 'rgba(100,150,255,0.15)',
            label: 'Integral Region Fill Color',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          integralInfoBoxBgColor: {
            type: SettingTypes.COLOR,
            "default": 'rgba(255,255,255,0.8)',
            label: 'Info Box Background Color',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          integralInfoBoxBorderColor: {
            type: SettingTypes.COLOR,
            "default": 'black',
            label: 'Info Box Border Color',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          integralInfoBoxX: {
            type: SettingTypes.NUMBER,
            "default": 0.02,
            label: 'Integral Info Box X (domain coords)',
            onChange: 'onLayoutUpdate',
            advanced: true
          },
          integralInfoBoxY: {
            type: SettingTypes.NUMBER,
            "default": 0.98,
            label: 'Integral Info Box Y (domain coords)',
            onChange: 'onLayoutUpdate',
            advanced: true
          }
        });
      }
    }]);
  }(Figure), _defineProperty(_WFD5LysoArrayWaveforms, "displayName", 'WFD5 Lyso Array Waveforms'), _defineProperty(_WFD5LysoArrayWaveforms, "name", 'WFD5LysoArrayWaveforms'), _WFD5LysoArrayWaveforms;
}

function makeWFD5WaveformTraceOnly(_ref) {
  var _WFD5WaveformTrace;
  var Plot = _ref.Plot,
    SettingTypes = _ref.SettingTypes;
  return _WFD5WaveformTrace = /*#__PURE__*/function (_Plot) {
    function WFD5WaveformTrace() {
      _classCallCheck(this, WFD5WaveformTrace);
      return _callSuper(this, WFD5WaveformTrace, arguments);
    }
    _inherits(WFD5WaveformTrace, _Plot);
    return _createClass(WFD5WaveformTrace, [{
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
        var _raw$data,
          _this = this;
        var list = raw === null || raw === void 0 || (_raw$data = raw.data) === null || _raw$data === void 0 ? void 0 : _raw$data.arr;
        if (!Array.isArray(list)) return null;
        var s = this.settings;
        var wf = null;
        var settingsToUpdate = {};

        // Try detector/subdetector first
        if (s.detectorSystem && s.subdetector) {
          wf = list.find(function (w) {
            return w.detectorSystem === s.detectorSystem && w.subdetector === s.subdetector && Array.isArray(w.trace);
          });
          if (wf) {
            // Update crate/amc/channel from matched item
            if (wf.crateNum != null && s.crate !== wf.crateNum) {
              settingsToUpdate.crate = wf.crateNum;
            }
            if (wf.amcNum != null && s.amcSlot !== wf.amcNum) {
              settingsToUpdate.amcSlot = wf.amcNum;
            }
            if (wf.channelTag != null && s.channel !== wf.channelTag) {
              settingsToUpdate.channel = wf.channelTag;
            }
          }
        }

        // Fallback to crate/amc/channel
        if (!wf) {
          wf = list.find(function (w) {
            return w.crateNum === s.crate && w.amcNum === s.amcSlot && w.channelTag === s.channel && Array.isArray(w.trace);
          });
          if (wf) {
            // Update detector/subdetector from matched item
            if (wf.detectorSystem && s.detectorSystem !== wf.detectorSystem) {
              settingsToUpdate.detectorSystem = wf.detectorSystem;
            }
            if (wf.subdetector && s.subdetector !== wf.subdetector) {
              settingsToUpdate.subdetector = wf.subdetector;
            }
          }
        }

        // Only update settings if there are actual changes
        if (Object.keys(settingsToUpdate).length > 0 && typeof this.props.onSettingsCorrected === 'function') {
          var newSettings = _objectSpread2(_objectSpread2({}, s), settingsToUpdate);
          console.log("[".concat(this.id || 'WFD5Trace', "] Auto-syncing settings:"), settingsToUpdate);
          // Use setTimeout to avoid updating during render
          setTimeout(function () {
            return _this.props.onSettingsCorrected(newSettings);
          }, 0);
        }
        if (!wf) return null;
        return {
          type: 'scatter',
          mode: 'lines',
          x: wf.trace.map(function (_, i) {
            return i;
          }),
          y: wf.trace,
          name: wf.detectorSystem || "Crate ".concat(s.crate, ", AMC ").concat(s.amcSlot, ", Ch ").concat(s.channel),
          line: {
            color: s.traceColor
          },
          hoverinfo: 'x+y+name'
        };
      }
    }], [{
      key: "settingSchema",
      get: function get() {
        return _objectSpread2(_objectSpread2({}, _superPropGet(WFD5WaveformTrace, "settingSchema", this)), {}, {
          // Data URL
          dataUrl: {
            type: SettingTypes.STRING,
            "default": 'http://127.0.0.1:3001/api/json_path?last=1&json_path=/data_products/WFD5WaveformCollection',
            label: 'Data URL',
            onChange: 'onUpdateTick',
            advanced: true
          },
          // Detector selection
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
          // Channel fallback
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
          // Basic trace style
          traceColor: {
            type: SettingTypes.COLOR,
            "default": 'rgba(70,130,180,1)',
            // steelblue
            label: 'Trace Color',
            onChange: 'onLayoutUpdate',
            advanced: false
          }
        });
      }
    }]);
  }(Plot), _defineProperty(_WFD5WaveformTrace, "displayName", 'WFD5 Waveform (Trace Only)'), _defineProperty(_WFD5WaveformTrace, "name", 'WFD5WaveformTraceOnly'), _WFD5WaveformTrace;
}

function registerFigures(_ref) {
  var registry = _ref.registry,
    baseClasses = _ref.baseClasses;
  var Figure = baseClasses.Figure,
    Plot = baseClasses.Plot,
    SettingTypes = baseClasses.SettingTypes;
  var figures = [makeWFD5IntegralHistogram({
    Plot: Plot,
    SettingTypes: SettingTypes
  }), makeWFD5HodoscopePositionHistogram({
    Plot: Plot,
    SettingTypes: SettingTypes
  }), makeWFD5Waveform({
    Figure: Figure,
    SettingTypes: SettingTypes
  }), makeWFD5LysoArrayHistograms({
    Figure: Figure,
    SettingTypes: SettingTypes
  }), makeWFD5LysoArrayWaveforms({
    Figure: Figure,
    SettingTypes: SettingTypes
  }), makeWFD5WaveformTraceOnly({
    Plot: Plot,
    SettingTypes: SettingTypes
  })];
  figures.forEach(function (fig) {
    return registry.register(fig.name, fig);
  });
}

// Expose globally for IIFE/eval() based plugin loading
if (typeof window !== 'undefined') {
  window.PluginRegister = registerFigures;
}

export { registerFigures as default };
