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
var PubliqRewardLog_1 = require("./PubliqRewardLog");
var PubliqTransactionLog_1 = require("./PubliqTransactionLog");
var PubliqContentUnitImpactLog_1 = require("./PubliqContentUnitImpactLog");
var PubliqSponsorContentUnitApplied_1 = require("./PubliqSponsorContentUnitApplied");
var PubliqBlockLog = /** @class */ (function (_super) {
    __extends(PubliqBlockLog, _super);
    function PubliqBlockLog(data) {
        var _this = _super.call(this) || this;
        if (data !== undefined) {
            _this.authority = data.authority;
            _this.blockHash = data.block_hash === undefined ? data.blockHash : data.block_hash;
            _this.blockNumber = data.block_number === undefined ? data.blockNumber : data.block_number;
            _this.blockSize = data.block_size === undefined ? data.blockSize : data.block_size;
            _this.timeSigned = new Date(data.time_signed === undefined ? data.timeSigned : data.time_signed);
            _this.rewards = data.rewards.map(function (d) { return new PubliqRewardLog_1.default(d); });
            _this.transactions = data.transactions.map(function (d) { return new PubliqTransactionLog_1.default(d); });
            _this.unitUriImpacts = data.unit_uri_impacts === undefined ? data.unitUriImpacts.map(function (d) { return new PubliqContentUnitImpactLog_1.default(d); }) : data.unit_uri_impacts.map(function (d) { return new PubliqContentUnitImpactLog_1.default(d); });
            _this.appliedSponsorItems = data.applied_sponsor_items === undefined ? data.appliedSponsorItems.map(function (d) { return new PubliqSponsorContentUnitApplied_1.default(d); }) : data.applied_sponsor_items.map(function (d) { return new PubliqSponsorContentUnitApplied_1.default(d); });
        }
        return _this;
    }
    Object.defineProperty(PubliqBlockLog, "PropertyMap", {
        get: function () {
            return {
                authority: 'authority',
                blockHash: 'block_hash',
                blockNumber: 'block_number',
                blockSize: 'block_size',
                timeSigned: 'time_signed',
                rewards: 'rewards',
                transactions: 'transactions',
                unitUriImpacts: 'unit_uri_impacts',
                appliedSponsorItems: 'applied_sponsor_items',
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PubliqBlockLog, "Rtt", {
        get: function () {
            return 11;
        },
        enumerable: true,
        configurable: true
    });
    return PubliqBlockLog;
}(BaseModel_1.default));
exports.default = PubliqBlockLog;
