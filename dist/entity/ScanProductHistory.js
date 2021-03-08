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
var ReadCarrierByID_1 = require("../helpers/R/ByID/ReadCarrierByID");
var ReadGateByID_1 = require("../helpers/R/ByID/ReadGateByID");
var tagByEpc_1 = require("../helpers/R/Custom/tagByEpc");
var UpdateTagByID_1 = require("../helpers/U/ByID/UpdateTagByID");
var Alerts_1 = require("./Alerts");
var Carrier_1 = require("./Carrier");
var Gate_1 = require("./Gate");
var Pallet_1 = require("./Pallet");
var Tags_1 = require("./Tags");
var ScanProductHistory = /** @class */ (function () {
    function ScanProductHistory() {
    }
    ScanProductHistory.prototype.createItself = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.timeStamp = new Date().getTime().toString();
                        _a = this;
                        return [4 /*yield*/, ReadGateByID_1.default(data.gateID)];
                    case 1:
                        _a.gate = _d.sent();
                        _b = this;
                        return [4 /*yield*/, tagByEpc_1.default(data.tagEpc)];
                    case 2:
                        _b.tag = _d.sent();
                        _c = this;
                        return [4 /*yield*/, ReadCarrierByID_1.default(data.carrier)];
                    case 3:
                        _c.carrier = _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ScanProductHistory.prototype.updated = function () {
        if (this.gate.isForPackaging && this.tag.status === 'empty') {
            UpdateTagByID_1.default({ status: "packed", tagID: this.tag.id });
        }
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], ScanProductHistory.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], ScanProductHistory.prototype, "timeStamp", void 0);
    __decorate([
        typeorm_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], ScanProductHistory.prototype, "isReadByHandHeld", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Gate_1.default; }, function (gate) { return gate.scanHistory; }),
        __metadata("design:type", Gate_1.default)
    ], ScanProductHistory.prototype, "gate", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Pallet_1.default; }, function (pallet) { return pallet.history; }),
        __metadata("design:type", Pallet_1.default)
    ], ScanProductHistory.prototype, "pallet", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Carrier_1.default; }, function (carrier) { return carrier.palletHistory; }),
        __metadata("design:type", Carrier_1.default)
    ], ScanProductHistory.prototype, "carrier", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Tags_1.default; }, function (tags) { return tags.history; }),
        __metadata("design:type", Tags_1.default)
    ], ScanProductHistory.prototype, "tag", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Alerts_1.default; }, function (alerts) { return alerts.history; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], ScanProductHistory.prototype, "alerts", void 0);
    __decorate([
        typeorm_1.AfterInsert(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ScanProductHistory.prototype, "updated", null);
    ScanProductHistory = __decorate([
        typeorm_1.Entity()
    ], ScanProductHistory);
    return ScanProductHistory;
}());
exports.default = ScanProductHistory;
//# sourceMappingURL=ScanProductHistory.js.map