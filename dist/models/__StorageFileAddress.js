"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseModel_1 = require("../BaseModel");
var __StorageFileAddress = /** @class */ (function (_super) {
    __extends(__StorageFileAddress, _super);
    function __StorageFileAddress(data) {
        var _this = _super.call(this) || this;
        _this.uri = data.uri;
        return _this;
    }
    Object.defineProperty(__StorageFileAddress, "PropertyMap", {
        get: function () {
            return {
                uri: 'uri',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(__StorageFileAddress, "Rtt", {
        get: function () {
            return 36;
        },
        enumerable: true,
        configurable: true
    });
    return __StorageFileAddress;
}(BaseModel_1.default));
exports.default = __StorageFileAddress;
