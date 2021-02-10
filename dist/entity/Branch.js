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
var Company_1 = require("./Company");
var Gate_1 = require("./Gate");
var DispatchTimes_1 = require("./DispatchTimes");
var Store_1 = require("./Store");
var Users_1 = require("./Users");
var CarrierType_1 = require("./CarrierType");
var OrderQue_1 = require("./OrderQue");
var Device_1 = require("./Device");
var VisitorAccessTags_1 = require("./VisitorAccessTags");
var AccessCard_1 = require("./AccessCard");
var Orders_1 = require("./Orders");
var Branch = /** @class */ (function () {
    function Branch() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Branch.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Branch.prototype, "code", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Branch.prototype, "info", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Branch.prototype, "city", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Branch.prototype, "phone", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Branch.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Branch.prototype, "streetRoad", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Branch.prototype, "isActive", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return OrderQue_1.default; }, function (orderQue) { return orderQue.branch; }),
        __metadata("design:type", OrderQue_1.default)
    ], Branch.prototype, "orderQue", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Gate_1.default; }, function (gate) { return gate.branch; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Branch.prototype, "gates", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Company_1.default; }, function (company) { return company.branches; }),
        __metadata("design:type", Company_1.default)
    ], Branch.prototype, "company", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return VisitorAccessTags_1.default; }, function (visitor) { return visitor.branch; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Branch.prototype, "visitors", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Sections_1.default; }, function (section) { return section.branch; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Branch.prototype, "sections", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Store_1.default; }, function (store) { return store.branch; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Branch.prototype, "stores", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return DispatchTimes_1.default; }, function (dispatch) { return dispatch.branch; }),
        __metadata("design:type", DispatchTimes_1.default)
    ], Branch.prototype, "dispatchTimes", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Users_1.default; }, function (users) { return users.branch; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Branch.prototype, "users", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return CarrierType_1.default; }, function (type) { return type.branch; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Branch.prototype, "carrierTypes", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Device_1.default; }, function (device) { return device.branch; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Branch.prototype, "devices", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return AccessCard_1.default; }, function (cards) { return cards.branch; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Branch.prototype, "staffAccessCards", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Orders_1.default; }, function (orders) { return orders.issuedBy; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Branch.prototype, "issueOrders", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Orders_1.default; }, function (order) { return order.collectedFrom; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Branch.prototype, "ordersToCollect", void 0);
    Branch = __decorate([
        typeorm_1.Entity()
    ], Branch);
    return Branch;
}());
exports.default = Branch;
//# sourceMappingURL=Branch.js.map