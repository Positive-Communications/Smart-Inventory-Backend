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
var Pallet = /** @class */ (function () {
    function Pallet() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Pallet.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Pallet.prototype, "count", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Pallet.prototype, "type", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Product_1.default; }, function (product) { return product.pallet; }),
        __metadata("design:type", Product_1.default)
    ], Pallet.prototype, "product", void 0);
    Pallet = __decorate([
        typeorm_1.Entity()
    ], Pallet);
    return Pallet;
}());
exports.default = Pallet;
//# sourceMappingURL=Pallet.js.map