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
var Company = /** @class */ (function () {
    function Company() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Company.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Company.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Company.prototype, "headOffice", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Company.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Company.prototype, "streetRoad", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Company.prototype, "primaryNumber", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Company.prototype, "secondaryNumber", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Branch_1.default; }, function (branch) { return branch.company; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Company.prototype, "branches", void 0);
    Company = __decorate([
        typeorm_1.Entity()
    ], Company);
    return Company;
}());
exports.default = Company;
//# sourceMappingURL=Company.js.map