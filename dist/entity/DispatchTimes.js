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
var DispatchTimes = /** @class */ (function () {
    function DispatchTimes() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], DispatchTimes.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], DispatchTimes.prototype, "monday", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], DispatchTimes.prototype, "tuesday", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], DispatchTimes.prototype, "wednesday", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], DispatchTimes.prototype, "thursday", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], DispatchTimes.prototype, "friday", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], DispatchTimes.prototype, "saturday", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], DispatchTimes.prototype, "sunday", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], DispatchTimes.prototype, "startTime", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], DispatchTimes.prototype, "endTime", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], DispatchTimes.prototype, "saturdayStart", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], DispatchTimes.prototype, "saturdayEnd", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], DispatchTimes.prototype, "sundayStart", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], DispatchTimes.prototype, "sundayEnd", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return Branch_1.default; }, function (branch) { return branch.dispatchTimes; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", Branch_1.default)
    ], DispatchTimes.prototype, "branch", void 0);
    DispatchTimes = __decorate([
        typeorm_1.Entity()
    ], DispatchTimes);
    return DispatchTimes;
}());
exports.default = DispatchTimes;
//# sourceMappingURL=DispatchTimes.js.map