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
var PubliqStorageFileAddress = /** @class */ (function (_super) {
    __extends(PubliqStorageFileAddress, _super);
    function PubliqStorageFileAddress(data) {
        var _this = _super.call(this) || this;
        _this.uri = data.uri;
        _this.node = data.node;
        return _this;
    }
    Object.defineProperty(PubliqStorageFileAddress, "PropertyMap", {
        get: function () {
            return {
                uri: 'uri',
                node: 'node',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqStorageFileAddress, "Rtt", {
        get: function () {
            return 49;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqStorageFileAddress;
}(BaseModel_1.default));
exports.default = PubliqStorageFileAddress;
