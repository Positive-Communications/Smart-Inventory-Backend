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
var Column_1 = require("typeorm/decorator/columns/Column");
var PrimaryGeneratedColumn_1 = require("typeorm/decorator/columns/PrimaryGeneratedColumn");
var Entity_1 = require("typeorm/decorator/entity/Entity");
var Alerts_1 = require("./Alerts");
var Tags_1 = require("./Tags");
var Move = /** @class */ (function () {
    function Move() {
    }
    Move.prototype.createItself = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.carrier = data.carrier;
                this.product = data.product;
                this.fromID = data.fromID;
                this.toID = data.toID;
                this.fromSub = data.fromSub || null;
                this.toSub = data.toSub || null;
                this.isFull = data.isFull;
                this.isDefective = data.isDefective;
                this.timeStamp = new Date().getTime().toString();
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        PrimaryGeneratedColumn_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Move.prototype, "id", void 0);
    __decorate([
        Column_1.Column(),
        __metadata("design:type", String)
    ], Move.prototype, "fromID", void 0);
    __decorate([
        Column_1.Column(),
        __metadata("design:type", String)
    ], Move.prototype, "toID", void 0);
    __decorate([
        Column_1.Column(),
        __metadata("design:type", String)
    ], Move.prototype, "timeStamp", void 0);
    __decorate([
        Column_1.Column(),
        __metadata("design:type", String)
    ], Move.prototype, "carrier", void 0);
    __decorate([
        Column_1.Column({
            default: "empty"
        }),
        __metadata("design:type", String)
    ], Move.prototype, "status", void 0);
    __decorate([
        Column_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], Move.prototype, "arrived", void 0);
    __decorate([
        Column_1.Column({
            default: "empty"
        }),
        __metadata("design:type", String)
    ], Move.prototype, "pendingMoveFrom", void 0);
    __decorate([
        Column_1.Column({
            default: "empty"
        }),
        __metadata("design:type", String)
    ], Move.prototype, "pendingMoveTo", void 0);
    __decorate([
        Column_1.Column({
            nullable: true
        }),
        __metadata("design:type", String)
    ], Move.prototype, "fromSub", void 0);
    __decorate([
        Column_1.Column(),
        __metadata("design:type", String)
    ], Move.prototype, "product", void 0);
    __decorate([
        Column_1.Column({
            nullable: true
        }),
        __metadata("design:type", String)
    ], Move.prototype, "toSub", void 0);
    __decorate([
        Column_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], Move.prototype, "isFull", void 0);
    __decorate([
        Column_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], Move.prototype, "isStarted", void 0);
    __decorate([
        Column_1.Column({
            default: 0
        }),
        __metadata("design:type", Number)
    ], Move.prototype, "count", void 0);
    __decorate([
        Column_1.Column({
            default: 0
        }),
        __metadata("design:type", Number)
    ], Move.prototype, "quantity", void 0);
    __decorate([
        Column_1.Column({
            default: false
        }),
        __metadata("design:type", Boolean)
    ], Move.prototype, "isDefective", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Tags_1.default; }, function (tag) { return tag.moves; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Move.prototype, "tags", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Alerts_1.default; }, function (alerts) { return alerts.move; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Move.prototype, "alerts", void 0);
    Move = __decorate([
        Entity_1.Entity()
    ], Move);
    return Move;
}());
exports.default = Move;
//# sourceMappingURL=Move.js.map