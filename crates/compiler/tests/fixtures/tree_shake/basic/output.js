//index.js:
 import module from "node:module";
global.__farmNodeRequire = module.createRequire(import.meta.url);
global.__farmNodeBuiltinModules = module.builtinModules;
(function(modules, entryModule) {
    var cache = {};
    function require(id) {
        if (cache[id]) return cache[id].exports;
        var module = {
            id: id,
            exports: {}
        };
        modules[id](module, module.exports, require);
        cache[id] = module;
        return module.exports;
    }
    require(entryModule);
})({
    "../../_internal/runtime/index.js.farm-runtime": function(module, exports, require, dynamicRequire) {
        "use strict";
        console.log("runtime/index.js");
        __farm_global_this__.__farm_module_system__.setPlugins([]);
    }
}, "../../_internal/runtime/index.js.farm-runtime");
(function(modules) {
    for(var key in modules){
        var __farm_global_this__ = globalThis || window || global || self;
        __farm_global_this__.__farm_module_system__.register(key, modules[key]);
    }
})({
    "dep.ts": function(module, exports, require, dynamicRequire) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        Object.defineProperty(exports, "a", {
            enumerable: true,
            get: function() {
                return a;
            }
        });
        const a = "1";
    },
    "index.ts": function(module, exports, require, dynamicRequire) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _dep = require("dep.ts");
        console.log(_dep.a);
    }
});
var __farm_global_this__ = globalThis || window || global || self;
var farmModuleSystem = __farm_global_this__.__farm_module_system__;
farmModuleSystem.bootstrap();
var entry = farmModuleSystem.require("index.ts").default;
export default entry;