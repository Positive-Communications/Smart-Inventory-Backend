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
var Store_1 = require("./Store");
var Product_1 = require("./Product");
var Gate_1 = require("./Gate");
var Device_1 = require("./Device");
var Bays = /** @class */ (function () {
    function Bays() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Bays.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Bays.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Bays.prototype, "role", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true
        }),
        __metadata("design:type", Boolean)
    ], Bays.prototype, "hasErrors", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true
        }),
        __metadata("design:type", Boolean)
    ], Bays.prototype, "isActive", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Bays.prototype, "storageType", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Product_1.default; }, function (product) { return product.bay; }),
        __metadata("design:type", Product_1.default)
    ], Bays.prototype, "product", void 0);
    __decorate([
        typeorm_1.ManyToMany(function (type) { return Gate_1.default; }, function (gate) { return gate.bays; }),
        __metadata("design:type", Array)
    ], Bays.prototype, "gates", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Store_1.default; }, function (store) { return store.bays; }),
        __metadata("design:type", Store_1.default)
    ], Bays.prototype, "store", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Device_1.default; }, function (device) { return device.bays; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Bays.prototype, "devices", void 0);
    Bays = __decorate([
        typeorm_1.Entity()
    ], Bays);
    return Bays;
}());
exports.default = Bays;
//# sourceMappingURL=Bays.js.map