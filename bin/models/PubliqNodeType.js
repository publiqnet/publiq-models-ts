"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PubliqNodeType = /** @class */ (function () {
    function PubliqNodeType() {
    }
    PubliqNodeType.toString = function (param) {
        switch (param) {
            case 0: return "blockchain";
            case 1: return "channel";
            case 2: return "storage";
        }
    };
    PubliqNodeType.toNumber = function (param) {
        switch (param) {
            case "blockchain": return 0;
            case "channel": return 1;
            case "storage": return 2;
        }
    };
    PubliqNodeType.blockchain = 0;
    PubliqNodeType.channel = 1;
    PubliqNodeType.storage = 2;
    return PubliqNodeType;
}());
exports.default = PubliqNodeType;