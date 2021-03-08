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
var AddPresetMeta_1 = require("../helpers/C/singles/AddPresetMeta");
var SavePresets_1 = require("../helpers/C/singles/SavePresets");
var SaveSections_1 = require("../helpers/C/singles/SaveSections");
var ReadAllPresets_1 = require("../helpers/R/Many/ReadAllPresets");
var ReadAllSections_1 = require("../helpers/R/Many/ReadAllSections");
var UpdatePresetMetaByGateID_1 = require("../helpers/U/ByID/UpdatePresetMetaByGateID");
var SectionManager = /** @class */ (function () {
    function SectionManager() {
    }
    SectionManager.prototype.registerSection = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var section;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, SaveSections_1.default(req.body)];
                    case 1:
                        section = _a.sent();
                        res.json({ data: section });
                        return [2 /*return*/];
                }
            });
        });
    };
    SectionManager.prototype.savePreset = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var preset;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, SavePresets_1.default(req.body)];
                    case 1:
                        preset = _a.sent();
                        res.json({ preset: preset });
                        return [2 /*return*/];
                }
            });
        });
    };
    SectionManager.prototype.getAllPresets = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var presets;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ReadAllPresets_1.default()];
                    case 1:
                        presets = _a.sent();
                        res.json({ presets: presets });
                        return [2 /*return*/];
                }
            });
        });
    };
    SectionManager.prototype.getAllSections = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var sections;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ReadAllSections_1.default()];
                    case 1:
                        sections = _a.sent();
                        res.json({ sections: sections });
                        return [2 /*return*/];
                }
            });
        });
    };
    SectionManager.prototype.savePresetMeta = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var presetMeta;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, AddPresetMeta_1.default(req.body)];
                    case 1:
                        presetMeta = _a.sent();
                        res.json({ presetMeta: presetMeta });
                        return [2 /*return*/];
                }
            });
        });
    };
    SectionManager.prototype.updatePresetMeta = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var presetMeta;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, UpdatePresetMetaByGateID_1.default(req.params.id, req.body)];
                    case 1:
                        presetMeta = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return SectionManager;
}());
exports.default = SectionManager;
//# sourceMappingURL=section.manager.js.map