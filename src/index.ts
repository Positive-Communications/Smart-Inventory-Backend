import "reflect-metadata";
import * as http from "http";
import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";


import {DummyProduct} from './Data/dummy';

import {
    createConnection,
    createQueryBuilder,
    getConnection,
    getManager,
    getRepository,
    PrimaryGeneratedColumn
} from "typeorm";

import Items from "./entity/Items";
import Alerts from "./entity/Alerts";
import _Branch from "./entity/_Branch";
import Sections from "./entity/Sections";
import Carrier from "./entity/Carrier";
import axios from "axios";
import {log} from "util";
import openPort from "./Util";
import Company from "./entity/Company";
import Product from "./entity/Product";
import Gate from "./entity/Gate";
import Device from "./entity/Device";

const app = express();
const socketPort = 2022;
const server = http.createServer(app);

const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
});

const EventSource = require('eventsource');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let databaseManager;

createConnection().then(async connection => {
    databaseManager = connection;

    console.log('Database ready... :103')

    // saveCompany().then(res => {
    //     branchesBuilder().then(res => {
    //         addSectionsToBranch().then(res => {
    //             saveGatesDevicesToSections().then(res => {
    //                 console.log(res);
    //             })
    //         })
    //     })
    // })

    // addSectionsToBranch()
    // saveGatesDevicesToSections();

}).catch(error => console.log(error));


async function getItem(tag) {


    try {
        return await getRepository(Items)
            .createQueryBuilder('item')
            .leftJoinAndSelect('item.carrier', 'carrier')
            .leftJoinAndSelect('item.from', 'from')
            .leftJoinAndSelect('item.destination', 'destination')
            .where('item.tag = :tag', {tag: tag})
            .getOne();
    } catch (err) {
        console.log(err)
    }
}


app.get('/', ((req, res) => {
    res.json({
        Text: 'The application started successfully... :100'
    });
}));


app.get('/branch/id', (req, res) => {
    getBranchByCode('A').then(data => {
        res.json({
            branch: data
        })
    })
})

app.get('/branches', (req, res) => {
    getAllBranches(1).then(data => {
        console.log(data)
        res.json({
            branches: data
        })
    }).catch(e => {
        console.log(e);
    })
})

app.post('/edit-branch/:id/', (req, res) => {
    editBranch(req.body).then(data => {
        res.send({
            data
        })
    })
})

io.on('connection', client => {

    console.log(`Client ${.1}' -> Connected successfully. :101`)

    let Tags = [];

    try {
        const readerConnection = new EventSource("http://localhost:8080/subscribe", {
            withCredentials: true,
        });
        readerConnection.onopen = function () {
            console.log('Reader connected!... :104')
            axios.get('http://localhost:8080/start-inventory').then(res => {
                console.log('Inventory has been started sucessfully... :105')
            }).catch(err => {
                console.log('Couldn\'t start inventory... :203');
            });
        }
        readerConnection.onmessage = function (event) {
            if (Tags.includes(event.data)) {
                console.log('Tag already scanned..')
            } else {
                Tags.push(event.data)
                getItem(event.data).then(data => {
                    io.emit('item', data);
                    if (data.hasErrors) {
                        openPort('err');
                        console.log('Happened here....')
                    }
                    console.log(data)
                });
            }
        }
    } catch (err) {
        console.log(err)
    }

    client.on('tag', msg => {
        getItem(msg).then(data => {
            io.emit('item', data);
            console.log(data)
        });
    })
});


server.listen(socketPort, () => {
    console.log('Application startup successful.... :100 \n' +
        ' Application Listening on port ' + socketPort + '... : 100');
});

async function getBranchByCode(code) {
    try {
        return await getRepository(_Branch)
            .createQueryBuilder("branch")
            .leftJoinAndSelect('branch.company', 'company')
            .leftJoinAndSelect('branch.sections', 'sections')
            .leftJoinAndSelect('sections.gates', 'gates')
            .leftJoinAndSelect('sections.devices', 'devices')
            .leftJoinAndSelect('sections.alerts', 'alerts')
            .where('branch.code = :code', {code: code})
            .getOne();
    } catch (err) {
        console.log(err)
    }
}

async function getAllBranches(company) {
    try {
        return await getRepository(_Branch)
            .createQueryBuilder('branch')
            .leftJoinAndSelect('branch.company', 'company')
            .leftJoinAndSelect('branch.sections', 'sections')
            .leftJoinAndSelect('sections.gates', 'gates')
            .where('branch.company.id =:company', {company: company})
            .getMany();
    } catch (e) {
        console.log(e)
    }
}

async function addSectionsToBranch() {
    const data = [
        {name: 'Bay 1', role: 'storage', capacity: 10},
        {name: 'Bay 2', role: 'storage', capacity: 20},
        {name: 'Bay 3', role: 'storage', capacity: 30},
        {name: 'Section 1', role: 'packaging', capacity: 40},
        {name: 'Section 2', role: 'packaging', capacity: 50},
        {name: 'Section 3', role: 'packaging', capacity: 60},
        {name: 'Dispatch', role: 'dispatch', capacity: 70},
    ]

    const branch = await getConnection()
        .createQueryBuilder()
        .select('branch')
        .from(_Branch, 'branch')
        .where('branch.code = :code', {code: 'A'})
        .getOne();

    console.log(branch)

    try {
        data.forEach(section => {
            let _section = new Sections();
            _section.role = section.role;
            _section.name = section.name;
            _section.capacity = section.capacity;
            _section.branch = branch;
            databaseManager.manager.save(_section);
            console.log(_section)
        })
    } catch (err) {
        console.log(err)
    }
}


async function saveItems(item) {
    try {
        item = await databaseManager.manager.save(item)
    } catch (err) {
        console.log(err)
    }
}


async function createItems() {

    let from = await getConnection()
        .createQueryBuilder()
        .select('section')
        .from(Sections, 'section')
        .where('section.id =:id', {id: 5})
        .getOne();


    let destination = await getConnection()
        .createQueryBuilder()
        .select('section')
        .from(Sections, 'section')
        .where('section.id =:id', {id: 1})
        .getOne();

    let carrier = new Carrier();
    carrier.name = 'ForkLift';
    carrier.type = '';
    carrier.status = 'Moving'
    await databaseManager.manager.save(carrier);

    let items = DummyProduct();

    // items.forEach(data => {
    //     const _item = new Product();
    //     _item.name = `Product ${data.tag}`;
    //     _item.description = data.description;
    //     _item.category = data.category;
    //     _item.carrier = carrier;
    //     _item.carrierStatus = 'Available in Carrier'
    //     _item.status = data.status;
    //     _item.type = data.type;
    //     _item.manualEntry = data.manual_entry;
    //     _item.pallet = data.pallet;
    //     _item.tag = data.tag;
    //     _item.quantity = 20;
    //     _item.carrierNumber = data.carrier_number;
    //     _item.expiry = data.expiry;
    //     _item.dateTime = data.date_time;
    //     _item.from = from;
    //     _item.destination = destination;
    //     _item.hasErrors = data.hasErrors
    //     saveItems(_item)
    // });
}


async function saveBranch(branch) {
    try {
        await databaseManager.manager.save(branch)
        console.log(branch)
    } catch (err) {
        console.log(err)
    }
}


async function branchesBuilder() {
    try {
        let company = await getConnection()
            .createQueryBuilder()
            .select('company')
            .from(Company, 'company')
            .where('company.id =:id', {id: 1})
            .getOne();

        let branches = [
            {city: 'Nairobi', isActive: true, info: 'Industrial Area', code: 'A', streetRoad: 'Road A, Inda'},
            {city: 'Naivasha', isActive: false, info: 'Town', code: 'B', streetRoad: 'Road B, Town'},
            {city: 'Mombasa', isActive: true, info: '', code: 'Old Town', streetRoad: 'Old Town Road'},
            {city: 'Mbita', isActive: false, info: 'Rusinga', code: 'D', streetRoad: 'Rusinga MainLand'},
        ]
        branches.forEach(branch => {
            let _branch = new _Branch();
            _branch.code = branch.code;
            _branch.info = branch.city;
            _branch.city = branch.city
            _branch.isActive = branch.isActive;
            _branch.phone = '0793871876';
            _branch.email = 'bryodiiidah@gmail.com';
            _branch.company = company;
            _branch.streetRoad = branch.streetRoad
            saveBranch(_branch)
        })
    } catch (err) {
        console.log(err)
    }

}

async function saveCompany() {
    try {
        let company = new Company();
        company.name = 'Positive Communications';
        company.headOffice = 'Nairobi';
        company.email = 'bryodiiidah@gmail.com';
        company.streetRoad = 'Parklands';
        company.primaryNumber = '0793871876';
        company.secondaryNumber = '0746551580';
        await databaseManager.manager.save(company)
        console.log(company)
    } catch (err) {
        console.log(err)
    }
}

async function saveGate(gate) {
    try {
        await databaseManager.manager.save(gate);
        console.log(gate);
    } catch (err) {
        console.log(err)
    }
}

async function saveDevice(device) {
    try {
        await databaseManager.manager.save(device)
    } catch (e) {
        e.toString()
    }
}

async function buildAlerts() {
    const sections = [11, 3, 13, 6, 9];


}

async function saveAlerts() {
    const alert = new Alerts();
    alert.name = 'Warning';
    alert.type = 'warning';
    await databaseManager.manager.save(alert)

    try {
        // await
        // createQueryBuilder()
        //     .relation(Items, 'alerts')
        //      .add(alert)
    } catch (err) {
        console.log(err)
    }
}

//
// async function saveGatesDevicesToSections() {
//
//     const sections = [11, 12, 10, 13, 8, 14, 9];
//
//     // for (const section of sections) {
//     const _section = await getConnection()
//         .createQueryBuilder()
//         .select('section')
//         .from(Sections, 'section')
//         .where('section.id = :id', {id: section})
//         .getOne();
//
//     const gates = [
//         {name: 'A'},
//         {name: 'B'},
//         {name: 'C'}
//     ]
//     gates.forEach(gate => {
//         let _gate = new Gate();
//         _gate.name = gate.name;
//         _gate.role = _section.role;
//         _gate.accessTo = _section;
//         _gate.allowManual = true;
//         _gate.allowEmpty = true;
//         _gate.verifyByHandheld = true;
//         _gate.verifyNotTrackedByRFID = false;
//         _gate.checkContinuouslyForUnauthorized = true;
//         _gate.doNotAllowRemoved = true;
//         _gate.useForDispatchOrReceiving = true;
//         _gate.allowDispatchForAllOrders = true;
//         _gate.showProductCountError = true;
//         _gate.allowEmptyPallets = true;
//         _gate.getToDetermineItemPosition = true;
//         _gate.verifyCarrierIsEmpty = true;
//         _gate.isaActive = true;
//         saveGate(_gate)
//     })
// }

//     try {
//         // for (const section of sections) {
//         const _section = await getConnection()
//             .createQueryBuilder()
//             .select('section')
//             .from(Sections, 'section')
//             .where('section.id = :id', {id: 11})
//             .getOne();
//
//         const devices = ['1', 'B', 'C']
//         devices.forEach(device => {
//             let _device = new Device();
//             _device.name = device;
//             _device.accessTo = _section;
//             _device.role = _section.role;
//             _device.allowPalletsToBeCountedManually = true;
//             _device.doNotAllowRemovalOfEmptyPallet = true;
//             _device.verifyStoredUsingHandHeld = true;
//             _device.showProductCountError = true;
//             _device.doNotAllowRemoval = true;
//             _device.verifyProductNotTrackedByRFID = true;
//             _device.automaticallyActivateRecallProductIfRequired = true;
//             _device.recordEmptyPallets = true;
//             _device.dispatchingOrReceiving = true;
//             saveDevice(_device)
//         })
//
//         // }
//     } catch (e) {
//         console.log(e)
//     }
// }

async function editBranch(data) {
    try {
        let company = await databaseManager
            .getRepository(Company)
            .createQueryBuilder('company')
            .where('company.id =:id', {id: data.company})
            .getOne();
        let branch = await databaseManager
            .getRepository(_Branch)
            .createQueryBuilder('branch')
            .where('branch.id =:id', {id: data.branchID})

        if (company.name == data.branch.companyName) {
            console.log('Company name stays')
        } else {
            await getConnection()
                .createQueryBuilder()
                .update(Company)
                .set({name: data.branch.companyName})
                .where('id =:id', {id: data.company})
                .execute();
        }

        await getConnection()
            .createQueryBuilder()
            .update(_Branch)
            .set({
                city: data.branch.city,
                streetRoad: data.branch.road,
                phone: data.branch.phone,
                email: data.branch.email
            })
            .where('id =:id', {id: data.branch.id})
            .execute();

        return {success: 200}

    } catch (e) {
        console.log(e)
    }
}

