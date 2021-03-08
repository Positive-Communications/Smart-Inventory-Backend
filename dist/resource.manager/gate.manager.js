"use strict";
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
var Gate_1 = require("../entity/Gate");
var AddGate_1 = require("../helpers/C/singles/AddGate");
var ReadGateByID_1 = require("../helpers/R/ByID/ReadGateByID");
var ReadHistoryByGate_1 = require("../helpers/R/Custom/ReadHistoryByGate");
var ReadAllGates_1 = require("../helpers/R/Many/ReadAllGates");
var UpdateGate_1 = require("../helpers/U/ByID/UpdateGate");
var GateManager = /** @class */ (function () {
    function GateManager() {
    }
    GateManager.prototype.registerGate = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var gate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, AddGate_1.default(req.body)];
                    case 1:
                        gate = _a.sent();
                        res.json({ gate: gate });
                        return [2 /*return*/];
                }
            });
        });
    };
    GateManager.prototype.availAllGates = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var gates;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ReadAllGates_1.default()];
                    case 1:
                        gates = _a.sent();
                        res.json({ gates: gates });
                        return [2 /*return*/];
                }
            });
        });
    };
    GateManager.prototype.updateGate = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var gate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, UpdateGate_1.default(req.body, req.params.id)];
                    case 1:
                        gate = _a.sent();
                        res.json({ gate: gate });
                        return [2 /*return*/];
                }
            });
        });
    };
    GateManager.prototype.readGate = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ReadGateByID_1.default(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    GateManager.prototype.readHistoryByGate = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var history;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ReadHistoryByGate_1.default(parseInt(req.params.id))];
                    case 1:
                        history = _a.sent();
                        res.json({ history: history });
                        return [2 /*return*/];
                }
            });
        });
    };
    GateManager.prototype.deleteGate = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var gate, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, typeorm_1.getConnection().createQueryBuilder().delete().from(Gate_1.default).where('id =:id', { id: parseInt(req.params.id) }).execute()];
                    case 1:
                        gate = _a.sent();
                        res.json({ gate: gate });
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.log('====================================');
                        console.log(e_1);
                        console.log('====================================');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return GateManager;
}());
exports.default = GateManager;
//# sourceMappingURL=gate.manager.js.map