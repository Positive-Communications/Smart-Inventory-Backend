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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var ProductUnit_1 = require("./ProductUnit");
var Pallet_1 = require("./Pallet");
var Gate_1 = require("./Gate");
var Sections_1 = require("./Sections");
var ManualEntry_1 = require("./ManualEntry");
var Store_1 = require("./Store");
var Bays_1 = require("./Bays");
var OrderDetails_1 = require("./OrderDetails");
var SaveMultipleProductUnits_1 = require("../helpers/C/Multiple/SaveMultipleProductUnits");
var SaveMultiplePallets_1 = require("../helpers/C/Multiple/SaveMultiplePallets");
var AssignGateToProduct_1 = require("../helpers/C/Multiple/AssignGateToProduct");
var PresetMeta_1 = require("./PresetMeta");
var Tags_1 = require("./Tags");
var Alerts_1 = require("./Alerts");
var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.createItself = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.name = data.name;
                        this.description = data.description;
                        this.status = data.status;
                        this.expiry = data.expiry;
                        this.monthsLeftToExpire = data.monthsLeftToExpire;
                        this.hasErrors = data.hasErrors;
                        _a = this;
                        return [4 /*yield*/, SaveMultipleProductUnits_1.default(data.units)];
                    case 1:
                        _a.units = _d.sent();
                        _b = this;
                        return [4 /*yield*/, AssignGateToProduct_1.default(data.gates)];
                    case 2:
                        _b.dispatchGate = _d.sent();
                        this.isStoredOnPallet = data.isStoredOnPallet;
                        this.palletIsTrackedByRFID = data.palletIsTrackedByRFID;
                        _c = this;
                        return [4 /*yield*/, SaveMultiplePallets_1.default(data.pallets)];
                    case 3:
                        _c.pallet = (_d.sent()) || [];
                        return [2 /*return*/];
                }
            });
        });
    };
    Product.prototype.isLegit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, true];
            });
        });
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Product.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true
        }),
        __metadata("design:type", String)
    ], Product.prototype, "status", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "expiry", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "monthsLeftToExpire", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Product.prototype, "hasErrors", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true
        }),
        __metadata("design:type", Boolean)
    ], Product.prototype, "isStoredOnPallet", void 0);
    __decorate([
        typeorm_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], Product.prototype, "palletIsTrackedByRFID", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Alerts_1.default; }, function (alert) { return alert.product; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Product.prototype, "alerts", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return ProductUnit_1.default; }, function (unit) { return unit.product; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Product.prototype, "units", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Gate_1.default; }, function (gate) { return gate.dispatchedProducts; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Product.prototype, "dispatchGate", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Tags_1.default; }, function (tag) { return tag.product; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Product.prototype, "tags", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return PresetMeta_1.default; }, function (meta) { return meta.product; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", PresetMeta_1.default)
    ], Product.prototype, "meta", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Pallet_1.default; }, function (pallet) { return pallet.product; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Product.prototype, "pallet", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Sections_1.default; }, function (section) { return section.currentProducts; }),
        __metadata("design:type", Sections_1.default)
    ], Product.prototype, "currentSection", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Bays_1.default; }, function (bay) { return bay.product; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Product.prototype, "bay", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Store_1.default; }, function (store) { return store.product; }),
        __metadata("design:type", Store_1.default)
    ], Product.prototype, "storedIn", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return ManualEntry_1.default; }, function (manualEntry) { return manualEntry.product; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Product.prototype, "manualEntries", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return OrderDetails_1.default; }, function (details) { return details.product; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Product.prototype, "orderDetails", void 0);
    Product = __decorate([
        typeorm_1.Entity()
    ], Product);
    return Product;
}());
exports.default = Product;
//# sourceMappingURL=Product.js.map