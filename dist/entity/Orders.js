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
var Branch_1 = require("./Branch");
var OrderDetails_1 = require("./OrderDetails");
var ReadBranchByID_1 = require("../helpers/R/ByID/ReadBranchByID");
var SaveMultipleOrderDetails_1 = require("../helpers/C/Multiple/SaveMultipleOrderDetails");
var Orders = /** @class */ (function () {
    function Orders() {
    }
    Orders.prototype.createItself = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.orderNumber = data.orderNumber;
                        this.date = data.date;
                        this.customerName = data.customerName;
                        this.typeOfClient = data.typeOfClient;
                        this.customerEmail = data.customerEmail;
                        this.customerPhone = data.customerPhone;
                        this.isBranchDeportOrder = data.isBranchDeportOrder;
                        this.collectionBy = data.collectionBy;
                        this.identificationType = data.identificationType;
                        this.identificationNumber = data.identificationNumber;
                        this.vehicleReg = data.vehicleReg;
                        _a = this;
                        return [4 /*yield*/, ReadBranchByID_1.default(data.issuedBy)];
                    case 1:
                        _a.issuedBy = _d.sent();
                        _b = this;
                        return [4 /*yield*/, ReadBranchByID_1.default(data.collectionFrom)];
                    case 2:
                        _b.collectionFrom = _d.sent();
                        this.checkedBy = data.checkedBy;
                        _c = this;
                        return [4 /*yield*/, SaveMultipleOrderDetails_1.default(data.orderDetails)];
                    case 3:
                        _c.orderDetails = _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Orders.prototype.isLegit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, true];
            });
        });
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Orders.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            unique: true,
        }),
        __metadata("design:type", String)
    ], Orders.prototype, "orderNumber", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Orders.prototype, "date", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Orders.prototype, "typeOfClient", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Orders.prototype, "isBranchDeportOrder", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Orders.prototype, "customerName", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Orders.prototype, "customerEmail", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Orders.prototype, "customerPhone", void 0);
    __decorate([
        typeorm_1.Column({
            default: "issued"
        }),
        __metadata("design:type", String)
    ], Orders.prototype, "status", void 0);
    __decorate([
        typeorm_1.Column({
            default: "0",
        }),
        __metadata("design:type", String)
    ], Orders.prototype, "orderAmount", void 0);
    __decorate([
        typeorm_1.Column({
            default: "pending"
        }),
        __metadata("design:type", String)
    ], Orders.prototype, "paymentStatus", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Orders.prototype, "collectionBy", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Orders.prototype, "identificationType", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Orders.prototype, "identificationNumber", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Orders.prototype, "vehicleReg", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Orders.prototype, "checkedBy", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return OrderDetails_1.default; }, function (details) { return details.order; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Orders.prototype, "orderDetails", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Branch_1.default; }, function (branch) { return branch.branchOrders; }),
        __metadata("design:type", Branch_1.default)
    ], Orders.prototype, "orderBranch", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Branch_1.default; }, function (branch) { return branch.pendingOrders; }),
        __metadata("design:type", Branch_1.default)
    ], Orders.prototype, "collectionFrom", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Branch_1.default; }, function (branch) { return branch.issueOrders; }),
        __metadata("design:type", Branch_1.default)
    ], Orders.prototype, "issuedBy", void 0);
    Orders = __decorate([
        typeorm_1.Entity()
    ], Orders);
    return Orders;
}());
exports.default = Orders;
//# sourceMappingURL=Orders.js.map