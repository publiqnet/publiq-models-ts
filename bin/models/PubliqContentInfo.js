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
var PubliqInfoType_1 = require("./PubliqInfoType");
var PubliqContentInfo = /** @class */ (function (_super) {
    __extends(PubliqContentInfo, _super);
    function PubliqContentInfo(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.status = PubliqInfoType_1.default.toNumber(data.status);
            _this.contentId = data.content_id === undefined ? data.contentId : data.content_id;
            _this.channelAddress = data.channel_address === undefined ? data.channelAddress : data.channel_address;
            _this.storageAddress = data.storage_address === undefined ? data.storageAddress : data.storage_address;
        }
        return _this;
    }
    Object.defineProperty(PubliqContentInfo, "PropertyMap", {
        get: function () {
            return {
                status: 'status',
                contentId: 'content_id',
                channelAddress: 'channel_address',
                storageAddress: 'storage_address',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqContentInfo, "Rtt", {
        get: function () {
            return 17;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqContentInfo;
}(BaseModel_1.default));
exports.default = PubliqContentInfo;
