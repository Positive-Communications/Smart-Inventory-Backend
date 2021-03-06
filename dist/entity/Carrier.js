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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Users_1 = require("./Users");
var ManualEntry_1 = require("./ManualEntry");
var CarrierType_1 = require("./CarrierType");
var ReadCarrierTypeByID_1 = require("../helpers/R/ByID/ReadCarrierTypeByID");
var ReadUserByID_1 = require("../helpers/R/ByID/ReadUserByID");
var Tags_1 = require("./Tags");
var AssignRandomTag_1 = require("../helpers/U/Custom/AssignRandomTag");
var ScanProductHistory_1 = require("./ScanProductHistory");
var Move_1 = require("./Move");
var Carrier = /** @class */ (function () {
    function Carrier() {
    }
    Carrier.prototype.createItSelf = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.No = data.number;
                        _a = this;
                        return [4 /*yield*/, ReadCarrierTypeByID_1.default(data.type)];
                    case 1:
                        _a.type = _d.sent();
                        _b = this;
                        return [4 /*yield*/, ReadUserByID_1.default(data.user)];
                    case 2:
                        _b.user = _d.sent();
                        this.isFixedUse = data.isFixed;
                        this.status = "empty";
                        _c = this;
                        return [4 /*yield*/, AssignRandomTag_1.default()];
                    case 3:
                        _c.tag = _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Carrier.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Carrier.prototype, "No", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Carrier.prototype, "status", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Carrier.prototype, "isFixedUse", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return Users_1.default; }, function (user) { return user.carrier; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", Users_1.default)
    ], Carrier.prototype, "user", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return CarrierType_1.default; }, function (type) { return type.carriers; }),
        __metadata("design:type", CarrierType_1.default)
    ], Carrier.prototype, "type", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return ManualEntry_1.default; }, function (manualEntry) { return manualEntry.carrier; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Carrier.prototype, "manualEntry", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return ScanProductHistory_1.default; }, function (history) { return history.carrier; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Carrier.prototype, "palletHistory", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return Tags_1.default; }, function (tag) { return tag.carrier; }),
        __metadata("design:type", Tags_1.default)
    ], Carrier.prototype, "tag", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Move_1.default; }, function (move) { return move.carrier; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Carrier.prototype, "toMove", void 0);
    Carrier = __decorate([
        typeorm_1.Entity()
    ], Carrier);
    return Carrier;
}());
exports.default = Carrier;
var updateTag = function (tag) { return __awaiter(_this, void 0, void 0, function () {
    var tag_;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getConnection()
                    .createQueryBuilder()
                    .update(Tags_1.default)
                    .where('id =:id', { id: tag.id })
                    .set({
                    isCarrierTag: true,
                    isAssigned: true,
                })
                    .execute()];
            case 1:
                tag_ = _a.sent();
                console.log('carrier ', tag_);
                return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=Carrier.js.map