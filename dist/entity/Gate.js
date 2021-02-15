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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Sections_1 = require("./Sections");
var TemporaryStaff_1 = require("./TemporaryStaff");
var VisitorAccessTags_1 = require("./VisitorAccessTags");
var Product_1 = require("./Product");
var ScanProductHistory_1 = require("./ScanProductHistory");
var Alerts_1 = require("./Alerts");
var Branch_1 = require("./Branch");
var Bays_1 = require("./Bays");
var PackingTags_1 = require("./PackingTags");
var ReadBranchByID_1 = require("../helpers/R/ByID/ReadBranchByID");
var Gate = /** @class */ (function () {
    function Gate() {
    }
    Gate.prototype.createItself = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.name = data.name;
                        this.readerAddress = data.readerAddress;
                        this.numberOfAnts = data.numberOfAnts;
                        this.antToDetectOutgoing = data.antToDetectOutgoing;
                        this.antToDetectIncoming = data.antToDetectIncoming;
                        this.ant1 = data.ant1;
                        this.ant2 = data.ant2;
                        this.ant3 = data.ant3;
                        this.ant4 = data.ant4;
                        this.ant1Power = data.ant1Power;
                        this.ant2Power = data.ant2Power;
                        this.ant3Power = data.ant3Power;
                        this.ant4Power = data.ant4Power;
                        this.role = data.role;
                        _a = this;
                        return [4 /*yield*/, ReadBranchByID_1.default(data.branchID)];
                    case 1:
                        _a.branch = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Gate.prototype.isLegit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, true];
            });
        });
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Gate.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Gate.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Gate.prototype, "readerAddress", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Gate.prototype, "numberOfAnts", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Gate.prototype, "antToDetectOutgoing", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Gate.prototype, "antToDetectIncoming", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Gate.prototype, "ant1", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Gate.prototype, "ant2", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Gate.prototype, "ant3", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Gate.prototype, "ant4", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Gate.prototype, "ant1Power", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Gate.prototype, "ant2Power", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Gate.prototype, "ant3Power", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Gate.prototype, "ant4Power", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Gate.prototype, "role", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", Boolean)
    ], Gate.prototype, "hasErrors", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", Boolean)
    ], Gate.prototype, "isaActive", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", Boolean)
    ], Gate.prototype, "allowManual", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", Boolean)
    ], Gate.prototype, "allowEmpty", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", Boolean)
    ], Gate.prototype, "verifyByHandheld", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", Boolean)
    ], Gate.prototype, "verifyNotTrackedByRFID", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", Boolean)
    ], Gate.prototype, "checkContinuouslyForUnauthorized", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", Boolean)
    ], Gate.prototype, "doNotAllowRemoved", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", Boolean)
    ], Gate.prototype, "useForDispatchOrReceiving", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", Boolean)
    ], Gate.prototype, "allowDispatchForAllOrders", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", Boolean)
    ], Gate.prototype, "showProductCountError", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", Boolean)
    ], Gate.prototype, "allowEmptyPallets", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true
        }),
        __metadata("design:type", Boolean)
    ], Gate.prototype, "getToDetermineItemPosition", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", Boolean)
    ], Gate.prototype, "verifyCarrierIsEmpty", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return PackingTags_1.default; }, function (parking) { return parking.accessGates; }),
        __metadata("design:type", PackingTags_1.default)
    ], Gate.prototype, "parkingAccess", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Branch_1.default; }, function (branch) { return branch.gates; }),
        __metadata("design:type", Branch_1.default)
    ], Gate.prototype, "branch", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return VisitorAccessTags_1.default; }, function (visitor) { return visitor.entryGate; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Gate.prototype, "visitorEntries", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return TemporaryStaff_1.default; }, function (staff) { return staff.entryGate; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Gate.prototype, "temporaryEntryPoint", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return TemporaryStaff_1.default; }, function (staff) { return staff.exitGate; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Gate.prototype, "temporaryExit", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return VisitorAccessTags_1.default; }, function (visitor) { return visitor.accessGates; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Gate.prototype, "visitorAccess", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return VisitorAccessTags_1.default; }, function (visitor) { return visitor.exitGate; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Gate.prototype, "visitorExit", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Product_1.default; }, function (product) { return product.dispatchGate; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Gate.prototype, "dispatchedProducts", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return ScanProductHistory_1.default; }, function (history) { return history.gate; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Gate.prototype, "scanHistory", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Alerts_1.default; }, function (alerts) { return alerts.gate; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Gate.prototype, "alerts", void 0);
    __decorate([
        typeorm_1.ManyToMany(function () { return Sections_1.default; }, function (section) { return section.gates; }),
        __metadata("design:type", Array)
    ], Gate.prototype, "sections", void 0);
    __decorate([
        typeorm_1.ManyToMany(function (type) { return Bays_1.default; }, function (bays) { return bays.gates; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Gate.prototype, "bays", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return VisitorAccessTags_1.default; }, function (visitor) { return visitor.accessGates; }),
        __metadata("design:type", Array)
    ], Gate.prototype, "visitors", void 0);
    Gate = __decorate([
        typeorm_1.Entity()
    ], Gate);
    return Gate;
}());
exports.default = Gate;
//# sourceMappingURL=Gate.js.map