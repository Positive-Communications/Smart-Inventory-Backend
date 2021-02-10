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
var Sections_1 = require("./Sections");
var Gate_1 = require("./Gate");
var Device_1 = require("./Device");
var Alerts = /** @class */ (function () {
    function Alerts() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Alerts.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Alerts.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Alerts.prototype, "type", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Alerts.prototype, "severity", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Sections_1.default; }, function (section) { return section.alerts; }),
        __metadata("design:type", Sections_1.default)
    ], Alerts.prototype, "sections", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Gate_1.default; }, function (gate) { return gate.alerts; }),
        __metadata("design:type", Gate_1.default)
    ], Alerts.prototype, "gate", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Device_1.default; }, function (device) { return device.alerts; }),
        __metadata("design:type", Device_1.default)
    ], Alerts.prototype, "device", void 0);
    Alerts = __decorate([
        typeorm_1.Entity()
    ], Alerts);
    return Alerts;
}());
exports.default = Alerts;
//# sourceMappingURL=Alerts.js.map