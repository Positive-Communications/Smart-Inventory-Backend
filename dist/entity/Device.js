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
var Alerts_1 = require("./Alerts");
var Bays_1 = require("./Bays");
var Branch_1 = require("./Branch");
var Device = /** @class */ (function () {
    function Device() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Device.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Device.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({
            default: "empty"
        }),
        __metadata("design:type", String)
    ], Device.prototype, "role", void 0);
    __decorate([
        typeorm_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], Device.prototype, "allowPalletsToBeCountedManually", void 0);
    __decorate([
        typeorm_1.Column({
            default: true
        }),
        __metadata("design:type", Boolean)
    ], Device.prototype, "isActive", void 0);
    __decorate([
        typeorm_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], Device.prototype, "hasErrors", void 0);
    __decorate([
        typeorm_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], Device.prototype, "doNotAllowRemovalOfEmptyPallet", void 0);
    __decorate([
        typeorm_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], Device.prototype, "verifyStoredUsingHandHeld", void 0);
    __decorate([
        typeorm_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], Device.prototype, "showProductCountError", void 0);
    __decorate([
        typeorm_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], Device.prototype, "doNotAllowRemoval", void 0);
    __decorate([
        typeorm_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], Device.prototype, "verifyProductNotTrackedByRFID", void 0);
    __decorate([
        typeorm_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], Device.prototype, "automaticallyActivateRecallProductIfRequired", void 0);
    __decorate([
        typeorm_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], Device.prototype, "recordEmptyPallets", void 0);
    __decorate([
        typeorm_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], Device.prototype, "dispatchingOrReceiving", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Sections_1.default; }, function (section) { return section.devices; }),
        __metadata("design:type", Sections_1.default)
    ], Device.prototype, "sections", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Bays_1.default; }, function (bays) { return bays.devices; }),
        __metadata("design:type", Bays_1.default)
    ], Device.prototype, "bays", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Alerts_1.default; }, function (alert) { return alert.device; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Device.prototype, "alerts", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Branch_1.default; }, function (branch) { return branch.devices; }),
        __metadata("design:type", Branch_1.default)
    ], Device.prototype, "branch", void 0);
    Device = __decorate([
        typeorm_1.Entity()
    ], Device);
    return Device;
}());
exports.default = Device;
//# sourceMappingURL=Device.js.map