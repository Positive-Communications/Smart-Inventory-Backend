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
var Branch_1 = require("./Branch");
var OrderQue = /** @class */ (function () {
    function OrderQue() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], OrderQue.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], OrderQue.prototype, "vehicleCanEnterPremisesWhenRemaining", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], OrderQue.prototype, "vehicleWillBePreparedAndRemainOnStandBy", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return Branch_1.default; }, function (branch) { return branch.orderQue; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", Branch_1.default)
    ], OrderQue.prototype, "branch", void 0);
    OrderQue = __decorate([
        typeorm_1.Entity()
    ], OrderQue);
    return OrderQue;
}());
exports.default = OrderQue;
//# sourceMappingURL=OrderQue.js.map