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
var Sections_1 = require("./Sections");
var Product_1 = require("./Product");
var Gate_1 = require("./Gate");
var Device_1 = require("./Device");
var Store_1 = require("./Store");
var ScanProductHistory_1 = require("./ScanProductHistory");
var Tags_1 = require("./Tags");
var tagByEpc_1 = require("../helpers/R/Custom/tagByEpc");
var Move_1 = require("./Move");
var Alerts = /** @class */ (function () {
    function Alerts() {
    }
    Alerts.prototype.createItself = function (data, tag) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.severity = data.severity;
                        this.reason = data.reason;
                        this.type = data.type;
                        _a = this;
                        return [4 /*yield*/, tagByEpc_1.default(tag)];
                    case 1:
                        _a.tag = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Alerts.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            default: 'Tag Count/Error'
        }),
        __metadata("design:type", String)
    ], Alerts.prototype, "reason", void 0);
    __decorate([
        typeorm_1.Column({
            default: 'error'
        }),
        __metadata("design:type", String)
    ], Alerts.prototype, "type", void 0);
    __decorate([
        typeorm_1.Column({
            default: "error"
        }),
        __metadata("design:type", String)
    ], Alerts.prototype, "severity", void 0);
    __decorate([
        typeorm_1.Column({
            default: 'sorted'
        }),
        __metadata("design:type", String)
    ], Alerts.prototype, "status", void 0);
    __decorate([
        typeorm_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], Alerts.prototype, "isResolved", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Product_1.default; }, function (product) { return product.alerts; }),
        __metadata("design:type", Product_1.default)
    ], Alerts.prototype, "product", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Sections_1.default; }, function (section) { return section.alerts; }),
        __metadata("design:type", Sections_1.default)
    ], Alerts.prototype, "sections", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Store_1.default; }, function (store) { return store.alerts; }),
        __metadata("design:type", Store_1.default)
    ], Alerts.prototype, "store", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Gate_1.default; }, function (gate) { return gate.alerts; }),
        __metadata("design:type", Gate_1.default)
    ], Alerts.prototype, "gate", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Device_1.default; }, function (device) { return device.alerts; }),
        __metadata("design:type", Device_1.default)
    ], Alerts.prototype, "device", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return ScanProductHistory_1.default; }, function (history) { return history.alerts; }),
        __metadata("design:type", ScanProductHistory_1.default)
    ], Alerts.prototype, "history", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Tags_1.default; }, function (tags) { return tags.alerts; }),
        __metadata("design:type", Tags_1.default)
    ], Alerts.prototype, "tag", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Move_1.default; }, function (move) { return move.alerts; }),
        __metadata("design:type", Move_1.default)
    ], Alerts.prototype, "move", void 0);
    Alerts = __decorate([
        typeorm_1.Entity()
    ], Alerts);
    return Alerts;
}());
exports.default = Alerts;
//# sourceMappingURL=Alerts.js.map