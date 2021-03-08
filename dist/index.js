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
require("reflect-metadata");
var http = require("http");
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var typeorm_1 = require("typeorm");
var ReadAllBays_1 = require("./helpers/R/Many/ReadAllBays");
var middleware_1 = require("./Auth/middleware");
var company_manager_1 = require("./resource.manager/company.manager");
var default_1 = require("./resource.manager/default");
var auth_manager_1 = require("./resource.manager/auth.manager");
var branch_manager_1 = require("./resource.manager/branch.manager");
var dispatch_manager_1 = require("./resource.manager/dispatch.manager");
var users_manager_1 = require("./resource.manager/users.manager");
var device_manager_1 = require("./resource.manager/device.manager");
var carrer_manager_1 = require("./resource.manager/carrer.manager");
var gate_manager_1 = require("./resource.manager/gate.manager");
var section_manager_1 = require("./resource.manager/section.manager");
var orderque_manager_1 = require("./resource.manager/orderque.manager");
var product_manager_1 = require("./resource.manager/product.manager");
var bays_manager_1 = require("./resource.manager/bays.manager");
var tags_manager_1 = require("./resource.manager/tags.manager");
var app = express();
var prod = false;
var socketPort = 2000;
var server = http.createServer(app);
var io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
typeorm_1.createConnection(
// {
//     type: "postgres",
//     host: "ziggy.db.dumbo.db.elephantsql.com.com",
//     port: 5432,
//     username: "lgmbmxih",
//     password: "4pY4VeACxkXo2wgglD48gARdV0vYtTZ9",
//     database: "lgmbmxih",
//     logging: false,
//     entities: [
//         __dirname + "/entity/**/*.js"
//     ]
// }
).then(function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log('Database ready... :103');
        return [2 /*return*/];
    });
}); }).catch(function (error) { return console.log(error); });
/*
* Home
* */
var index = new default_1.default();
app.get('/', index.home);
/*
* Auth
* */
var auth = new auth_manager_1.default();
app.get('/super-user/', auth.createSuperUser);
app.post('/login/', auth.authenticate);
/*
* Company
* */
var companyHandler = new company_manager_1.default();
app.post('/save-company/', companyHandler.createCompany);
app.get('/company/:id/', middleware_1.default, companyHandler.getCompanyByID);
app.get('/all-companies/', companyHandler.getAllCompanies);
/*
* Branch
* */
var branchManager = new branch_manager_1.default();
app.get('/branch/:id/', middleware_1.default, branchManager.summonBranch);
app.get('/all-branches/', middleware_1.default, branchManager.getAllBranches);
app.post('/save-branch/', middleware_1.default, branchManager.createBranch);
app.patch('/update-branch/:id/', middleware_1.default, branchManager.updateBranchFile);
/*
* Dispatch Times
* */
var dispatchManager = new dispatch_manager_1.default();
app.get('/dispatch/:branchID', middleware_1.default, dispatchManager.checkBranchDispatch);
app.post('/add-dispatch/:branchID/', middleware_1.default, dispatchManager.createBranchDispatch);
app.post('/new-order/', middleware_1.default, dispatchManager.saveOrder);
app.get('/all-orders/', middleware_1.default, dispatchManager.getAllOrders);
app.get('/order/:number', middleware_1.default, dispatchManager.getOrderByNumber);
app.post('/save-order-que/', middleware_1.default, dispatchManager.saveOrderQue);
app.get('/order-que/:id', middleware_1.default, dispatchManager.getOrderQue);
/*
* User
* */
var usersManager = new users_manager_1.default();
app.get('/all-users/', middleware_1.default, usersManager.summonAllUsers);
app.post('/save-user/:branchID/', middleware_1.default, usersManager.registerUser);
app.patch('/update-user/', middleware_1.default, usersManager.updateUserDetails);
/*
* Device
* */
var deviceManager = new device_manager_1.default();
app.post('/save-device/:branchID', middleware_1.default, deviceManager.registerDevice);
app.patch('/update-device/:id', middleware_1.default, deviceManager.editDevice);
app.get('/all-devices/:branchID/', middleware_1.default, deviceManager.availAllDevices);
/*
* Carriers
* */
var carrierManager = new carrer_manager_1.default();
app.post('/save-carrier/', middleware_1.default, carrierManager.registerCarrier);
app.post('/save-carrier-type/', middleware_1.default, carrierManager.saveCarrierType);
app.get('/all-carrier-types/', middleware_1.default, carrierManager.getAllCarrierTypes);
app.get('/all-carriers/', middleware_1.default, carrierManager.summonAllCarrierTypes);
app.post('/move/', middleware_1.default, carrierManager.moveProducts);
app.get('/all-moves/', middleware_1.default, carrierManager.getAllMoves);
app.get('/gate/moves/to/:id', middleware_1.default, carrierManager.getMovesByGateTo);
/*
* Gates
*
* */
var gateManager = new gate_manager_1.default();
app.post('/save-gate/', middleware_1.default, gateManager.registerGate);
app.get('/all-gates/', middleware_1.default, gateManager.availAllGates);
app.get('/all-products-history/:id', middleware_1.default, gateManager.readHistoryByGate);
app.patch('/update-gate/:id/', middleware_1.default, gateManager.updateGate);
app.delete('/gate/:id/', middleware_1.default, gateManager.deleteGate);
// app.get('/gate/:id/', gateManager.readGate)
/*
* Sections
*
* */
var sectionManager = new section_manager_1.default();
app.post('/save-section/', middleware_1.default, sectionManager.registerSection);
app.post('/save-preset/', middleware_1.default, sectionManager.savePreset);
app.post('/save-preset-meta', middleware_1.default, sectionManager.savePresetMeta);
app.patch('/update-preset-meta/:id', middleware_1.default, sectionManager.updatePresetMeta);
app.get('/all-presets/', middleware_1.default, sectionManager.getAllPresets);
app.get('/all-sections/', middleware_1.default, sectionManager.getAllSections);
/*
* Tags
*
* */
var tagsManager = new tags_manager_1.default();
app.post('/new-tags/:id', middleware_1.default, tagsManager.saveNewTags);
app.get('/tag/:epc', middleware_1.default, tagsManager.getTagByEPC);
app.get('/all-assigned-tags/', middleware_1.default, tagsManager.getAllUnasignedTags);
app.get('/all-transactions/', middleware_1.default, tagsManager.getAllTransactions);
/*
* OrderQue
*
* */
var orderQueManager = new orderque_manager_1.default();
app.post('/orderQue/', middleware_1.default, orderQueManager.saveOrderQue);
/*
* Products
* */
var productManager = new product_manager_1.default();
app.get('/all-product-units/', middleware_1.default, productManager.getAllUnits);
app.get('/all-products/', middleware_1.default, productManager.getAllProducts);
app.get('/all-units/', middleware_1.default, productManager.getAllUnits);
app.get('/section/:id/products/', middleware_1.default, productManager.getProductsBySection);
app.post('/scan/', middleware_1.default, productManager.proccessScan);
app.post('/save-pallet/', middleware_1.default, productManager.addPallet);
app.post('/save-product/', middleware_1.default, productManager.saveProduct);
app.post('/save-manual-entry/', middleware_1.default, productManager.saveManualEntry);
app.post('/save-unit/', middleware_1.default, productManager.saveUnit);
app.post('/save-history/', middleware_1.default, productManager.saveProductHistory);
/*
* Storage Bays
* */
var storageBayManager = new bays_manager_1.default();
app.post('/save-bay/:id/', middleware_1.default, storageBayManager.createBays);
app.get('/all-bays/', middleware_1.default, ReadAllBays_1.default);
app.get('/all-stores/', middleware_1.default, storageBayManager.getAllStores);
io.on('connection', function (client) {
    io.emit('msg', 'Connecption Successful!');
    console.log("Client " + .1 + "' -> Connected successfully. :101");
    // scan();
});
var scan = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/];
    });
}); };
// setTimeout(()=>{
//     console.log('Me');
// }, 2000)
// let Tags = [];
//
// try {
//     const readerConnection = new EventSource("http://localhost:8080/subscribe", {
//         withCredentials: true,
//     });
//     readerConnection.onopen = function () {
//         console.log('Reader connected!... :104')
//         axios.get('http://localhost:8080/start-inventory').then(res => {
//             console.log('Inventory has been started sucessfully... :105')
//         }).catch(err => {
//             console.log('Couldn\'t start inventory... :203');
//         });
//     }
//     readerConnection.onmessage = function (event) {
//         if (Tags.includes(event.data)) {
//             console.log('Tag already scanned..')
//         } else {
//             Tags.push(event.data)
//             getItem(event.data).then(data => {
//                 io.emit('item', data);
//                 if (data.hasErrors) {
//                     console.log('Happened here....')
//                 }
//                 console.log(data)
//             });
//         }
//     }
// } catch (err) {
//     console.log(err)
// }
//
// client.on('tag', msg => {
//     getItem(msg).then(data => {
//         io.emit('item', data);
//         console.log(data)
//     });
// })
// client.on('ping', () => {
//     io.emit('pong', 'I got a ping, here\'s a pong!.')
// })
// });
server.listen(prod ? process.env.PORT : socketPort, function () {
    console.log('Application startup successful.... :100 \n' +
        ' Application Listening on port ' + socketPort + '... : 100');
});
//# sourceMappingURL=index.js.map