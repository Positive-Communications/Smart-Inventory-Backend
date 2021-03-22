import "reflect-metadata";
import * as http from "http";
import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";


import {
    createConnection, getConnection,
} from "typeorm";

import readAllBays from "./helpers/R/Many/ReadAllBays";
import frisk from "./Auth/middleware";


import CompanyHandler from "./resource.manager/company.manager";
import Index from "./resource.manager/default"
import AuthHandler from "./resource.manager/auth.manager";
import BranchManager from "./resource.manager/branch.manager";
import DispatchManager from "./resource.manager/dispatch.manager";
import UsersManager from "./resource.manager/users.manager";
import DeviceManager from "./resource.manager/device.manager";
import CarrierManager from "./resource.manager/carrer.manager";
import GateManager from "./resource.manager/gate.manager";
import SectionManager from "./resource.manager/section.manager";
import OrderQueManager from "./resource.manager/orderque.manager";
import ProductManager from "./resource.manager/product.manager";
import StorageBayManager from "./resource.manager/bays.manager";
import TagsManager from "./resource.manager/tags.manager";
import addDemo from "./helpers/C/singles/AddDemo";
import Demo from "./entity/Demo";
import Device from "./entity/Device";

const app = express();

const prod = true;

const socketPort = 2000;
const server = http.createServer(app);

const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.options('*', cors());



createConnection(
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
).then(async () => {

    console.log('Database ready... :103');

}).catch(error => console.log(error));





/*
* Home
* */

const index = new Index();

app.get('/', index.home);

/*
* Auth
* */

let auth = new AuthHandler();

app.get('/super-user/', auth.createSuperUser);
app.post('/login/', auth.authenticate);

/*
* Company
* */

const companyHandler = new CompanyHandler();

app.post('/save-company/', companyHandler.createCompany);

app.get('/company/:id/', frisk, companyHandler.getCompanyByID);

app.get('/all-companies/', companyHandler.getAllCompanies)


/*
* Branch
* */

const branchManager = new BranchManager();

app.get('/branch/:id/', frisk, branchManager.summonBranch);

app.get('/all-branches/', frisk, branchManager.getAllBranches);

app.post('/save-branch/', frisk, branchManager.createBranch);

app.patch('/update-branch/:id/', frisk, branchManager.updateBranchFile);

/*
* Dispatch Times
* */

const dispatchManager = new DispatchManager();

app.get('/dispatch/:branchID', frisk, dispatchManager.checkBranchDispatch);

app.post('/add-dispatch/:branchID/', frisk, dispatchManager.createBranchDispatch);

app.post('/new-order/', frisk, dispatchManager.saveOrder);

app.get('/all-orders/', frisk, dispatchManager.getAllOrders);

app.get('/order/:number', frisk, dispatchManager.getOrderByNumber);

app.post('/save-order-que/', frisk, dispatchManager.saveOrderQue);

app.get('/order-que/:id', frisk, dispatchManager.getOrderQue);


/*
* User
* */

const usersManager = new UsersManager();


app.get('/all-users/', frisk, usersManager.summonAllUsers);

app.post('/save-user/:branchID/', frisk, usersManager.registerUser);

app.patch('/update-user/', frisk, usersManager.updateUserDetails);


/*
* Device
* */

const deviceManager = new DeviceManager();

app.post('/save-device/:deviceType', deviceManager.registerDevice);

app.patch('/update-device/:id', frisk, deviceManager.editDevice);

app.get('/all-devices/', deviceManager.availAllDevices);



/*
* Carriers
* */

const carrierManager = new CarrierManager();

app.post('/save-carrier/', frisk, carrierManager.registerCarrier);
app.post('/save-carrier-type/', frisk, carrierManager.saveCarrierType);

app.get('/all-carrier-types/', frisk, carrierManager.getAllCarrierTypes);
app.get('/all-carriers/', frisk, carrierManager.summonAllCarrierTypes);

app.post('/move/', frisk, carrierManager.moveProducts);
app.get('/all-moves/', frisk, carrierManager.getAllMoves)

app.get('/moves/', frisk, carrierManager.getMovesByGateTo);


/*
* Gates
*
* */

const gateManager = new GateManager();

app.post('/save-gate/', frisk, gateManager.registerGate);

app.get('/all-gates/', frisk, gateManager.availAllGates);
app.get('/all-products-history/:id', frisk, gateManager.readHistoryByGate)



app.patch('/update-gate/:id/', frisk, gateManager.updateGate)

app.delete('/gate/:id/', frisk, gateManager.deleteGate)

// app.get('/gate/:id/', gateManager.readGate)


/*
* Sections
*
* */

const sectionManager = new SectionManager()

app.post('/save-section/', frisk, sectionManager.registerSection);
app.post('/save-preset/', frisk, sectionManager.savePreset);
app.post('/save-preset-meta', frisk, sectionManager.savePresetMeta);

app.patch('/update-preset-meta/:id', frisk, sectionManager.updatePresetMeta);

app.get('/all-presets/', frisk, sectionManager.getAllPresets);
app.get('/all-sections/', frisk, sectionManager.getAllSections);



/*
* Tags
*
* */


const tagsManager = new TagsManager();


app.post('/new-tags/:id', frisk, tagsManager.saveNewTags);

app.get('/tag/:epc', frisk, tagsManager.getTagByEPC);
app.get('/all-assigned-tags/', frisk, tagsManager.getAllUnasignedTags);

app.get('/all-transactions/', tagsManager.getAllTransactions)



/*
* OrderQue
*
* */

const orderQueManager = new OrderQueManager()

app.post('/orderQue/', frisk, orderQueManager.saveOrderQue);


/*
* Products
* */

const productManager = new ProductManager()

app.get('/all-product-units/', frisk, productManager.getAllUnits);
app.get('/all-products/', frisk, productManager.getAllProducts);
app.get('/all-units/', frisk, productManager.getAllUnits)
app.get('/section/:id/products/', frisk, productManager.getProductsBySection)

app.post('/scan/', frisk, productManager.proccessScan)
app.post('/save-pallet/', frisk, productManager.addPallet);
app.post('/save-product/', frisk, productManager.saveProduct);
app.post('/save-manual-entry/', frisk, productManager.saveManualEntry);
app.post('/save-unit/', frisk, productManager.saveUnit);
app.post('/save-history/', frisk, productManager.saveProductHistory);





/*
* Storage Bays
* */

const storageBayManager = new StorageBayManager();

app.post('/save-bay/:id/', frisk, storageBayManager.createBays);

app.get('/all-bays/', frisk, readAllBays);

app.get('/all-stores/', frisk, storageBayManager.getAllStores)



app.post("/expected/", (req, res) => {
    io.emit("expected", req.body)
})

app.post("/demo/", async (req, res) => {
    res.json({ demo: await addDemo(req.body) });
})

app.get("/demos/", async (req, res) => {
    res.json({ demos: await getConnection().manager.find(Demo) })
});

io.on('connection', socket => {
    io.emit('expected', 'Connection Successful!');

    socket.on("heyhey", async msg => {
        io.emit('device', await getDeviceByUUID(msg.id))
    })

    socket.on("readying_loading", msg => {
        // io.emit("onGreen");
    })

    socket.on("started", msg=>{
        io.emit("offRed");
        io.emit("onGreen")
    })

    socket.on("paused", msg=>{
        io.emit("onRed")
        io.emit("offGreen")
    })

    socket.on("warn", msg=>{
        io.emit("onWarn")
        io.emit("alarm")
    })

    socket.on("handHeld", msg=>{
        console.log(msg);
        io.emit("count");
    })

    socket.on("okay", msg=>{
        io.emit("offGreen");
        io.emit("onRed")
    })
    socket.on("fixed", msg=>{
        console.log(msg)
        io.emit("count");
    })

    socket.on("sensor", msg=>{
        io.emit("count")
    })

    socket.on("cancel", msg=>{
        io.emit("onRed")
        io.emit("offGreen")
    })

});

const getDeviceByUUID = async (id) => {
    return  (await getConnection().manager.find(Device)).filter(device => device.uuid == id)[0];
}


server.listen(prod ? process.env.PORT : socketPort, () => {
    console.log('Application startup successful.... :100 \n' +
        ' Application Listening on port ' + socketPort + '... : 100');
});
