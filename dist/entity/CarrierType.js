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
var Carrier_1 = require("./Carrier");
var Branch_1 = require("./Branch");
var CarrierType = /** @class */ (function () {
    function CarrierType() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], CarrierType.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], CarrierType.prototype, "name", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Carrier_1.default; }, function (carrier) { return carrier.type; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], CarrierType.prototype, "carriers", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Branch_1.default; }, function (branch) { return branch.carrierTypes; }),
        __metadata("design:type", Branch_1.default)
    ], CarrierType.prototype, "branch", void 0);
    CarrierType = __decorate([
        typeorm_1.Entity()
    ], CarrierType);
    return CarrierType;
}());
exports.default = CarrierType;
//# sourceMappingURL=CarrierType.js.map