(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<app-header></app-header>\n\n<app-birds-panel *ngIf=\"paging.currentPanel == 'birds'\"></app-birds-panel>\n<app-beasts-panel *ngIf=\"paging.currentPanel == 'beasts'\"></app-beasts-panel>\n<app-wilds-panel *ngIf=\"paging.currentPanel == 'wilds'\"></app-wilds-panel>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/beast-card/beast-card.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/beast-card/beast-card.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <h3>{{ beastsSvc. currentBeastsIndex.name }}</h3>\n    <div>size: {{ beastsSvc. currentBeastsIndex.size }}</div>\n    <div>lifeSpan: {{ beastsSvc. currentBeastsIndex.lifeSpan }}</div>\n    <div>habitat: {{ beastsSvc. currentBeastsIndex.habitat }}</div>\n    <img [src]=\"beastsSvc. currentBeastsIndex.img\"/>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/bird-card/bird-card.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/bird-card/bird-card.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <h3>{{ birdsSvc.currentBird.name }}</h3>\n    <div>size: {{ birdsSvc.currentBird.size }}</div>\n    <div>lifeSpan: {{ birdsSvc.currentBird.lifeSpan }}</div>\n    <div>habitat: {{ birdsSvc.currentBird.habitat }}</div>\n    <img [src]=\"birdsSvc.currentBird.img\"/>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/wild-card/wild-card.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/wild-card/wild-card.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>wild-card works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/footer/footer.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/footer/footer.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>footer works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/header/header.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/header/header.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg-header\">\n    <div class=\"logo\">\n        <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIb3Wz5afkaRx0QRTHL-XFa1vZaN0iBepuNSAQ0SfDZuEveDRD&s\"/>\n    </div>\n    <app-nav></app-nav>\n\n    <div class=\"logon-user\">\n        ברוך הבא משה רוזנבלום\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/nav/nav.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/nav/nav.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n\n<ul class=\"nav-ul\">\n    <li (click)=\"navTo('birds')\">birds</li>\n    <li (click)=\"navTo('beasts')\">beasts</li>\n    <li (click)=\"navTo('wilds')\">wilds</li>\n</ul>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/paginator/paginator.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/paginator/paginator.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>paginator works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/beasts-panel/beasts-panel.component.html": 
        /*!*************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/beasts-panel/beasts-panel.component.html ***!
          \*************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<h1>Welcome to the beasats observatory</h1>\n\n<div class=\"flex\">\n    <div>\n        <h2>our beasts list</h2>\n        <ul>\n            <li *ngFor=\"let b of beastsSvc.beasts\"> {{ b.name }} </li>\n        </ul>\n    </div>\n\n\n    <div>\n        <app-bird-card></app-bird-card>\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/birds-panel/birds-panel.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/birds-panel/birds-panel.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n\n<h1>Welcome to the birds observatory</h1>\n\n<div class=\"flex\">\n    <div>\n        <h2>our birds list</h2>\n        <ul>\n            <li *ngFor=\"let b of birdSvc.birds\"> {{ b.name }} </li>\n        </ul>\n    </div>\n\n\n    <div>\n        <app-bird-card></app-bird-card>\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/wilds-panel/wilds-panel.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/wilds-panel/wilds-panel.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>wilds-panel works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_paging_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/paging.service */ "./src/app/services/paging.service.ts");
            /* harmony import */ var _services_birds_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/birds.service */ "./src/app/services/birds.service.ts");
            /* harmony import */ var _services_beasts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/beasts.service */ "./src/app/services/beasts.service.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent(paging, birds, beasts) {
                    this.paging = paging;
                    this.birds = birds;
                    this.beasts = beasts;
                    this.title = 'Amazonas';
                }
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _services_paging_service__WEBPACK_IMPORTED_MODULE_2__["PagingService"] },
                { type: _services_birds_service__WEBPACK_IMPORTED_MODULE_3__["BirdsService"] },
                { type: _services_beasts_service__WEBPACK_IMPORTED_MODULE_4__["BeastsService"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _comps_cards_beast_card_beast_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comps/cards/beast-card/beast-card.component */ "./src/app/comps/cards/beast-card/beast-card.component.ts");
            /* harmony import */ var _comps_cards_bird_card_bird_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comps/cards/bird-card/bird-card.component */ "./src/app/comps/cards/bird-card/bird-card.component.ts");
            /* harmony import */ var _comps_cards_wild_card_wild_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comps/cards/wild-card/wild-card.component */ "./src/app/comps/cards/wild-card/wild-card.component.ts");
            /* harmony import */ var _comps_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comps/general/footer/footer.component */ "./src/app/comps/general/footer/footer.component.ts");
            /* harmony import */ var _comps_general_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comps/general/header/header.component */ "./src/app/comps/general/header/header.component.ts");
            /* harmony import */ var _comps_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comps/general/nav/nav.component */ "./src/app/comps/general/nav/nav.component.ts");
            /* harmony import */ var _comps_general_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comps/general/paginator/paginator.component */ "./src/app/comps/general/paginator/paginator.component.ts");
            /* harmony import */ var _comps_panels_beasts_panel_beasts_panel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comps/panels/beasts-panel/beasts-panel.component */ "./src/app/comps/panels/beasts-panel/beasts-panel.component.ts");
            /* harmony import */ var _comps_panels_birds_panel_birds_panel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comps/panels/birds-panel/birds-panel.component */ "./src/app/comps/panels/birds-panel/birds-panel.component.ts");
            /* harmony import */ var _comps_panels_wilds_panel_wilds_panel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./comps/panels/wilds-panel/wilds-panel.component */ "./src/app/comps/panels/wilds-panel/wilds-panel.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                        _comps_cards_beast_card_beast_card_component__WEBPACK_IMPORTED_MODULE_4__["BeastCardComponent"],
                        _comps_cards_bird_card_bird_card_component__WEBPACK_IMPORTED_MODULE_5__["BirdCardComponent"],
                        _comps_cards_wild_card_wild_card_component__WEBPACK_IMPORTED_MODULE_6__["WildCardComponent"],
                        _comps_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                        _comps_general_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                        _comps_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_9__["NavComponent"],
                        _comps_general_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_10__["PaginatorComponent"],
                        _comps_panels_beasts_panel_beasts_panel_component__WEBPACK_IMPORTED_MODULE_11__["BeastsPanelComponent"],
                        _comps_panels_birds_panel_birds_panel_component__WEBPACK_IMPORTED_MODULE_12__["BirdsPanelComponent"],
                        _comps_panels_wilds_panel_wilds_panel_component__WEBPACK_IMPORTED_MODULE_13__["WildsPanelComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/comps/cards/beast-card/beast-card.component.css": 
        /*!*****************************************************************!*\
          !*** ./src/app/comps/cards/beast-card/beast-card.component.css ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("img{    max-height: 100px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvY2FyZHMvYmVhc3QtY2FyZC9iZWFzdC1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFBUSxpQkFBaUIsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2NhcmRzL2JlYXN0LWNhcmQvYmVhc3QtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1neyAgICBtYXgtaGVpZ2h0OiAxMDBweDt9Il19 */");
            /***/ 
        }),
        /***/ "./src/app/comps/cards/beast-card/beast-card.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/comps/cards/beast-card/beast-card.component.ts ***!
          \****************************************************************/
        /*! exports provided: BeastCardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeastCardComponent", function () { return BeastCardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_beasts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/beasts.service */ "./src/app/services/beasts.service.ts");
            var BeastCardComponent = /** @class */ (function () {
                function BeastCardComponent(beastsSvc) {
                    this.beastsSvc = beastsSvc;
                    console.log("beastCard conts works");
                }
                BeastCardComponent.prototype.ngOnInit = function () {
                };
                return BeastCardComponent;
            }());
            BeastCardComponent.ctorParameters = function () { return [
                { type: src_app_services_beasts_service__WEBPACK_IMPORTED_MODULE_2__["BeastsService"] }
            ]; };
            BeastCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-beast-card',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./beast-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/beast-card/beast-card.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./beast-card.component.css */ "./src/app/comps/cards/beast-card/beast-card.component.css")).default]
                })
            ], BeastCardComponent);
            /***/ 
        }),
        /***/ "./src/app/comps/cards/bird-card/bird-card.component.css": 
        /*!***************************************************************!*\
          !*** ./src/app/comps/cards/bird-card/bird-card.component.css ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("img{    max-height: 100px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvY2FyZHMvYmlyZC1jYXJkL2JpcmQtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVEsaUJBQWlCLENBQUMiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9jYXJkcy9iaXJkLWNhcmQvYmlyZC1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7ICAgIG1heC1oZWlnaHQ6IDEwMHB4O30iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/comps/cards/bird-card/bird-card.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/comps/cards/bird-card/bird-card.component.ts ***!
          \**************************************************************/
        /*! exports provided: BirdCardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirdCardComponent", function () { return BirdCardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_birds_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/birds.service */ "./src/app/services/birds.service.ts");
            var BirdCardComponent = /** @class */ (function () {
                function BirdCardComponent(birdsSvc) {
                    this.birdsSvc = birdsSvc;
                    console.log('BirdCardComponent ctor');
                }
                BirdCardComponent.prototype.ngOnInit = function () {
                };
                return BirdCardComponent;
            }());
            BirdCardComponent.ctorParameters = function () { return [
                { type: src_app_services_birds_service__WEBPACK_IMPORTED_MODULE_2__["BirdsService"] }
            ]; };
            BirdCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bird-card',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bird-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/bird-card/bird-card.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bird-card.component.css */ "./src/app/comps/cards/bird-card/bird-card.component.css")).default]
                })
            ], BirdCardComponent);
            /***/ 
        }),
        /***/ "./src/app/comps/cards/wild-card/wild-card.component.css": 
        /*!***************************************************************!*\
          !*** ./src/app/comps/cards/wild-card/wild-card.component.css ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2NhcmRzL3dpbGQtY2FyZC93aWxkLWNhcmQuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/comps/cards/wild-card/wild-card.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/comps/cards/wild-card/wild-card.component.ts ***!
          \**************************************************************/
        /*! exports provided: WildCardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WildCardComponent", function () { return WildCardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var WildCardComponent = /** @class */ (function () {
                function WildCardComponent() {
                }
                WildCardComponent.prototype.ngOnInit = function () {
                };
                return WildCardComponent;
            }());
            WildCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-wild-card',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wild-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/wild-card/wild-card.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wild-card.component.css */ "./src/app/comps/cards/wild-card/wild-card.component.css")).default]
                })
            ], WildCardComponent);
            /***/ 
        }),
        /***/ "./src/app/comps/general/footer/footer.component.css": 
        /*!***********************************************************!*\
          !*** ./src/app/comps/general/footer/footer.component.css ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2dlbmVyYWwvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/comps/general/footer/footer.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/comps/general/footer/footer.component.ts ***!
          \**********************************************************/
        /*! exports provided: FooterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function () { return FooterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FooterComponent = /** @class */ (function () {
                function FooterComponent() {
                }
                FooterComponent.prototype.ngOnInit = function () {
                };
                return FooterComponent;
            }());
            FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-footer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/footer/footer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/comps/general/footer/footer.component.css")).default]
                })
            ], FooterComponent);
            /***/ 
        }),
        /***/ "./src/app/comps/general/header/header.component.css": 
        /*!***********************************************************!*\
          !*** ./src/app/comps/general/header/header.component.css ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".bg-header { \r\n    background-image: url(\"https://wallpaperplay.com/walls/full/7/2/f/300012.jpg\");\r\n    display: flex; \r\n    justify-content: space-around;\r\n    align-items: center;\r\n    font-size: 35px;\r\n    \r\n}\r\n\r\n.logo{width: 25%; ;}\r\n\r\n.logo > img {width: 100%;}\r\n\r\napp-nav{\r\n    display: block;\r\n    width: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZ2VuZXJhbC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4RUFBOEU7SUFDOUUsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsZUFBZTs7QUFFbkI7O0FBRUEsTUFBTSxVQUFVLEdBQUc7O0FBQ25CLGFBQWEsV0FBVyxDQUFDOztBQUd6QjtJQUNJLGNBQWM7SUFDZCxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9nZW5lcmFsL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1oZWFkZXIgeyBcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vd2FsbHBhcGVycGxheS5jb20vd2FsbHMvZnVsbC83LzIvZi8zMDAwMTIuanBnXCIpO1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBcclxufVxyXG5cclxuLmxvZ297d2lkdGg6IDI1JTsgO31cclxuLmxvZ28gPiBpbWcge3dpZHRoOiAxMDAlO31cclxuXHJcblxyXG5hcHAtbmF2e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/comps/general/header/header.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/comps/general/header/header.component.ts ***!
          \**********************************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent() {
                    console.log("header cstr is on ");
                }
                HeaderComponent.prototype.ngOnInit = function () {
                };
                return HeaderComponent;
            }());
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/comps/general/header/header.component.css")).default]
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/comps/general/nav/nav.component.css": 
        /*!*****************************************************!*\
          !*** ./src/app/comps/general/nav/nav.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".nav-ul{\r\n    display: flex;\r\n    justify-content: space-around;\r\n    width: 50%;\r\n}\r\n\r\nli:hover {\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZ2VuZXJhbC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvZ2VuZXJhbC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LXVse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxubGk6aG92ZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/comps/general/nav/nav.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/comps/general/nav/nav.component.ts ***!
          \****************************************************/
        /*! exports provided: NavComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function () { return NavComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_paging_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/paging.service */ "./src/app/services/paging.service.ts");
            var NavComponent = /** @class */ (function () {
                function NavComponent(paging) {
                    this.paging = paging;
                } //בקונסטרקטור אני אומר לו לקבל אובייקט מסוג פייגינג ניימ וצריך לתת לו שם ןלהגיד פבליק בתוך האובייקט הזה יש מישתנה שיתן סוג של ציפור
                NavComponent.prototype.ngOnInit = function () {
                };
                // הפונקציה הזו מקבלת סטרינג שיגיע ממי שיקרא לה הפונקציה וויוד בגלל שיש לה גישה לאובייקט פייג'ינגסקביס היא תעדכן את המישתנה קורנטפאנל שנמצא בתוך פייג'ינגברביבס למה שהיא קיבלה בפונקציה
                NavComponent.prototype.navTo = function (pageName) {
                    this.paging.currentPanel = pageName;
                };
                return NavComponent;
            }());
            NavComponent.ctorParameters = function () { return [
                { type: src_app_services_paging_service__WEBPACK_IMPORTED_MODULE_2__["PagingService"] }
            ]; };
            NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-nav',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/nav/nav.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.css */ "./src/app/comps/general/nav/nav.component.css")).default]
                })
            ], NavComponent);
            /***/ 
        }),
        /***/ "./src/app/comps/general/paginator/paginator.component.css": 
        /*!*****************************************************************!*\
          !*** ./src/app/comps/general/paginator/paginator.component.css ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2dlbmVyYWwvcGFnaW5hdG9yL3BhZ2luYXRvci5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/comps/general/paginator/paginator.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/comps/general/paginator/paginator.component.ts ***!
          \****************************************************************/
        /*! exports provided: PaginatorComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorComponent", function () { return PaginatorComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PaginatorComponent = /** @class */ (function () {
                function PaginatorComponent() {
                }
                PaginatorComponent.prototype.ngOnInit = function () {
                };
                return PaginatorComponent;
            }());
            PaginatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-paginator',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./paginator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/paginator/paginator.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./paginator.component.css */ "./src/app/comps/general/paginator/paginator.component.css")).default]
                })
            ], PaginatorComponent);
            /***/ 
        }),
        /***/ "./src/app/comps/panels/beasts-panel/beasts-panel.component.css": 
        /*!**********************************************************************!*\
          !*** ./src/app/comps/panels/beasts-panel/beasts-panel.component.css ***!
          \**********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3BhbmVscy9iZWFzdHMtcGFuZWwvYmVhc3RzLXBhbmVsLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/comps/panels/beasts-panel/beasts-panel.component.ts": 
        /*!*********************************************************************!*\
          !*** ./src/app/comps/panels/beasts-panel/beasts-panel.component.ts ***!
          \*********************************************************************/
        /*! exports provided: BeastsPanelComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeastsPanelComponent", function () { return BeastsPanelComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_beasts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/beasts.service */ "./src/app/services/beasts.service.ts");
            var BeastsPanelComponent = /** @class */ (function () {
                function BeastsPanelComponent(beastsSvc) {
                    this.beastsSvc = beastsSvc;
                }
                BeastsPanelComponent.prototype.ngOnInit = function () {
                };
                return BeastsPanelComponent;
            }());
            BeastsPanelComponent.ctorParameters = function () { return [
                { type: src_app_services_beasts_service__WEBPACK_IMPORTED_MODULE_2__["BeastsService"] }
            ]; };
            BeastsPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-beasts-panel',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./beasts-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/beasts-panel/beasts-panel.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./beasts-panel.component.css */ "./src/app/comps/panels/beasts-panel/beasts-panel.component.css")).default]
                })
            ], BeastsPanelComponent);
            /***/ 
        }),
        /***/ "./src/app/comps/panels/birds-panel/birds-panel.component.css": 
        /*!********************************************************************!*\
          !*** ./src/app/comps/panels/birds-panel/birds-panel.component.css ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3BhbmVscy9iaXJkcy1wYW5lbC9iaXJkcy1wYW5lbC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/comps/panels/birds-panel/birds-panel.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/comps/panels/birds-panel/birds-panel.component.ts ***!
          \*******************************************************************/
        /*! exports provided: BirdsPanelComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirdsPanelComponent", function () { return BirdsPanelComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_birds_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/birds.service */ "./src/app/services/birds.service.ts");
            var BirdsPanelComponent = /** @class */ (function () {
                function BirdsPanelComponent(birdSvc) {
                    this.birdSvc = birdSvc;
                }
                BirdsPanelComponent.prototype.ngOnInit = function () {
                };
                return BirdsPanelComponent;
            }());
            BirdsPanelComponent.ctorParameters = function () { return [
                { type: src_app_services_birds_service__WEBPACK_IMPORTED_MODULE_2__["BirdsService"] }
            ]; };
            BirdsPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-birds-panel',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./birds-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/birds-panel/birds-panel.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./birds-panel.component.css */ "./src/app/comps/panels/birds-panel/birds-panel.component.css")).default]
                })
            ], BirdsPanelComponent);
            /***/ 
        }),
        /***/ "./src/app/comps/panels/wilds-panel/wilds-panel.component.css": 
        /*!********************************************************************!*\
          !*** ./src/app/comps/panels/wilds-panel/wilds-panel.component.css ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL3BhbmVscy93aWxkcy1wYW5lbC93aWxkcy1wYW5lbC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/comps/panels/wilds-panel/wilds-panel.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/comps/panels/wilds-panel/wilds-panel.component.ts ***!
          \*******************************************************************/
        /*! exports provided: WildsPanelComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WildsPanelComponent", function () { return WildsPanelComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var WildsPanelComponent = /** @class */ (function () {
                function WildsPanelComponent() {
                }
                WildsPanelComponent.prototype.ngOnInit = function () {
                };
                return WildsPanelComponent;
            }());
            WildsPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-wilds-panel',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wilds-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/wilds-panel/wilds-panel.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wilds-panel.component.css */ "./src/app/comps/panels/wilds-panel/wilds-panel.component.css")).default]
                })
            ], WildsPanelComponent);
            /***/ 
        }),
        /***/ "./src/app/services/beasts.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/services/beasts.service.ts ***!
          \********************************************/
        /*! exports provided: BeastsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeastsService", function () { return BeastsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var BeastsService = /** @class */ (function () {
                function BeastsService() {
                    this.beasts = [
                        { name: 'tiger', size: 'small', lifeSpan: '15y', habitat: 'africa', img: 'https://bit.ly/2XdxbTP' },
                        { name: 'lion', size: 'small', lifeSpan: '1y', habitat: 'holand', img: 'https://bit.ly/2XdxbTP' },
                        { name: 'snake', size: 'meduin', lifeSpan: '5y', habitat: 'israel', img: 'https://bit.ly/2XdxbTP' },
                        { name: 'cheeeta', size: 'large', lifeSpan: '115y', habitat: 'africa', img: 'https://bit.ly/2XdxbTP' },
                        { name: 'elephent', size: 'extra large', lifeSpan: '5m', habitat: 'africa', img: 'https://bit.ly/2XdxbTP' },
                    ];
                    this.currentBeastsIndex = 0;
                    this.currentBeast = this.beasts[this.currentBeastsIndex];
                }
                return BeastsService;
            }());
            BeastsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], BeastsService);
            /***/ 
        }),
        /***/ "./src/app/services/birds.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/services/birds.service.ts ***!
          \*******************************************/
        /*! exports provided: BirdsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirdsService", function () { return BirdsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var BirdsService = /** @class */ (function () {
                function BirdsService() {
                    this.birds = [
                        { name: 'blue-tail', size: 'small', lifeSpan: '15y', habitat: 'africa', img: 'data:image/jpeg;base64,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' },
                        { name: 'long-tail', size: 'small', lifeSpan: '1y', habitat: 'holand', img: 'https://media.mnn.com/assets/images/2015/08/long-tailed-widowbird.jpg.653x0_q80_crop-smart.jpg' },
                        { name: 'blue-mouth', size: 'meduin', lifeSpan: '5y', habitat: 'israel', img: 'data:image/jpeg;base64,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' },
                        { name: 'pink-beak', size: 'large', lifeSpan: '115y', habitat: 'africa', img: 'data:image/jpeg;base64,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' },
                        { name: 'flamingo', size: 'extra large', lifeSpan: '5m', habitat: 'africa', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQDR_vthK0yMiuGjiYI7Q7ydbsMOIEdlqIJhE8hVALtCN36Q-ETQ&s' },
                    ];
                    this.currentBirdIndex = 0;
                    this.currentBird = this.birds[this.currentBirdIndex];
                }
                return BirdsService;
            }());
            BirdsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], BirdsService);
            /***/ 
        }),
        /***/ "./src/app/services/paging.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/services/paging.service.ts ***!
          \********************************************/
        /*! exports provided: PagingService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagingService", function () { return PagingService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PagingService = /** @class */ (function () {
                function PagingService() {
                    this.currentPanel = 'birds';
                    console.log('paging service constractor is working ,curentPanel=' + this.currentPanel);
                }
                return PagingService;
            }());
            PagingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], PagingService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\stu.RAVTECH\Desktop\ANGULAR ALL\Jungal\Amazonas\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map