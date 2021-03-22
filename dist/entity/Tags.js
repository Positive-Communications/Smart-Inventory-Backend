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
var ReadCompanyByID_1 = require("../helpers/R/ByID/ReadCompanyByID");
var Alerts_1 = require("./Alerts");
var Carrier_1 = require("./Carrier");
var Company_1 = require("./Company");
var Gate_1 = require("./Gate");
var Move_1 = require("./Move");
var Pallet_1 = require("./Pallet");
var Product_1 = require("./Product");
var ScanProductHistory_1 = require("./ScanProductHistory");
var Tags = /** @class */ (function () {
    function Tags() {
    }
    Tags.prototype.createItself = function (epc, id) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.epc = epc;
                        _a = this;
                        return [4 /*yield*/, ReadCompanyByID_1.default(id)];
                    case 1:
                        _a.company = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tags.prototype.update = function () {
        console.log('====================================');
        console.log("i updated");
        console.log('====================================');
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Tags.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            unique: true
        }),
        __metadata("design:type", String)
    ], Tags.prototype, "epc", void 0);
    __decorate([
        typeorm_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], Tags.prototype, "hasErrors", void 0);
    __decorate([
        typeorm_1.Column({
            default: "empty"
        }),
        __metadata("design:type", String)
    ], Tags.prototype, "status", void 0);
    __decorate([
        typeorm_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], Tags.prototype, "isAssigned", void 0);
    __decorate([
        typeorm_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], Tags.prototype, "isProductTag", void 0);
    __decorate([
        typeorm_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], Tags.prototype, "isPalletTag", void 0);
    __decorate([
        typeorm_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], Tags.prototype, "isCarrierTag", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Alerts_1.default; }, function (alerts) { return alerts.tag; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Tags.prototype, "alerts", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return ScanProductHistory_1.default; }, function (history) { return history.tag; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Tags.prototype, "history", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Product_1.default; }, function (product) { return product.tags; }),
        __metadata("design:type", Product_1.default)
    ], Tags.prototype, "product", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return Pallet_1.default; }, function (pallet) { return pallet.tag; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", Pallet_1.default)
    ], Tags.prototype, "pallet", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return Carrier_1.default; }, function (carrier) { return carrier.tag; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", Carrier_1.default)
    ], Tags.prototype, "carrier", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Company_1.default; }, function (company) { return company.tags; }),
        __metadata("design:type", Company_1.default)
    ], Tags.prototype, "company", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Move_1.default; }, function (move) { return move.tags; }),
        __metadata("design:type", Move_1.default)
    ], Tags.prototype, "moves", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Gate_1.default; }, function (gate) { return gate.scans; }),
        __metadata("design:type", Gate_1.default)
    ], Tags.prototype, "scan", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Gate_1.default; }, function (previousScan) { return previousScan.previousScans; }),
        __metadata("design:type", Gate_1.default)
    ], Tags.prototype, "previousScan", void 0);
    __decorate([
        typeorm_1.AfterUpdate(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Tags.prototype, "update", null);
    Tags = __decorate([
        typeorm_1.Entity()
    ], Tags);
    return Tags;
}());
exports.default = Tags;
//# sourceMappingURL=Tags.js.map