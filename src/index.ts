import "reflect-metadata";
import * as http from "http";
import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";


import {
    createConnection,
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

const app = express();

const prod = false;

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

app.post('/save-device/:branchID', frisk, deviceManager.registerDevice);

app.patch('/update-device/:id', frisk, deviceManager.editDevice);

app.get('/all-devices/:branchID/', frisk, deviceManager.availAllDevices);



/*
* Carriers
* */

const carrierManager = new CarrierManager();

app.post('/save-carrier/', frisk, carrierManager.registerCarrier);
app.post('/save-carrier-type/', frisk, carrierManager.saveCarrierType);

app.get('/all-carrier-types/', frisk, carrierManager.getAllCarrierTypes);
app.get('/all-carriers/', frisk, carrierManager.summonAllCarrierTypes);


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


app.post('/new-tags/', frisk, tagsManager.saveNewTags);

app.get('/tag/:epc', frisk, tagsManager.getTagByEPC);
app.get('/all-unassigned-tags/', frisk, tagsManager.getAllUnasignedTags);





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


io.on('connection', client => {
    io.emit('msg', 'Connecption Successful!');
    console.log(`Client ${.1}' -> Connected successfully. :101`)

    io.on('tag', msg => {
        io.emit('user', 'I received the tag. I will be a user');
    })


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

    client.on('ping', () => {
        io.emit('pong', 'I got a ping, here\'s a pong!.')
    })

});


server.listen(prod ? process.env.PORT : socketPort, () => {
    console.log('Application startup successful.... :100 \n' +
        ' Application Listening on port ' + socketPort + '... : 100');
});
