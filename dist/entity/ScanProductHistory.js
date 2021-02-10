"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Product_1 = require("./Product");
var Gate_1 = require("./Gate");
var Device_1 = require("./Device");
var ScanProductHistory = /** @class */ (function () {
    function ScanProductHistory() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], ScanProductHistory.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], ScanProductHistory.prototype, "timeStamp", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], ScanProductHistory.prototype, "isReadByHandHeld", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Gate_1.default; }, function (gate) { return gate.scanHistory; }),
        __metadata("design:type", Gate_1.default)
    ], ScanProductHistory.prototype, "gate", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Device_1.default; }, function (device) { return device.history; }),
        __metadata("design:type", Device_1.default)
    ], ScanProductHistory.prototype, "device", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Product_1.default; }, function (product) { return product.scanHistory; }),
        __metadata("design:type", Product_1.default)
    ], ScanProductHistory.prototype, "product", void 0);
    ScanProductHistory = __decorate([
        typeorm_1.Entity()
    ], ScanProductHistory);
    return ScanProductHistory;
}());
exports.default = ScanProductHistory;
//# sourceMappingURL=ScanProductHistory.js.map