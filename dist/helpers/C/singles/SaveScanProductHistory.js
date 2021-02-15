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
var ScanProductHistory_1 = require("../../../entity/ScanProductHistory");
var ReadGateByID_1 = require("../../R/ByID/ReadGateByID");
var ReadDeviceByID_1 = require("../../R/ByID/ReadDeviceByID");
var ReadProductByID_1 = require("../../R/ByID/ReadProductByID");
var typeorm_1 = require("typeorm");
function saveScanProductHistory(data) {
    return __awaiter(this, void 0, void 0, function () {
        var context, scanHistory, _a, _b, _c, _d, _e, e_1;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    switch (data.context) {
                        case "gate":
                            context = ReadGateByID_1.default(data.contextID);
                        case "device":
                            context = ReadDeviceByID_1.default(data.contextID);
                        default:
                            context = null;
                    }
                    scanHistory = new ScanProductHistory_1.default();
                    scanHistory.timeStamp = data.timeStamp;
                    scanHistory.isReadByHandHeld = data.isReadByHandHeld;
                    if (!(data.context === "gate")) return [3 /*break*/, 2];
                    _b = scanHistory;
                    return [4 /*yield*/, context];
                case 1:
                    _a = _b.gate = _f.sent();
                    return [3 /*break*/, 6];
                case 2:
                    if (!(data.context === "device")) return [3 /*break*/, 4];
                    _d = scanHistory;
                    return [4 /*yield*/, context];
                case 3:
                    _c = _d.device = _f.sent();
                    return [3 /*break*/, 5];
                case 4:
                    _c = null;
                    _f.label = 5;
                case 5:
                    _a = _c;
                    _f.label = 6;
                case 6:
                    _a;
                    _e = scanHistory;
                    return [4 /*yield*/, ReadProductByID_1.default(data.productID)];
                case 7:
                    _e.product = _f.sent();
                    _f.label = 8;
                case 8:
                    _f.trys.push([8, 10, , 11]);
                    return [4 /*yield*/, typeorm_1.getConnection().manager.save(scanHistory)];
                case 9: return [2 /*return*/, _f.sent()];
                case 10:
                    e_1 = _f.sent();
                    console.log(e_1);
                    return [3 /*break*/, 11];
                case 11: return [2 /*return*/];
            }
        });
    });
}
exports.default = saveScanProductHistory;
var json = {
    context: "",
    contextID: "",
    timeStamp: "",
    isReadByHandHeld: "",
    productId: ""
};
//# sourceMappingURL=SaveScanProductHistory.js.map