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
var Users_1 = require("./Users");
var Gate_1 = require("./Gate");
var PackingTags = /** @class */ (function () {
    function PackingTags() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], PackingTags.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], PackingTags.prototype, "parkingName", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], PackingTags.prototype, "vehicleReg", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], PackingTags.prototype, "expiry", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Gate_1.default; }, function (gate) { return gate.parkingAccess; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], PackingTags.prototype, "accessGates", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return Users_1.default; }, function (user) { return user.parkingTags; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", Users_1.default)
    ], PackingTags.prototype, "driver", void 0);
    PackingTags = __decorate([
        typeorm_1.Entity()
    ], PackingTags);
    return PackingTags;
}());
exports.default = PackingTags;
//# sourceMappingURL=PackingTags.js.map