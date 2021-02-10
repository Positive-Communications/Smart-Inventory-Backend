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
var Gate_1 = require("./Gate");
var TemporaryStaff = /** @class */ (function () {
    function TemporaryStaff() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], TemporaryStaff.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], TemporaryStaff.prototype, "userName", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], TemporaryStaff.prototype, "identificationType", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], TemporaryStaff.prototype, "identificationNumber", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], TemporaryStaff.prototype, "identificationPhoto", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], TemporaryStaff.prototype, "userPhoto", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], TemporaryStaff.prototype, "workDescription", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], TemporaryStaff.prototype, "isCarrier", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], TemporaryStaff.prototype, "phone", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], TemporaryStaff.prototype, "mobile", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], TemporaryStaff.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], TemporaryStaff.prototype, "expiry", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Gate_1.default; }, function (gate) { return gate.temporaryEntryPoint; }),
        __metadata("design:type", Gate_1.default)
    ], TemporaryStaff.prototype, "entryGate", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Gate_1.default; }, function (gate) { return gate.temporaryExit; }),
        __metadata("design:type", Gate_1.default)
    ], TemporaryStaff.prototype, "exitGate", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], TemporaryStaff.prototype, "lunchBreak", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], TemporaryStaff.prototype, "lunchBreakStarts", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], TemporaryStaff.prototype, "workHours", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], TemporaryStaff.prototype, "reportingTimeMorning", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], TemporaryStaff.prototype, "reportingTimeAfternoon", void 0);
    TemporaryStaff = __decorate([
        typeorm_1.Entity()
    ], TemporaryStaff);
    return TemporaryStaff;
}());
exports.default = TemporaryStaff;
//# sourceMappingURL=TemporaryStaff.js.map