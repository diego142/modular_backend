(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "./node_modules/@ionic/core/dist/esm/button-active-0d5784f9.js":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-0d5784f9.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function node_modulesIonicCoreDistEsmButtonActive0d5784f9Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-44bf8136.js */
      "./node_modules/@ionic/core/dist/esm/index-44bf8136.js");
      /* harmony import */


      var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./index-eea61379.js */
      "./node_modules/@ionic/core/dist/esm/index-eea61379.js");
      /* harmony import */


      var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./haptic-7b8ba70a.js */
      "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function node_modulesIonicCoreDistEsmFrameworkDelegateD1eb6504Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });

      var attachComponent = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!delegate) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);

                  if (!el.componentOnReady) {
                    _context.next = 11;
                    break;
                  }

                  _context.next = 11;
                  return el.componentOnReady();

                case 11:
                  return _context.abrupt("return", el);

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function attachComponent(_x, _x2, _x3, _x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function node_modulesIonicCoreDistEsmHaptic7b8ba70aJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function node_modulesIonicCoreDistEsmSpinnerConfigsC78e170eJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function node_modulesIonicCoreDistEsmTheme3f0b0c04Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color) {
        return typeof color === 'string' && color.length > 0 ? _defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true) : undefined;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context2.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context2.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context2.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context2.abrupt("return", false);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function openURL(_x6, _x7, _x8, _x9) {
          return _ref3.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "./src/app/models/branch.ts":
    /*!**********************************!*\
      !*** ./src/app/models/branch.ts ***!
      \**********************************/

    /*! exports provided: Branch */

    /***/
    function srcAppModelsBranchTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Branch", function () {
        return Branch;
      });

      var Branch = function Branch() {
        _classCallCheck(this, Branch);
      };
      /***/

    },

    /***/
    "./src/app/models/check.ts":
    /*!*********************************!*\
      !*** ./src/app/models/check.ts ***!
      \*********************************/

    /*! exports provided: Check */

    /***/
    function srcAppModelsCheckTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Check", function () {
        return Check;
      });

      var Check = function Check() {
        _classCallCheck(this, Check);
      };
      /***/

    },

    /***/
    "./src/app/models/question.ts":
    /*!************************************!*\
      !*** ./src/app/models/question.ts ***!
      \************************************/

    /*! exports provided: Question */

    /***/
    function srcAppModelsQuestionTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Question", function () {
        return Question;
      });
      /* harmony import */


      var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./user */
      "./src/app/models/user.ts");

      var Question = function Question() {
        _classCallCheck(this, Question);

        this.user = new _user__WEBPACK_IMPORTED_MODULE_0__["User"]();
        this.replys = new Array();
      };
      /***/

    },

    /***/
    "./src/app/models/tag.ts":
    /*!*******************************!*\
      !*** ./src/app/models/tag.ts ***!
      \*******************************/

    /*! exports provided: Tag */

    /***/
    function srcAppModelsTagTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tag", function () {
        return Tag;
      });
      /* harmony import */


      var _question__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./question */
      "./src/app/models/question.ts");

      var Tag = function Tag() {
        _classCallCheck(this, Tag);

        this.question = new _question__WEBPACK_IMPORTED_MODULE_0__["Question"]();
        this.tags = new Array();
      };
      /***/

    },

    /***/
    "./src/app/services/branch.service.ts":
    /*!********************************************!*\
      !*** ./src/app/services/branch.service.ts ***!
      \********************************************/

    /*! exports provided: BranchService */

    /***/
    function srcAppServicesBranchServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BranchService", function () {
        return BranchService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "./src/environments/environment.prod.ts");

      var BranchService = /*#__PURE__*/function () {
        function BranchService(http) {
          _classCallCheck(this, BranchService);

          this.http = http;
        }

        _createClass(BranchService, [{
          key: "getBranches",
          value: function getBranches() {
            return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'branch');
          }
        }, {
          key: "getBranchById",
          value: function getBranchById(id) {
            return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'branch/' + id);
          }
        }, {
          key: "createBranch",
          value: function createBranch(branch) {
            return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'branch', branch);
          }
        }, {
          key: "updateBranch",
          value: function updateBranch(branch) {
            return this.http.put(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'branch', branch);
          }
        }, {
          key: "deleteBranch",
          value: function deleteBranch(id) {
            return this.http["delete"](src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'branch/' + id);
          }
        }]);

        return BranchService;
      }();

      BranchService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      BranchService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], BranchService);
      /***/
    },

    /***/
    "./src/app/services/event.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/event.service.ts ***!
      \*******************************************/

    /*! exports provided: EventService */

    /***/
    function srcAppServicesEventServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventService", function () {
        return EventService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "./src/environments/environment.prod.ts");

      var EventService = /*#__PURE__*/function () {
        function EventService(http) {
          _classCallCheck(this, EventService);

          this.http = http;
          this.eventList = new Array();
        }

        _createClass(EventService, [{
          key: "getEvents",
          value: function getEvents() {
            return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'event');
          }
        }, {
          key: "getEventByIdUser",
          value: function getEventByIdUser(id) {
            return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'event/user' + id);
          }
        }, {
          key: "getEventById",
          value: function getEventById(id) {
            return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'event/' + id);
          }
        }, {
          key: "createEvent",
          value: function createEvent(event) {
            return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'event', event);
          }
        }, {
          key: "updateEvent",
          value: function updateEvent(event) {
            return this.http.put(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'event', event);
          }
        }, {
          key: "closeEvent",
          value: function closeEvent(id) {
            return this.http["delete"](src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'event/' + id);
          }
        }]);

        return EventService;
      }();

      EventService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      EventService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], EventService);
      /***/
    },

    /***/
    "./src/app/services/nl.service.ts":
    /*!****************************************!*\
      !*** ./src/app/services/nl.service.ts ***!
      \****************************************/

    /*! exports provided: NlService */

    /***/
    function srcAppServicesNlServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NlService", function () {
        return NlService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "./src/environments/environment.prod.ts");

      var NlService = /*#__PURE__*/function () {
        function NlService(http) {
          _classCallCheck(this, NlService);

          this.http = http;
        }

        _createClass(NlService, [{
          key: "getClassify",
          value: function getClassify(quetion) {
            return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'nl/classify', quetion);
          }
        }, {
          key: "getQuestions",
          value: function getQuestions(ref) {
            return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'nl/questions/' + ref);
          }
        }, {
          key: "addNewWords",
          value: function addNewWords(ws, brchs) {
            var obj = {
              branches: brchs,
              words: ws
            };
            return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'nl/addWords', obj);
          }
        }]);

        return NlService;
      }();

      NlService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      NlService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], NlService);
      /***/
    },

    /***/
    "./src/app/services/question.service.ts":
    /*!**********************************************!*\
      !*** ./src/app/services/question.service.ts ***!
      \**********************************************/

    /*! exports provided: QuestionService */

    /***/
    function srcAppServicesQuestionServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuestionService", function () {
        return QuestionService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "./src/environments/environment.prod.ts");

      var QuestionService = /*#__PURE__*/function () {
        function QuestionService(http) {
          _classCallCheck(this, QuestionService);

          this.http = http;
          this.questionList = new Array();
        }

        _createClass(QuestionService, [{
          key: "getQuestions",
          value: function getQuestions() {
            return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'question');
          }
        }, {
          key: "getQuestionById",
          value: function getQuestionById(id) {
            return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'question/' + id);
          }
        }, {
          key: "getQuestionByUserId",
          value: function getQuestionByUserId(id) {
            return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'question/user/' + id);
          }
        }, {
          key: "createQuestion",
          value: function createQuestion(question) {
            return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'question', question);
          }
        }, {
          key: "updateQuestion",
          value: function updateQuestion(question) {
            return this.http.put(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'question', question);
          }
        }, {
          key: "closeQuestion",
          value: function closeQuestion(id) {
            return this.http["delete"](src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'question/' + id);
          }
        }, {
          key: "addReply",
          value: function addReply(questionId, reply) {
            return this.http.put(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'question/' + questionId, reply);
          }
        }, {
          key: "removeReply",
          value: function removeReply(questionId, replyId) {
            return this.http["delete"](src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'question/' + questionId + '/' + replyId);
          }
        }]);

        return QuestionService;
      }();

      QuestionService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      QuestionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], QuestionService);
      /***/
    },

    /***/
    "./src/app/services/skills.service.ts":
    /*!********************************************!*\
      !*** ./src/app/services/skills.service.ts ***!
      \********************************************/

    /*! exports provided: SkillsService */

    /***/
    function srcAppServicesSkillsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkillsService", function () {
        return SkillsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "./src/environments/environment.prod.ts");

      var SkillsService = /*#__PURE__*/function () {
        function SkillsService(http) {
          _classCallCheck(this, SkillsService);

          this.http = http;
        }

        _createClass(SkillsService, [{
          key: "getSkills",
          value: function getSkills() {
            return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'skill/');
          }
        }, {
          key: "getSkill",
          value: function getSkill(id) {
            return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'skill/' + id);
          }
        }, {
          key: "createSkill",
          value: function createSkill(skill) {
            return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'skill/', skill);
          }
        }, {
          key: "updateSkill",
          value: function updateSkill(skill) {
            return this.http.put(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'skill/', skill);
          }
        }, {
          key: "addSkill",
          value: function addSkill(idSkill, idBranch) {
            return this.http.put(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'skill/' + idSkill + '/' + idBranch, null);
          }
        }, {
          key: "deleteSkill",
          value: function deleteSkill(idSkill, idBranch) {
            return this.http["delete"](src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'skill/' + idSkill + '/' + idBranch);
          }
        }]);

        return SkillsService;
      }();

      SkillsService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      SkillsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], SkillsService);
      /***/
    },

    /***/
    "./src/app/services/tag.service.ts":
    /*!*****************************************!*\
      !*** ./src/app/services/tag.service.ts ***!
      \*****************************************/

    /*! exports provided: TagService */

    /***/
    function srcAppServicesTagServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagService", function () {
        return TagService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "./src/environments/environment.prod.ts");

      var TagService = /*#__PURE__*/function () {
        function TagService(http) {
          _classCallCheck(this, TagService);

          this.http = http;
        }

        _createClass(TagService, [{
          key: "getTags",
          value: function getTags() {
            return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'tag');
          }
        }, {
          key: "getTagByQuestionId",
          value: function getTagByQuestionId(id) {
            return this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'tag/' + id);
          }
        }, {
          key: "createTag",
          value: function createTag(tag) {
            return this.http.post(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'tag', tag);
          }
        }, {
          key: "updateTag",
          value: function updateTag(tag) {
            return this.http.put(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'tag', tag);
          }
        }, {
          key: "addTag",
          value: function addTag(idTag, idBranch) {
            return this.http.put(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'tag/' + idTag + '/' + idBranch, null);
          }
        }, {
          key: "removeTag",
          value: function removeTag(idTag, idBranch) {
            return this.http["delete"](src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].URL + 'tag/' + idTag + '/' + idBranch);
          }
        }]);

        return TagService;
      }();

      TagService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      TagService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], TagService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map