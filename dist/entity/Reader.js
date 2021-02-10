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
var Reader = /** @class */ (function () {
    function Reader() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Reader.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Reader.prototype, "address", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Reader.prototype, "numberOfAnts", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Reader.prototype, "outGoingAnt", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Reader.prototype, "incomingAnt", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Reader.prototype, "ant1Power", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Reader.prototype, "ant2Power", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Reader.prototype, "ant3Power", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Reader.prototype, "ant4Power", void 0);
    Reader = __decorate([
        typeorm_1.Entity()
    ], Reader);
    return Reader;
}());
exports.default = Reader;
//# sourceMappingURL=Reader.js.map