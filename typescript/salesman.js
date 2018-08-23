"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SalesMan = /** @class */ (function () {
    function SalesMan(id, salesManName, mobileNum) {
        this._id = id;
        this._salesManName = salesManName;
        this._mobileNumber = mobileNum;
    }
    SalesMan.prototype.toString = function () {
        return this._id + "," + this._salesManName + "," + this._mobileNumber;
    };
    return SalesMan;
}());
exports.SalesMan = SalesMan;
