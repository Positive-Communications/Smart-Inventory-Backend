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
var Gate_1 = require("./Gate");
var Branch_1 = require("./Branch");
var ReadGateByID_1 = require("../helpers/R/ByID/ReadGateByID");
var ReadBranchByID_1 = require("../helpers/R/ByID/ReadBranchByID");
var SaveGates_1 = require("../helpers/C/Multiple/SaveGates");
var VisitorAccessTags = /** @class */ (function () {
    function VisitorAccessTags() {
    }
    VisitorAccessTags.prototype.createItSelf = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        this.tagType = data.tagType;
                        this.userName = data.userName;
                        this.identificationType = data.identificationType;
                        this.identificationNumber = data.identificationNumber;
                        this.identificationImage = data.identificationImage;
                        this.visitorsCompany = data.visitorsCompany;
                        this.designation = data.designation;
                        this.phone = data.phone;
                        this.mobile = data.mobile;
                        this.email = data.email;
                        this.expiry = data.expiry;
                        _a = this;
                        return [4 /*yield*/, ReadGateByID_1.default(data.entryGateID)];
                    case 1:
                        _a.entryGate = _e.sent();
                        _b = this;
                        return [4 /*yield*/, ReadGateByID_1.default(data.exitGateID)];
                    case 2:
                        _b.exitGate = _e.sent();
                        _c = this;
                        return [4 /*yield*/, ReadBranchByID_1.default(data.branchID)];
                    case 3:
                        _c.branch = _e.sent();
                        _d = this;
                        return [4 /*yield*/, SaveGates_1.default(data.gates)];
                    case 4:
                        _d.accessGates = _e.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], VisitorAccessTags.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], VisitorAccessTags.prototype, "tagType", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], VisitorAccessTags.prototype, "userName", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], VisitorAccessTags.prototype, "identificationType", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], VisitorAccessTags.prototype, "identificationNumber", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], VisitorAccessTags.prototype, "identificationImage", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], VisitorAccessTags.prototype, "visitorsCompany", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], VisitorAccessTags.prototype, "designation", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], VisitorAccessTags.prototype, "phone", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], VisitorAccessTags.prototype, "mobile", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], VisitorAccessTags.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], VisitorAccessTags.prototype, "expiry", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Gate_1.default; }, function (gate) { return gate.visitorEntries; }),
        __metadata("design:type", Gate_1.default)
    ], VisitorAccessTags.prototype, "entryGate", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Gate_1.default; }, function (gate) { return gate.visitorExit; }),
        __metadata("design:type", Gate_1.default)
    ], VisitorAccessTags.prototype, "exitGate", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Branch_1.default; }, function (branch) { return branch.visitors; }),
        __metadata("design:type", Branch_1.default)
    ], VisitorAccessTags.prototype, "branch", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Gate_1.default; }, function (gate) { return gate.visitorAccess; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], VisitorAccessTags.prototype, "accessGates", void 0);
    VisitorAccessTags = __decorate([
        typeorm_1.Entity()
    ], VisitorAccessTags);
    return VisitorAccessTags;
}());
exports.default = VisitorAccessTags;
//# sourceMappingURL=VisitorAccessTags.js.map