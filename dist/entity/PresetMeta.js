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
var ReadPresetByID_1 = require("../helpers/R/ByID/ReadPresetByID");
var ReadProductByID_1 = require("../helpers/R/ByID/ReadProductByID");
var gate_manager_1 = require("../resource.manager/gate.manager");
var Gate_1 = require("./Gate");
var Presets_1 = require("./Presets");
var Product_1 = require("./Product");
var gateManager = new gate_manager_1.default();
var PresetMeta = /** @class */ (function () {
    function PresetMeta() {
    }
    PresetMeta.prototype.createItself = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, ReadPresetByID_1.default(data.presetID)];
                    case 1:
                        _a.preset = _d.sent();
                        this.expiry = data.expiry || "2021-05-2021";
                        this.trackRFIDTagType = data.trackRFIDTagType || "productTagOnly";
                        this.palletType = data.palletType || "empty";
                        _b = this;
                        return [4 /*yield*/, ReadProductByID_1.default(data.product)];
                    case 2:
                        _b.product = _d.sent();
                        _c = this;
                        return [4 /*yield*/, gateManager.readGate(data.gateID)];
                    case 3:
                        _c.gate = _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], PresetMeta.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({
            default: "01/07/2021",
        }),
        __metadata("design:type", String)
    ], PresetMeta.prototype, "expiry", void 0);
    __decorate([
        typeorm_1.Column({
            default: "productTag",
        }),
        __metadata("design:type", String)
    ], PresetMeta.prototype, "trackRFIDTagType", void 0);
    __decorate([
        typeorm_1.Column({
            default: "empty",
        }),
        __metadata("design:type", String)
    ], PresetMeta.prototype, "palletType", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Presets_1.default; }, function (preset) { return preset.meta; }),
        __metadata("design:type", Presets_1.default)
    ], PresetMeta.prototype, "preset", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Product_1.default; }, function (product) { return product.meta; }),
        __metadata("design:type", Product_1.default)
    ], PresetMeta.prototype, "product", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return Gate_1.default; }, function (gate) { return gate.presetMeta; }),
        __metadata("design:type", Gate_1.default)
    ], PresetMeta.prototype, "gate", void 0);
    PresetMeta = __decorate([
        typeorm_1.Entity()
    ], PresetMeta);
    return PresetMeta;
}());
exports.default = PresetMeta;
var json = {
    preset: "",
    expiry: "",
    trackRFIDTagType: "",
    palletType: "",
    product: "",
    gateID: ""
};
//# sourceMappingURL=PresetMeta.js.map