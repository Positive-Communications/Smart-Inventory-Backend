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
var typeorm_1 = require("typeorm");
var Alerts_1 = require("../../../entity/Alerts");
var Move_1 = require("../../../entity/Move");
var Tags_1 = require("../../../entity/Tags");
var product_manager_1 = require("../../../resource.manager/product.manager");
var tagByEpc_1 = require("../../R/Custom/tagByEpc");
var proccessScan = function (tag, gate, carrier) { return __awaiter(_this, void 0, void 0, function () {
    var productManager, prev, moves, updated, updated, newTag;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                productManager = new product_manager_1.default();
                prev = tag.previousScan || null;
                return [4 /*yield*/, typeorm_1.getConnection().manager.find(Move_1.default)];
            case 1:
                moves = _a.sent();
                if (!(prev === null || prev === undefined)) return [3 /*break*/, 3];
                return [4 /*yield*/, typeorm_1.getConnection().createQueryBuilder()
                        .update(Tags_1.default)
                        .set({ scan: gate, })
                        .where('id =:id', { id: tag.id })
                        .execute()];
            case 2:
                updated = _a.sent();
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, typeorm_1.getConnection().createQueryBuilder()
                    .update(Tags_1.default).set({
                    scan: gate,
                    previousScan: prev,
                }).where('id =:id', { id: tag.id }).execute()];
            case 4:
                updated = _a.sent();
                _a.label = 5;
            case 5: return [4 /*yield*/, tagByEpc_1.default(tag.epc)];
            case 6:
                newTag = _a.sent();
                return [2 /*return*/, newTag];
        }
    });
}); };
exports.default = proccessScan;
var updateTag = function (context, tagID, productID, moveID) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, typeorm_1.getConnection().createQueryBuilder()
                    .update(Tags_1.default).set({
                    product: productID,
                    moves: moveID,
                    status: context,
                    isAssigned: true
                }).where("id =:id", { id: tagID }).execute()];
            case 1:
                _a.sent();
                return [4 /*yield*/, typeorm_1.getConnection().manager.findOne(Tags_1.default, tagID)];
            case 2: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var createErrorAlert = function (context, move, carrier, tag) { return __awaiter(_this, void 0, void 0, function () {
    var _a, alert, _b, e_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = context;
                switch (_a) {
                    case "packaging_unauthorised": return [3 /*break*/, 1];
                }
                return [3 /*break*/, 7];
            case 1:
                alert = new Alerts_1.default();
                alert.reason = "Product Already Packed.";
                alert.type = "unauthorised";
                _b = alert;
                return [4 /*yield*/, typeorm_1.getConnection().manager.findOne(Move_1.default, move)];
            case 2:
                _b.move = _c.sent();
                alert.type = "recall";
                alert.tag = tag;
                _c.label = 3;
            case 3:
                _c.trys.push([3, 6, , 7]);
                return [4 /*yield*/, typeorm_1.getConnection().manager.save(alert)];
            case 4:
                _c.sent();
                return [4 /*yield*/, typeorm_1.getConnection().manager.findOne(Move_1.default, move, { relations: ["alerts"] })];
            case 5: return [2 /*return*/, _c.sent()];
            case 6:
                e_1 = _c.sent();
                return [2 /*return*/, "an erroor occured"];
            case 7: return [2 /*return*/];
        }
    });
}); };
var newAlertContainer = function (context, product, carrier, to, tag) { return __awaiter(_this, void 0, void 0, function () {
    var move, moved, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                move = new Move_1.default();
                move.toID = context + "_" + to;
                move.carrier = carrier;
                move.fromID = "update_later";
                move.product = product;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, typeorm_1.getConnection().manager.save(move)];
            case 2:
                moved = _a.sent();
                return [4 /*yield*/, createErrorAlert("packaging_unauthorised", moved.id, carrier, tag)];
            case 3: return [2 /*return*/, _a.sent()];
            case 4:
                e_2 = _a.sent();
                return [2 /*return*/, "error at new errors"];
            case 5: return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=SaveAlerts.js.map