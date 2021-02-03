import "reflect-metadata";
import * as http from "http";
import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";


import {DummyProduct} from './Data/dummy';

import {
    ConnectionOptions,
    createConnection,
    createQueryBuilder,
    getConnection,
    getManager,
    getRepository,
    PrimaryGeneratedColumn
} from "typeorm";

import Items from "./entity/Items";
import Alerts from "./entity/Alerts";
import Sections from "./entity/Sections";
import Carrier from "./entity/Carrier";
import axios from "axios";
import {log} from "util";
import openPort from "./Util";
import Company from "./entity/Company";
import Product from "./entity/Product";
import Gate from "./entity/Gate";
import Device from "./entity/Device";
import Branch from "./entity/Branch";
import Bays from "./entity/Bays";
import Presets from "./entity/Presets";

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

    // await saveCompany().then(res => {
    //     branchesBuilder().then(res => {
    //         addSectionsToBranch().then(res => {
    //             saveGatesDevicesToSections().then(res => {
    //                 console.log(res);
    //             })
    //         })
    //     })
    // })

    // await saveGatesDevicesToSections();
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


app.get('/saveCompany/', ((req, res) => {
    saveCompany().then(data => {
        res.json({
            data: data
        })
    })
}))

app.get('/saveBranch/', ((req, res) => {
    branchesBuilder().then(data => {
        branchesBuilder().then(data => {
            res.json({
                data: data
            })
        })
    })
}))

app.get('/saveGates/', ((req, res) => {
    buildGates().then(data => {
        res.json({
            success: '200'
        })
    })
}))


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


app.post('/save-bays/:id/', (req, res) => {
    buildBays().then(bay => {
        res.json({
            sections: bay
        })
    })
})

app.post('/save-as-preset/:id', (req, res) => {
    buildPresets(req.params.id, req.body).then(data => {
        console.log(data)
        res.json({
            res: data
        })
    })
})


app.post('/saveSection/', (req, res) => {
    addSectionsToGates().then(data => {
        res.json({
            data: data
        })
    })
})


app.post('/create-gate/:id', (req, res) => {
    buildGates().then(data => {
        res.json({
            res: data
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
        return await getRepository(Branch)
            .createQueryBuilder("branch")
            .leftJoinAndSelect('branch.company', 'company')
            .leftJoinAndSelect('branch.gates', 'gates')
            .leftJoinAndSelect('gates.accessTo', 'sections')
            .leftJoinAndSelect('gates.alerts', 'alerts')
            .leftJoinAndSelect('branch.sections', 'branchSections')
            .leftJoinAndSelect('branchSections.gates', 'accessGates')
            // .leftJoinAndSelect('accessGates.gates', 'sectionGates')
            // .leftJoinAndSelect('sections.devices', 'devices')
            // .leftJoinAndSelect('sections.alerts', 'alerts')
            .where('branch.id = :id', {id: 1})
            .getOne();
    } catch (err) {
        console.log(err)
    }
}

async function getAllBranches(company) {
    try {
        return await getRepository(Branch)
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

async function addSectionsToGates() {
    const data = [
        {name: 'Store 1', role: 'storage', hasErrors: false, capacity: 10},
        {name: 'Store 2', role: 'storage', hasErrors: false, capacity: 20},
        {name: 'Store 3', role: 'storage', hasErrors: true, capacity: 30},
        {name: 'Section 1', role: 'packaging', hasErrors: true, capacity: 40},
        {name: 'Section 2', role: 'packaging', hasErrors: false, capacity: 50},
        {name: 'Section 3', role: 'packaging', hasErrors: false, capacity: 60},
        {name: 'Dispatch', role: 'dispatch', hasErrors: true, capacity: 70},
    ]

    const branch = await getConnection()
        .createQueryBuilder()
        .select('branch')
        .from(Branch, 'branch')
        .where('branch.id = :id', {id: 1})
        .getOne();


    let sections = [];

    try {
        for (const section of data) {
            let _section = new Sections();
            _section.role = section.role;
            _section.hasErrors = section.hasErrors
            _section.name = section.name;
            _section.capacity = section.capacity;
            _section.branch = branch;
            sections.push(_section);
            await databaseManager.manager.save(_section);
        }
        return sections;
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
            let _branch = new Branch();
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
        return {success: 200}
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
        return await databaseManager.manager.save(company)
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


async function buildGates() {


    const branch = await getConnection()
        .createQueryBuilder()
        .select('branch')
        .from(Branch, 'branch')
        .where('branch.id =:id', {id: 1})
        .getOne();


    const gates = [
        {name: 'A', role: 'storage'},
        {name: 'B', role: 'packaging'},
        {name: 'C', role: 'dispatch'},
        {name: 'D', role: 'storage'},
        {name: 'F', role: 'packaging'},
        {name: 'G', role: 'dispatch'}

    ]
    gates.forEach(gate => {
        let _gate = new Gate();
        _gate.name = gate.name;
        _gate.role = gate.role;
        _gate.branch = branch;
        _gate.allowManual = true;
        _gate.allowEmpty = true;
        _gate.verifyByHandheld = true;
        _gate.verifyNotTrackedByRFID = false;
        _gate.checkContinuouslyForUnauthorized = true;
        _gate.doNotAllowRemoved = true;
        _gate.useForDispatchOrReceiving = true;
        _gate.allowDispatchForAllOrders = true;
        _gate.showProductCountError = true;
        _gate.allowEmptyPallets = true;
        _gate.getToDetermineItemPosition = true;
        _gate.verifyCarrierIsEmpty = true;
        _gate.isaActive = true;
        saveGate(_gate)
    })


}

async function editBranch(data) {
    try {
        let company = await databaseManager
            .getRepository(Company)
            .createQueryBuilder('company')
            .where('company.id =:id', {id: data.company})
            .getOne();
        let branch = await databaseManager
            .getRepository(Branch)
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
            .update(Branch)
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


async function saveBay(bay) {
    try {
        await databaseManager.manager.save(bay)
        console.log(bay)
    } catch (e) {
        console.log(e)
    }
}


async function buildBays() {
    try {
        const sections = await getConnection()
            .createQueryBuilder()
            .select('section')
            .from(Sections, 'section')
            .leftJoinAndSelect('section.branch', 'branch')
            .where('branch.id = :id', {id: 1})
            .getMany();

        let bays = ['Bay A', 'Bay B', 'Bay C']

        sections.forEach(sect => {
            bays.forEach(_bay => {
                let bay = new Bays()
                bay.type = _bay;
                bay.role = 'Storage';
                bay.isActive = true;
                bay.sections = sect;
                saveBay(bay);
            })
        })
        return sections;
    } catch (e) {
        console.log(e)
    }
}

async function buildPresets(gateID, data) {
    const packagingName = data.packaging;
    const preset = data.preset;
    const gateId = parseInt(gateID)


    try {
        const gate = await getConnection()
            .createQueryBuilder()
            .select('gate')
            .from(Gate, 'gate')
            .where('gate.id = :id', {id: gateId})
            .getOne();
        const section = new Sections()
        section.role = gate.role;
        section.name = packagingName;
        section.capacity = 100;
        section.hasErrors = false;
        try {
            let _section = await databaseManager.manager.save(section)
            await getConnection()
                .createQueryBuilder()
                .update(Gate)
                .set({
                    accessTo: _section
                })
                .where('id =:id', {id: gateId})
                .execute()

            let _preset = new Presets();
            _preset.presetName = preset;
            _preset.section = section
            return savePreset(_preset)
        } catch (e) {
            console.log(e)
        }

    } catch (e) {
        console.log(e)
    }
}


async function savePreset(preset) {
    try {
        return await databaseManager.manager.save(preset)
    } catch (e) {
        console.log(e)
    }
}


// async function buildDevices(){
//     try {
//         for (const section of sections) {
//             const _section = await getConnection()
//                 .createQueryBuilder()
//                 .select('section')
//                 .from(Sections, 'section')
//                 .where('section.id = :id', {id: 11})
//                 .getOne();
//
//             const devices = ['1', 'B', 'C']
//             devices.forEach(device => {
//                 let _device = new Device();
//                 _device.name = device;
//                 _device.role = _section.role;
//                 _device.allowPalletsToBeCountedManually = true;
//                 _device.doNotAllowRemovalOfEmptyPallet = true;
//                 _device.verifyStoredUsingHandHeld = true;
//                 _device.showProductCountError = true;
//                 _device.doNotAllowRemoval = true;
//                 _device.verifyProductNotTrackedByRFID = true;
//                 _device.automaticallyActivateRecallProductIfRequired = true;
//                 _device.recordEmptyPallets = true;
//                 _device.dispatchingOrReceiving = true;
//                 saveDevice(_device)
//             })
//
//         }
//     } catch (e) {
//         console.log(e)
//     }
// }
