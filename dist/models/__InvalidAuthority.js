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
var __InvalidAuthority = /** @class */ (function (_super) {
    __extends(__InvalidAuthority, _super);
    function __InvalidAuthority(data) {
        var _this = _super.call(this) || this;
        _this.authorityProvided = data.authority_provided;
        _this.authorityRequired = data.authority_required;
        return _this;
    }
    Object.defineProperty(__InvalidAuthority, "PropertyMap", {
        get: function () {
            return {
                authorityProvided: 'authority_provided',
                authorityRequired: 'authority_required',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(__InvalidAuthority, "Rtt", {
        get: function () {
            return 14;
        },
        enumerable: true,
        configurable: true
    });
    return __InvalidAuthority;
}(BaseModel_1.default));
exports.default = __InvalidAuthority;
