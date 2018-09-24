"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dateToFormatString = function (d) {
    var addZero = function (d) {
        return d.length == 2 ? d : "0" + d;
    };
    var year = d.getFullYear().toString();
    var month = (d.getMonth() + 1).toString();
    var day = d.getDate().toString();
    var hours = d.getHours().toString();
    var minutes = d.getMinutes().toString();
    var seconds = d.getSeconds().toString();
    return year + "-" + addZero(month) + "-" + addZero(day) + " " + addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds);
};
var BaseModel = /** @class */ (function () {
    function BaseModel() {
    }
    Object.defineProperty(BaseModel, "PropertyMap", {
        get: function () {
            return {};
        },
        enumerable: true,
        configurable: true
    });
    BaseModel.setProperty = function (propertyName, propertyValue, toObject, constructor) {
        var PropertyMap = constructor.PropertyMap || BaseModel.PropertyMap;
        var pn = PropertyMap[propertyName] || propertyName;
        toObject[pn] = propertyValue;
    };
    BaseModel.hasRtt = function (type) {
        if (type.Rtt) {
            return true;
        }
        return false;
    };
    BaseModel.getRtt = function (type) {
        return type.Rtt;
    };
    BaseModel.getDataWithRtt = function (data) {
        var dataWithRtt = {};
        if (BaseModel.hasRtt(data.constructor)) {
            dataWithRtt['rtt'] = BaseModel.getRtt(data.constructor);
        }
        for (var i in data) {
            var pv = data[i];
            var constructor = pv.constructor;
            var propertySetValue = void 0;
            if (constructor === Function) {
                continue;
            }
            else if (constructor === Array) {
                propertySetValue = pv.map(function (d) { return BaseModel.getDataWithRtt(d); });
            }
            else if (BaseModel.hasRtt(constructor)) {
                propertySetValue = BaseModel.getDataWithRtt(pv);
            }
            else if (constructor === Date) {
                propertySetValue = dateToFormatString(pv);
            }
            else {
                propertySetValue = pv;
            }
            BaseModel.setProperty(i, propertySetValue, dataWithRtt, data.constructor);
        }
        return dataWithRtt;
    };
    BaseModel.prototype.toJson = function () {
        return BaseModel.getDataWithRtt(this);
    };
    return BaseModel;
}());
exports.default = BaseModel;