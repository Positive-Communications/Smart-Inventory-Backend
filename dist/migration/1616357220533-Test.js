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
var Test1616357220533 = /** @class */ (function () {
    function Test1616357220533() {
        this.name = 'Test1616357220533';
    }
    Test1616357220533.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE \"device\" (\"id\" SERIAL NOT NULL, \"name\" character varying, \"isHandHeld\" boolean NOT NULL DEFAULT false, \"isSensor\" boolean NOT NULL DEFAULT false, \"isTablet\" boolean NOT NULL DEFAULT false, \"isWeb\" boolean NOT NULL DEFAULT false, \"uuid\" character varying NOT NULL DEFAULT 'unrecognized', \"isFixed\" boolean NOT NULL DEFAULT false, \"role\" character varying NOT NULL DEFAULT 'empty', \"allowPalletsToBeCountedManually\" boolean NOT NULL DEFAULT false, \"isActive\" boolean NOT NULL DEFAULT false, \"hasErrors\" boolean NOT NULL DEFAULT false, \"doNotAllowRemovalOfEmptyPallet\" boolean NOT NULL DEFAULT false, \"verifyStoredUsingHandHeld\" boolean NOT NULL DEFAULT false, \"showProductCountError\" boolean NOT NULL DEFAULT false, \"doNotAllowRemoval\" boolean NOT NULL DEFAULT false, \"verifyProductNotTrackedByRFID\" boolean NOT NULL DEFAULT false, \"automaticallyActivateRecallProductIfRequired\" boolean NOT NULL DEFAULT false, \"recordEmptyPallets\" boolean NOT NULL DEFAULT false, \"dispatchingOrReceiving\" boolean NOT NULL DEFAULT false, \"sectionsId\" integer, \"baysId\" integer, \"branchId\" integer, CONSTRAINT \"PK_2dc10972aa4e27c01378dad2c72\" PRIMARY KEY (\"id\"))")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("COMMENT ON COLUMN \"company\".\"registered\" IS NULL")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"company\" ALTER COLUMN \"registered\" SET DEFAULT '1616357220785'")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"device\" ADD CONSTRAINT \"FK_41874d2ecb7400a606b090f5e88\" FOREIGN KEY (\"sectionsId\") REFERENCES \"sections\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"device\" ADD CONSTRAINT \"FK_44ed2374e3b14318d8fde9658d6\" FOREIGN KEY (\"baysId\") REFERENCES \"bays\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"device\" ADD CONSTRAINT \"FK_cae70c648a6b56d55b38db00013\" FOREIGN KEY (\"branchId\") REFERENCES \"branch\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"alerts\" ADD CONSTRAINT \"FK_2b3651f3fd95470304fabc1f02a\" FOREIGN KEY (\"deviceId\") REFERENCES \"device\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 7:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Test1616357220533.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE \"alerts\" DROP CONSTRAINT \"FK_2b3651f3fd95470304fabc1f02a\"")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"device\" DROP CONSTRAINT \"FK_cae70c648a6b56d55b38db00013\"")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"device\" DROP CONSTRAINT \"FK_44ed2374e3b14318d8fde9658d6\"")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"device\" DROP CONSTRAINT \"FK_41874d2ecb7400a606b090f5e88\"")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"company\" ALTER COLUMN \"registered\" SET DEFAULT '1616356989766'")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("COMMENT ON COLUMN \"company\".\"registered\" IS NULL")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"device\"")];
                    case 7:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Test1616357220533;
}());
exports.Test1616357220533 = Test1616357220533;
//# sourceMappingURL=1616357220533-Test.js.map