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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var product_manager_1 = require("../../../resource.manager/product.manager");
var AddHistory_1 = require("../singles/AddHistory");
var proccessScan = function (tag, gate, carrier) { return __awaiter(_this, void 0, void 0, function () {
    var productManager, _a, entry, product;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                productManager = new product_manager_1.default();
                _a = tag.status;
                switch (_a) {
                    case "empty": return [3 /*break*/, 1];
                    case "no_status": return [3 /*break*/, 3];
                    case "dispatched": return [3 /*break*/, 7];
                    case "order_moved_out": return [3 /*break*/, 19];
                    case "packed": return [3 /*break*/, 21];
                    case "defective": return [3 /*break*/, 23];
                    case "moved_out": return [3 /*break*/, 29];
                }
                return [3 /*break*/, 35];
            case 1:
                if (!(gate.isForPackaging && tag.epc.startsWith("product"))) return [3 /*break*/, 3];
                entry = AddHistory_1.default({ gateID: gate.id, tagEpc: tag.epc, status: "packed", carrier: parseInt(carrier) });
                return [4 /*yield*/, entry];
            case 2: return [2 /*return*/, _b.sent()];
            case 3:
                if (!(gate.isForDispatch && tag.isProductTag)) return [3 /*break*/, 5];
                return [4 /*yield*/, saveProductAlert(tag.epc, gate.id, { reason: "Product not Packed", severity: "Unauthorised Storage", "type": "" })];
            case 4: return [2 /*return*/, _b.sent()];
            case 5:
                if (!(gate.isForStorage && tag.isProductTag)) return [3 /*break*/, 7];
                return [4 /*yield*/, saveProductAlert(tag.epc, gate.id, { reason: "Product not Packed", severity: "Unauthorised storage", type: "recall" })];
            case 6: return [2 /*return*/, _b.sent()];
            case 7:
                if (!(gate.isForDispatch && tag.isPalletTag)) return [3 /*break*/, 9];
                return [4 /*yield*/, savePalletAlert(tag.epc, gate.id, { reason: "Empty Pallet not returned", severity: "Unauthorised", type: "recall" })];
            case 8: return [2 /*return*/, _b.sent()];
            case 9:
                if (!(gate.isForDispatch && tag.isProductTag)) return [3 /*break*/, 11];
                return [4 /*yield*/, saveProductAlert(tag.epc, gate.id, { reason: "Empty Pallet Not returned", severity: "Unauthorised", type: "recall" })];
            case 10: return [2 /*return*/, _b.sent()];
            case 11:
                if (!(gate.isForStorage && tag.isProductTag)) return [3 /*break*/, 13];
                return [4 /*yield*/, saveProductAlert(tag.epc, gate.id, { reason: "Product Dispatched For Order Number", severity: "Unauthorised", type: "recall" })];
            case 12: return [2 /*return*/, _b.sent()];
            case 13:
                if (!(gate.isForStorage && tag.isPalletTag)) return [3 /*break*/, 15];
                return [4 /*yield*/, savePalletAlert(tag.epc, gate.id, { reason: "Empty Pallet not returned", severity: "Unauthorised", type: "recall" })];
            case 14: return [2 /*return*/, _b.sent()];
            case 15:
                if (!(gate.isForPackaging && tag.isPalletTag)) return [3 /*break*/, 17];
                return [4 /*yield*/, savePalletAlert(tag.epc, gate.id, { reason: "Empty Pallet not returned", severity: "Unauthorised Product", type: "recall" })];
            case 16: return [2 /*return*/, _b.sent()];
            case 17:
                if (!(gate.isForPackaging && tag.isProductTag)) return [3 /*break*/, 19];
                return [4 /*yield*/, saveProductAlert(tag.epc, gate.id, { reason: "Product Dispatched For OrderNumber", severity: "Unauthorised Product", "type": "" })];
            case 18: return [2 /*return*/, _b.sent()];
            case 19:
                if (!(gate.isForPackaging && tag.isProductTag)) return [3 /*break*/, 21];
                return [4 /*yield*/, saveProductAlert(tag.epc, gate.id, { reason: "Product is For Dispatch", severity: "Unauthorised", type: "recall" })];
            case 20: return [2 /*return*/, _b.sent()];
            case 21:
                if (!(gate.isForPackaging && tag.epc.startsWith("product"))) return [3 /*break*/, 23];
                return [4 /*yield*/, productManager.saveAlert({
                        reason: "Product already Packed",
                        severity: "Unauthorised Item",
                        type: "error"
                    }, tag.epc)];
            case 22:
                product = _b.sent();
                return [2 /*return*/, product];
            case 23:
                if (!(gate.isForPackaging && tag.isProductTag)) return [3 /*break*/, 25];
                return [4 /*yield*/, saveProductDoesNotBelongAlert(tag.epc, gate.id, { reason: "Product is Not for this packaging section", severity: "Unauthorised", type: "recall" })];
            case 24: return [2 /*return*/, _b.sent()];
            case 25:
                if (!(gate.isForDispatch && tag.isProductTag)) return [3 /*break*/, 27];
                return [4 /*yield*/, saveProductAlert(tag.epc, gate.id, { reason: "Defective Product Found", severity: "Unauthorised", type: "recall" })];
            case 26: return [2 /*return*/, _b.sent()];
            case 27:
                if (!(gate.isForStorage && tag.isProductTag)) return [3 /*break*/, 29];
                return [4 /*yield*/, saveProductAlert(tag.epc, gate.id, { reason: "Defective Product Found", severity: "Unauthorised", type: "recall" })];
            case 28: return [2 /*return*/, _b.sent()];
            case 29:
                if (!(gate.isForPackaging && tag.isProductTag)) return [3 /*break*/, 31];
                return [4 /*yield*/, saveProductDoesNotBelongAlert(tag.epc, gate.id, { reason: "Product is not for this packaging section", severity: "Unauthorised", type: "recall" })];
            case 30: return [2 /*return*/, _b.sent()];
            case 31:
                if (!(gate.isForDispatch && tag.isProductTag)) return [3 /*break*/, 33];
                return [4 /*yield*/, saveProductDoesNotBelongAlert(tag.epc, gate.id, { reason: "Product is not for this packaging section", severity: "Unauthorised", type: "recall" })];
            case 32: return [2 /*return*/, _b.sent()];
            case 33:
                if (!(gate.isForStorage && tag.isProductTag)) return [3 /*break*/, 35];
                return [4 /*yield*/, saveProductDoesNotBelongAlert(tag.epc, gate.id, { reason: "Product is not for this packaging section", severity: "Unauthorised", type: "recall" })];
            case 34: return [2 /*return*/, _b.sent()];
            case 35:
                if (!(tag.isPalletTag || tag.isProductTag)) return [3 /*break*/, 37];
                return [4 /*yield*/, saveAlert(tag.epc, gate.id, { reason: "Stored In Store", severity: "Unauthorised", type: "" })];
            case 36: return [2 /*return*/, _b.sent()];
            case 37: return [2 /*return*/];
        }
    });
}); };
exports.default = proccessScan;
function saveProductAlert(epc, gateID, alert) {
    return __awaiter(this, void 0, void 0, function () {
        var productManager;
        return __generator(this, function (_a) {
            productManager = new product_manager_1.default();
            return [2 /*return*/];
        });
    });
}
function saveProductDoesNotBelongAlert(epc, gateID, alert) {
    return __awaiter(this, void 0, void 0, function () {
        var productManager;
        return __generator(this, function (_a) {
            productManager = new product_manager_1.default();
            return [2 /*return*/];
        });
    });
}
function savePalletAlert(epc, gateID, alert) {
    return __awaiter(this, void 0, void 0, function () {
        var productManager;
        return __generator(this, function (_a) {
            productManager = new product_manager_1.default();
            return [2 /*return*/];
        });
    });
}
function saveAlert(epc, gateID, alert) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    });
}
//# sourceMappingURL=SaveAlerts.js.map