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
var Alerts_1 = require("./Alerts");
var Gate_1 = require("./Gate");
var Device_1 = require("./Device");
var Product_1 = require("./Product");
var Presets_1 = require("./Presets");
var Branch_1 = require("./Branch");
var Sections = /** @class */ (function () {
    function Sections() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Sections.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Sections.prototype, "role", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Sections.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Sections.prototype, "capacity", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Sections.prototype, "hasErrors", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Branch_1.default; }, function (branch) { return branch.sections; }),
        __metadata("design:type", Branch_1.default)
    ], Sections.prototype, "branch", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return Presets_1.default; }, function (preset) { return preset.section; }),
        __metadata("design:type", Presets_1.default)
    ], Sections.prototype, "presets", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Product_1.default; }, function (product) { return product.currentSection; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Sections.prototype, "currentProducts", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Alerts_1.default; }, function (alerts) { return alerts.sections; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Sections.prototype, "alerts", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Gate_1.default; }, function (gate) { return gate.sections; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Sections.prototype, "gates", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Device_1.default; }, function (device) { return device.sections; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Sections.prototype, "devices", void 0);
    Sections = __decorate([
        typeorm_1.Entity()
    ], Sections);
    return Sections;
}());
exports.default = Sections;
//# sourceMappingURL=Sections.js.map