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
var SaveDispatchTimes_1 = require("../helpers/C/singles/SaveDispatchTimes");
var Branch = /** @class */ (function () {
    function Branch() {
    }
    Branch.prototype.saveDispatchT = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, saveDispactchTime(this.id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
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
        typeorm_1.OneToMany(function (type) { return Orders_1.default; }, function (order) { return order.orderBranch; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Branch.prototype, "branchOrders", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Orders_1.default; }, function (order) { return order.orderBranch; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Branch.prototype, "pendingOrders", void 0);
    __decorate([
        typeorm_1.AfterInsert(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Branch.prototype, "saveDispatchT", null);
    Branch = __decorate([
        typeorm_1.Entity()
    ], Branch);
    return Branch;
}());
exports.default = Branch;
var data = {
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: false,
    saturday: false,
    sunday: false,
    startTime: "0800",
    endTime: "1700",
    saturdayStart: "1300",
    saturdayEnd: "1700",
    sundayStart: "1300",
    sundayEnd: "1700",
    branchID: "",
};
var saveDispactchTime = function (id) { return __awaiter(_this, void 0, void 0, function () {
    var d, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log(id);
                d = data;
                d['branchID'] = id;
                console.log(d);
                return [4 /*yield*/, SaveDispatchTimes_1.default(d)];
            case 1:
                res = _a.sent();
                console.log(res);
                return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=Branch.js.map