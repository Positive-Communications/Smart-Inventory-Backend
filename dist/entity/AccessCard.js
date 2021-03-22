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
var Visitor = /** @class */ (function () {
    function Visitor() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Visitor.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Visitor.prototype, "tagType", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Visitor.prototype, "userName", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Visitor.prototype, "isActive", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Visitor.prototype, "identificationType", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Visitor.prototype, "identificationNumber", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Visitor.prototype, "uploadIdentification", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Visitor.prototype, "userImage", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Visitor.prototype, "workDesc", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Branch_1.default; }, function (branch) { return branch.staffAccessCards; }),
        __metadata("design:type", Branch_1.default)
    ], Visitor.prototype, "branch", void 0);
    Visitor = __decorate([
        typeorm_1.Entity()
    ], Visitor);
    return Visitor;
}());
exports.default = Visitor;
//# sourceMappingURL=AccessCard.js.map