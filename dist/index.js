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
var AddUsers_1 = require("./helpers/C/singles/AddUsers");
var SaveCarrier_1 = require("./helpers/C/singles/SaveCarrier");
var saveCompany_1 = require("./helpers/C/singles/saveCompany");
var SaveBays_1 = require("./helpers/C/singles/SaveBays");
var SaveCarrierTypes_1 = require("./helpers/C/singles/SaveCarrierTypes");
var SaveDispatchTimes_1 = require("./helpers/C/singles/SaveDispatchTimes");
var SavePresets_1 = require("./helpers/C/singles/SavePresets");
var AddGate_1 = require("./helpers/C/singles/AddGate");
var SaveSections_1 = require("./helpers/C/singles/SaveSections");
var saveBranches_1 = require("./helpers/C/singles/saveBranches");
var BranchInfo_1 = require("./helpers/R/Custom/BranchInfo");
var SaveDevice_1 = require("./helpers/C/singles/SaveDevice");
var AddProduct_1 = require("./helpers/C/singles/AddProduct");
var AddManualEntry_1 = require("./helpers/C/singles/AddManualEntry");
var UpdateUser_1 = require("./helpers/U/ByID/UpdateUser");
var SaveOrderQue_1 = require("./helpers/C/singles/SaveOrderQue");
var AllDevices_1 = require("./helpers/R/Many/AllDevices");
var UpdateDevice_1 = require("./helpers/U/ByID/UpdateDevice");
var GetDispatchByBranch_1 = require("./helpers/R/ByBranch/GetDispatchByBranch");
var CarrierTypes_1 = require("./helpers/R/Many/CarrierTypes");
var ReadCompanyByID_1 = require("./helpers/R/ByID/ReadCompanyByID");
var UpdateBranch_1 = require("./helpers/U/ByID/UpdateBranch");
var AllDevices_2 = require("./helpers/R/Many/AllDevices");
var GetAllCarriers_1 = require("./helpers/R/Many/GetAllCarriers");
var ReadAllGates_1 = require("./helpers/R/Many/ReadAllGates");
var AllProducts_1 = require("./helpers/R/Many/AllProducts");
var ReadAllUsers_1 = require("./helpers/R/Many/ReadAllUsers");
var readAllBranches_1 = require("./helpers/R/Many/readAllBranches");
var app = express();
var prod = false;
var socketPort = 2026;
var server = http.createServer(app);
var io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});
var EventSource = require('eventsource');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
typeorm_1.createConnection({
    type: "postgres",
    host: "ziggy.db.elephantsql.com",
    port: 5432,
    username: "fsscpyai",
    password: "VGTPfbHliRVhP__C_b10pcmqAYGnBItm",
    database: "fsscpyai",
    logging: false,
    entities: [
        __dirname + "/entity/**/*.js"
    ]
}).then(function (connection) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log('Database ready... :103');
        return [2 /*return*/];
    });
}); }).catch(function (error) { return console.log(error); });
app.get('/', (function (req, res) {
    res.json({
        Text: 'The application started successfully... :100'
    });
}));
/*
* Company
* */
app.post('/save-company/', function (req, res) {
    saveCompany_1.default(req.body).then(function (data) {
        res.json({
            company: data
        });
    });
});
app.get('/company/:id/', function (req, res) {
    ReadCompanyByID_1.default(req.params.id).then(function (data) {
        res.json({
            company: data
        });
    });
});
/*
* Branch
* */
app.post('/save-branch/', function (req, res) {
    saveBranches_1.default(req.body).then(function (data) {
        res.json({
            branch: data
        });
    });
});
app.get('/branch/:id', function (req, res) {
    BranchInfo_1.default(req.params.id).then(function (data) {
        res.json({
            branch: data
        });
    });
});
app.get('/all-branches/', function (req, res) {
    readAllBranches_1.default(7).then(function (data) {
        res.json({
            branches: data
        });
    });
});
app.patch('/update-branch/:id', function (req, res) {
    UpdateBranch_1.default(req.body).then(function (data) {
        res.json({
            branch: data
        });
    });
});
/*
* Dispatch Times
* */
app.get('/dispatch/:branchID', function (req, res) {
    GetDispatchByBranch_1.default(req.params.branchID).then(function (data) {
        res.json({
            dispatch: data
        });
    });
});
app.post('/add-dispatch/:branchID', function (req, res) {
    SaveDispatchTimes_1.default(req.body).then(function (data) {
        res.json({
            productDispatch: data
        });
    });
});
/*
* User
* */
app.post('/save-user/:branchID/', (function (req, res) {
    AddUsers_1.default(req.body).then(function (data) {
        res.json({
            user: data
        });
    });
}));
app.get('/all-users/', function (req, res) {
    ReadAllUsers_1.default().then(function (data) {
        res.json({
            users: data
        });
    });
});
app.patch('/update-user/', function (req, res) {
    UpdateUser_1.default(req.body).then(function (data) {
        res.json({
            user: data
        });
    });
});
/*
* Device
* */
app.post('/save-device/:branchID', function (req, res) {
    SaveDevice_1.default(req.body).then(function (data) {
        res.json({
            device: data
        });
    });
});
app.patch('/update-device/:id', function (req, res) {
    UpdateDevice_1.default(req.body, req.params.id).then(function (data) {
        res.json({
            device: data
        });
    });
});
app.get('/all-devices/:branchID', function (req, res) {
    AllDevices_2.default(req.params.branchID).then(function (data) {
        res.json({
            devices: data
        });
    });
});
/*
* Carriers
* */
app.post('/save-carrier/', function (req, res) {
    SaveCarrier_1.default(req.body).then(function (data) {
        res.json({
            carrier: data
        });
    });
});
app.post('/save-carrier-type/', function (req, res) {
    SaveCarrierTypes_1.default(req.body).then(function (msg) {
        res.json({
            carrierType: msg
        });
    });
});
app.get('/all-carrier-types/', function (req, res) {
    CarrierTypes_1.default().then(function (data) {
        res.json({
            carrierTypes: data
        });
    });
});
app.get('/all-carriers/', function (req, res) {
    GetAllCarriers_1.default().then(function (data) {
        res.json({
            carriers: data
        });
    });
});
/*
* Gates
*
* */
app.post('/save-gate/', function (req, res) {
    AddGate_1.default(req.body).then(function (data) {
        res.json({
            res: data
        });
    });
});
app.get('/all-gates/', function (req, res) {
    ReadAllGates_1.default().then(function (data) {
        res.json({
            gates: data
        });
    });
});
// app.get('/gate/:id', (req, res) => {
//
// });
/*
* Sections
*
* */
app.post('/save-section/', function (req, res) {
    SaveSections_1.default(req.body).then(function (data) {
        res.json({
            data: data
        });
    });
});
app.post('/save-preset/', function (req, res) {
    SavePresets_1.default(req.body).then(function (data) {
        res.json({
            res: data
        });
    });
});
app.get('/all-presets/', function (req, res) {
    ReadAllGates_1.default().then(function (data) {
        res.json({
            presets: data
        });
    });
});
/*
* DispatchTimes
*
* */
app.post('/orderQue/', function (req, res) {
    SaveOrderQue_1.default(req.body).then(function (data) {
        res.json({
            orderQue: data
        });
    });
});
app.get('/devices/:id/', function (req, res) {
    AllDevices_1.default(req.params.id).then(function (data) {
        res.json({
            devices: data
        });
    });
});
app.patch('/device/:id/', function (req, res) {
    UpdateDevice_1.default(req.body, req.params.id).then(function (data) {
        res.json({
            device: data
        });
    });
});
/*
* Products
* */
app.post('/save-product/', function (req, res) {
    AddProduct_1.default(req.body).then(function (data) {
        res.json({
            product: data
        });
    });
});
app.get('/all-products/', function (req, res) {
    AllProducts_1.default().then(function (data) {
        res.json({
            products: data
        });
    });
});
/*
* ManualEntry
* */
app.post('/save-manual-entry/', function (req, res) {
    AddManualEntry_1.default(req.body).then(function (data) {
        res.json({
            manualEntry: data
        });
    });
});
/*
* Storage Bays
* */
app.post('/save-bay/:id/', function (req, res) {
    SaveBays_1.default(req).then(function (data) {
        res.json({
            res: data
        });
    });
});
io.on('connection', function (client) {
    io.emit('msg', 'Connection Successful!');
    console.log("Client " + .1 + "' -> Connected successfully. :101");
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
    client.on('ping', function (msg) {
        io.emit('pong', 'I got a ping, here\'s a pong!.');
    });
});
server.listen(prod ? process.env.PORT : socketPort, function () {
    console.log('Application startup successful.... :100 \n' +
        ' Application Listening on port ' + socketPort + '... : 100');
});
//# sourceMappingURL=index.js.map