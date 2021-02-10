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
var Product_1 = require("./Product");
var Presets = /** @class */ (function () {
    function Presets() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Presets.prototype, "id", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return Sections_1.default; }, function (section) { return section.presets; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", Sections_1.default)
    ], Presets.prototype, "section", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Presets.prototype, "presetName", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return Product_1.default; }, function (product) { return product.preset; }),
        __metadata("design:type", Product_1.default)
    ], Presets.prototype, "product", void 0);
    Presets = __decorate([
        typeorm_1.Entity()
    ], Presets);
    return Presets;
}());
exports.default = Presets;
//# sourceMappingURL=Presets.js.map