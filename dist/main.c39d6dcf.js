// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/fraktur/data.json":[function(require,module,exports) {
module.exports = {
  "A":"𝔄",
  "B":"𝔅",
  "C":"𝕮",
  "D":"𝔇",
  "E":"𝔈",
  "F":"𝔉",
  "G":"𝔊",
  "H":"𝕳",
  "I":"𝕴",
  "J":"𝔍",
  "K":"𝔎",
  "L":"𝔏",
  "M":"𝔐",
  "N":"𝔑",
  "O":"𝔒",
  "P":"𝔓",
  "Q":"𝔔",
  "R":"𝕽",
  "S":"𝔖",
  "T":"𝔗",
  "U":"𝔘",
  "V":"𝔙",
  "W":"𝔚",
  "X":"𝔛",
  "Y":"𝔜",
  "Z":"𝖅",
  "a":"𝔞",
  "b":"𝔟",
  "c":"𝔠",
  "d":"𝔡",
  "e":"𝔢",
  "f":"𝔣",
  "g":"𝔤",
  "h":"𝔥",
  "i":"𝔦",
  "j":"𝔧",
  "k":"𝔨",
  "l":"𝔩",
  "m":"𝔪",
  "n":"𝔫",
  "o":"𝔬",
  "p":"𝔭",
  "q":"𝔮",
  "r":"𝔯",
  "s":"𝔰",
  "t":"𝔱",
  "u":"𝔲",
  "v":"𝔳",
  "w":"𝔴",
  "x":"𝔵",
  "y":"𝔶",
  "z":"𝔷"
}
;
},{}],"node_modules/fraktur/index.js":[function(require,module,exports) {
var data = require('./data.json');
var rdata = {};
Object.keys(data).forEach(function (key) {
    rdata[data[key]] = key;
});

module.exports = encode;
module.exports.encode = encode;
module.exports.decode = decode;

function encode (str) {
    return str.replace(/[A-Za-z]/g, function (s) { return data[s] });
}

function decode (str) {
    return str.replace(
        /\ud835[\udd04-\udd85\dd1e-\udd37]/g,
        function (s) { return rdata[s]
    });
}

},{"./data.json":"node_modules/fraktur/data.json"}],"node_modules/capsid/dist/capsid-cjs.development.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ccc = {};

function check(assertion, message) {
    if (!assertion) {
        throw new Error(message);
    }
}
function checkComponentNameIsValid(name) {
    check(typeof name === 'string', 'The name should be a string');
    check(!!ccc[name], "The coelement of the given name is not registered: " + name);
}

var READY_STATE_CHANGE = 'readystatechange';
var doc = document;
var ready = new Promise(function (resolve) {
    var checkReady = function () {
        if (doc.readyState === 'complete') {
            resolve();
            doc.removeEventListener(READY_STATE_CHANGE, checkReady);
        }
    };
    doc.addEventListener(READY_STATE_CHANGE, checkReady);
    checkReady();
});

var prep = (function (name, el) {
    var classNames;
    if (!name) {
        classNames = Object.keys(ccc);
    }
    else {
        checkComponentNameIsValid(name);
        classNames = [name];
    }
    classNames.map(function (className) {
        
        [].map.call((el || doc).querySelectorAll(ccc[className].sel), ccc[className]);
    });
});

var COELEMENT_DATA_KEY_PREFIX = 'C$';
var KEY_EVENT_LISTENERS = 'K$';
var COMPONENT_NAME_KEY = 'N$';

var BEFORE_MOUNT_KEY = 'B$';

var mount = (function (Constructor, el) {
    var coel = new Constructor();
    coel.el = el;
    var list = Constructor[BEFORE_MOUNT_KEY];
    if (Array.isArray(list)) {
        list.forEach(function (cb) {
            cb(el, coel);
        });
    }
    if (typeof coel.__mount__ === 'function') {
        coel.__mount__();
    }
    return coel;
});

var addHiddenItem = function (target, key, hook) {
    target[key] = (target[key] || []).concat(hook);
};
var addMountHook = function (target, hook) {
    addHiddenItem(target, BEFORE_MOUNT_KEY, hook);
};

var def = function (name, Constructor) {
    check(typeof name === 'string', '`name` of a class component has to be a string.');
    check(typeof Constructor === 'function', '`Constructor` of a class component has to be a function');
    Constructor[COMPONENT_NAME_KEY] = name;
    var initClass = name + "-\uD83D\uDC8A";
    addMountHook(Constructor, function (el, coel) {
        
        el[COELEMENT_DATA_KEY_PREFIX + name] = coel;
        el.classList.add(name, initClass);
    });
    var initializer = function (el) {
        if (!el.classList.contains(initClass)) {
            mount(Constructor, el);
        }
    };
    initializer.sel = "." + name + ":not(." + initClass + ")";
    ccc[name] = initializer;
    ready.then(function () {
        prep(name);
    });
};

var get = (function (name, el) {
    checkComponentNameIsValid(name);
    var coel = el[COELEMENT_DATA_KEY_PREFIX + name];
    check(coel, "no coelement named: " + name + ", on the dom: " + el.tagName);
    return coel;
});

var make = (function (name, elm) {
    checkComponentNameIsValid(name);
    ccc[name](elm);
    return get(name, elm);
});

var unmount = (function (name, el) {
    var coel = get(name, el);
    if (typeof coel.__unmount__ === 'function') {
        coel.__unmount__();
    }
    el.classList.remove(name, name + "-\uD83D\uDC8A");
    (coel[KEY_EVENT_LISTENERS] || []).forEach(function (listener) {
        listener.remove();
    });
    delete el[COELEMENT_DATA_KEY_PREFIX + name];
    delete coel.el;
});

var install$$1 = (function (capsidModule, options) {
    check(typeof capsidModule.install === 'function', 'The given capsid module does not have `install` method. Please check the install call.');
    capsidModule.install(capsid, options || {});
});

var debugMessage = (function (message) {
    if (typeof capsidDebugMessage === 'function') {
        capsidDebugMessage(message);
    }
});

var on = function (event, _a) {
    var at = (_a === void 0 ? {} : _a).at;
    return function (target, key, _) {
        var constructor = target.constructor;
        check(!!event, "Empty event handler is given: constructor=" + constructor.name + " key=" + key);
        addMountHook(constructor, function (el, coel) {
            var listener = function (e) {
                if (!at ||
                    [].some.call(el.querySelectorAll(at), function (node) {
                        return node === e.target || node.contains(e.target);
                    })) {
                    {
                        debugMessage({
                            type: 'event',
                            module: '💊',
                            color: '#e0407b',
                            e: e,
                            el: el,
                            coel: coel
                        });
                    }
                    coel[key](e);
                }
            };
            listener.remove = function () {
                el.removeEventListener(event, listener);
            };
            addHiddenItem(coel, KEY_EVENT_LISTENERS, listener);
            el.addEventListener(event, listener);
        });
    };
};

var useHandler = (function (handlerName) {
    on[handlerName] = on(handlerName);
    on[handlerName].at = function (selector) { return on(handlerName, { at: selector }); };
});

var triggerToElements = function (elements, type, bubbles, result) {
    var emit = function (r) {
        elements.forEach(function (el) {
            el.dispatchEvent(new CustomEvent(type, { detail: r, bubbles: bubbles }));
        });
    };
    if (result && result.then) {
        result.then(emit);
    }
    else {
        emit(result);
    }
};

var emits = function (event) { return function (target, key, descriptor) {
    var method = descriptor.value;
    var constructor = target.constructor;
    check(!!event, "Unable to emits an empty event: constructor=" + constructor.name + " key=" + key);
    descriptor.value = function () {
        var result = method.apply(this, arguments);
        triggerToElements([this.el], event, true, result);
        return result;
    };
}; };

var wired = function (sel) { return function (target, key) {
    Object.defineProperty(target.constructor.prototype, key, {
        get: function () {
            return this.el.querySelector(sel);
        },
        configurable: false
    });
}; };
var wiredAll = function (sel) { return function (target, key) {
    Object.defineProperty(target.constructor.prototype, key, {
        get: function () {
            return this.el.querySelectorAll(sel);
        },
        configurable: false
    });
}; };
wired.all = wiredAll;

var component = function (name) {
    check(typeof name === 'string' && !!name, 'Component name must be a non-empty string');
    return function (Cls) {
        def(name, Cls);
    };
};

var is = (function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return function (Cls) {
        addMountHook(Cls, function (el) {
            var _a;
            (_a = el.classList).add.apply(_a, args);
        });
    };
});

var innerHtml = (function (innerHTML) { return function (Cls) {
    addMountHook(Cls, function (el) {
        el.innerHTML = innerHTML;
        prep(null, el);
    });
}; });

var pub = (function (event, targetSelector) { return function (target, key, descriptor) {
    var method = descriptor.value;
    var constructor = target.constructor;
    check(!!event, "Unable to publish empty event: constructor=" + constructor.name + " key=" + key);
    var selector = targetSelector || ".sub\\:" + event;
    descriptor.value = function () {
        var result = method.apply(this, arguments);
        triggerToElements([].concat.apply([], document.querySelectorAll(selector)), event, false, result);
        return result;
    };
}; });

var sub = (function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return function (Cls) {
        is.apply(void 0, args.map(function (event) { return 'sub:' + event; }))(Cls);
    };
});

on.useHandler = useHandler;
on.useHandler('click');



var capsid = Object.freeze({
	def: def,
	prep: prep,
	make: make,
	mount: mount,
	unmount: unmount,
	get: get,
	install: install$$1,
	on: on,
	emits: emits,
	wired: wired,
	component: component,
	is: is,
	innerHTML: innerHtml,
	pub: pub,
	sub: sub,
	addMountHook: addMountHook,
	__ccc__: ccc
});

exports.def = def;
exports.prep = prep;
exports.make = make;
exports.mount = mount;
exports.unmount = unmount;
exports.get = get;
exports.install = install$$1;
exports.on = on;
exports.emits = emits;
exports.wired = wired;
exports.component = component;
exports.is = is;
exports.innerHTML = innerHtml;
exports.pub = pub;
exports.sub = sub;
exports.addMountHook = addMountHook;
exports.__ccc__ = ccc;

},{}],"node_modules/capsid/index.js":[function(require,module,exports) {
if ("development" === 'production') {
  module.exports = require('./dist/capsid-cjs');
} else {
  module.exports = require('./dist/capsid-cjs.development');
}
},{"./dist/capsid-cjs.development":"node_modules/capsid/dist/capsid-cjs.development.js"}],"main.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var fraktur_1 = require("fraktur");

var capsid_1 = require("capsid");

var DEFAULT_PLACEHOLDER = 'SPQR';

var Main =
/** @class */
function () {
  function Main() {}

  Main.prototype.__mount__ = function () {
    var i = localStorage.input;
    this.input.value = i == null ? DEFAULT_PLACEHOLDER : i;
    this.onInput();
  };

  Main.prototype.onInput = function () {
    var v = this.input.value;
    localStorage.input = v;
    this.result.textContent = v ? fraktur_1.encode(v) : '-';
  };

  __decorate([capsid_1.wired('input')], Main.prototype, "input", void 0);

  __decorate([capsid_1.wired('.result')], Main.prototype, "result", void 0);

  __decorate([capsid_1.on('input')], Main.prototype, "onInput", null);

  Main = __decorate([capsid_1.component('js-main')], Main);
  return Main;
}();
},{"fraktur":"node_modules/fraktur/index.js","capsid":"node_modules/capsid/index.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65120" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.ts"], null)
//# sourceMappingURL=/main.c39d6dcf.js.map