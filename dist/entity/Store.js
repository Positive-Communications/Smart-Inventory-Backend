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
var Bays_1 = require("./Bays");
var Branch_1 = require("./Branch");
var Product_1 = require("./Product");
var Store = /** @class */ (function () {
    function Store() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Store.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Branch_1.default; }, function (branch) { return branch.stores; }),
        __metadata("design:type", Branch_1.default)
    ], Store.prototype, "branch", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Bays_1.default; }, function (bay) { return bay.store; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Store.prototype, "bays", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Store.prototype, "number", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true
        }),
        __metadata("design:type", String)
    ], Store.prototype, "map", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true
        }),
        __metadata("design:type", String)
    ], Store.prototype, "storageType", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true
        }),
        __metadata("design:type", Boolean)
    ], Store.prototype, "isActive", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true
        }),
        __metadata("design:type", Boolean)
    ], Store.prototype, "hasErrors", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Product_1.default; }, function (product) { return product.storedIn; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Store.prototype, "product", void 0);
    Store = __decorate([
        typeorm_1.Entity()
    ], Store);
    return Store;
}());
exports.default = Store;
//# sourceMappingURL=Store.js.map