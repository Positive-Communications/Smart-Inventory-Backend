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
var OrderDetails_1 = require("./OrderDetails");
var ProductUnit = /** @class */ (function () {
    function ProductUnit() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], ProductUnit.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], ProductUnit.prototype, "unit", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], ProductUnit.prototype, "numberOfProducts", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], ProductUnit.prototype, "isTrackedByRFID", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], ProductUnit.prototype, "useUnitAsDefault", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Product_1.default; }, function (product) { return product.unit; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Product_1.default)
    ], ProductUnit.prototype, "product", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return OrderDetails_1.default; }, function (orders) { return orders.unit; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", OrderDetails_1.default)
    ], ProductUnit.prototype, "orderDetails", void 0);
    ProductUnit = __decorate([
        typeorm_1.Entity()
    ], ProductUnit);
    return ProductUnit;
}());
exports.default = ProductUnit;
//# sourceMappingURL=ProductUnit.js.map