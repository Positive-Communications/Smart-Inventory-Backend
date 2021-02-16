"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
var SaveProductUnit_1 = require("../entity/SaveProductUnit");
var AddManualEntry_1 = require("../helpers/C/singles/AddManualEntry");
var AddProduct_1 = require("../helpers/C/singles/AddProduct");
var AddUnit_1 = require("../helpers/C/singles/AddUnit");
var SavePallet_1 = require("../helpers/C/singles/SavePallet");
var AllProducts_1 = require("../helpers/R/Many/AllProducts");
var ReadAllProductUnit_1 = require("../helpers/R/Many/ReadAllProductUnit");
var ProductManager = /** @class */ (function () {
    function ProductManager() {
    }
    ProductManager.prototype.saveProduct = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, AddProduct_1.default(req.body)];
                    case 1:
                        product = _a.sent();
                        res.json({ product: product });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductManager.prototype.getAllProducts = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var products;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, AllProducts_1.default()];
                    case 1:
                        products = _a.sent();
                        res.json({ products: products });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductManager.prototype.saveProductUnit = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var unit;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, SaveProductUnit_1.default(req.body)];
                    case 1:
                        unit = _a.sent();
                        res.json({ unit: unit });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductManager.prototype.getAllUnits = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var units;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ReadAllProductUnit_1.default()];
                    case 1:
                        units = _a.sent();
                        res.json({ units: units });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductManager.prototype.saveUnit = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var unit;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, AddUnit_1.default(req.body)];
                    case 1:
                        unit = _a.sent();
                        res.json({ unit: unit });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductManager.prototype.addPallet = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var pallet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, SavePallet_1.default(req.body)];
                    case 1:
                        pallet = _a.sent();
                        res.json({ pallet: pallet });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductManager.prototype.saveManualEntry = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var manualEntry;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, AddManualEntry_1.default(req.body)];
                    case 1:
                        manualEntry = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return ProductManager;
}());
exports.default = ProductManager;
//# sourceMappingURL=product.manager.js.map