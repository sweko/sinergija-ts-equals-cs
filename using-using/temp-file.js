"use strict";
var _a;
var _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TempFile = void 0;
var fs = require("fs");
(_a = (_b = Symbol).dispose) !== null && _a !== void 0 ? _a : (_b.dispose = Symbol("Symbol.dispose"));
var TempFile = /** @class */ (function () {
    function TempFile(path) {
        this.path = path;
        this.handle = fs.openSync(path, "w+");
    }
    TempFile.prototype.write = function (data) {
        fs.writeSync(this.handle, "".concat(data, "\n"));
    };
    ;
    TempFile.prototype[Symbol.dispose] = function () {
        // Close the file and delete it.
        fs.closeSync(this.handle);
        fs.unlinkSync(this.path);
    };
    return TempFile;
}());
exports.TempFile = TempFile;
