"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseModel_1 = require("../BaseModel");
var PubliqCoin = /** @class */ (function (_super) {
    __extends(PubliqCoin, _super);
    function PubliqCoin(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.whole = data.whole;
            _this.fraction = data.fraction;
        }
        return _this;
    }
    Object.defineProperty(PubliqCoin, "PropertyMap", {
        get: function () {
            return {
                whole: 'whole',
                fraction: 'fraction',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqCoin, "Rtt", {
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqCoin;
}(BaseModel_1.default));
exports.default = PubliqCoin;
