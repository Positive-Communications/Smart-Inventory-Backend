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
var saveBranches_1 = require("../helpers/C/singles/saveBranches");
var BranchInfo_1 = require("../helpers/R/Custom/BranchInfo");
var readAllBranches_1 = require("../helpers/R/Many/readAllBranches");
var UpdateBranch_1 = require("../helpers/U/ByID/UpdateBranch");
var BranchManager = /** @class */ (function () {
    function BranchManager() {
    }
    BranchManager.prototype.createBranch = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var branch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, saveBranches_1.default(req.body)];
                    case 1:
                        branch = _a.sent();
                        res.json({ branch: branch });
                        return [2 /*return*/];
                }
            });
        });
    };
    BranchManager.prototype.summonBranch = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var branch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, BranchInfo_1.default(req.params.id)];
                    case 1:
                        branch = _a.sent();
                        res.json({ branch: branch });
                        return [2 /*return*/];
                }
            });
        });
    };
    BranchManager.prototype.getAllBranches = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var branches;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('arrived successfully....');
                        return [4 /*yield*/, readAllBranches_1.default()];
                    case 1:
                        branches = _a.sent();
                        res.json({ branches: branches });
                        return [2 /*return*/];
                }
            });
        });
    };
    BranchManager.prototype.updateBranchFile = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var branch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(req.body);
                        return [4 /*yield*/, UpdateBranch_1.default(req.body)];
                    case 1:
                        branch = _a.sent();
                        res.json({ branch: branch });
                        return [2 /*return*/];
                }
            });
        });
    };
    return BranchManager;
}());
exports.default = BranchManager;
//# sourceMappingURL=branch.manager.js.map