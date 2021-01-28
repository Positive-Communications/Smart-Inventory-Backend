import "reflect-metadata";
import * as http from "http";
import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";


import {DummyProduct} from "./Data/dummy";

import {createConnection} from "typeorm";
import Items from "./entity/Items";

const app = express();
const socketPort = 2021;
const server = http.createServer(app);

const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
});

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let databaseManager;

createConnection().then(async connection => {
    databaseManager = connection;

    let count = ['e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e9', 'e10', 'e11', 'e12',];

    count.forEach(item => {
        let data = DummyProduct();
        const _item = new Items();
        _item.name = `Product ${item}`;
        _item.description = data.description;
        _item.category = data.category;
        _item.carrierStatus = data.carrier_status;
        _item.status = data.status;
        _item.type = data.type;
        _item.manualEntry = data.manual_entry;
        _item.pallet = data.pallet;
        _item.tag = item;
        _item.quantity = 20;
        _item.carrierNumber = data.carrier_number;
        _item.expiry = data.expiry;
        _item.dateTime = data.date_time;
    });

}).catch(error => console.log(error));

async function saveToDatabase(item) {
    await databaseManager.manager.save(item)
    const items = await databaseManager.manager.find(Items);
    console.log("Loaded items: ", items);
}


app.get('/', ((req, res) => {
    res.json({
        Text: 'App is running...'
    });
}));


io.on('connection', client => {
    console.log('A new connection detected! Waiting for scanner...')
    client.on('tag', msg => {
        io.emit('item', 'This is an item placeholder')
    })
});


server.listen(process.env.PORT, () => {
    console.log('🎉Application startup successful: ' + socketPort)
});


// const user = new These();
// user.name = "Timber";
// user.finally = "Saw";
// user.expiry = "expired";
// await connection.manager.save(user);
// console.log("Saved a new user with id: " + user.id);
//
// console.log("Loading users from the database...");
// const users = await connection.manager.find(These);
// console.log("Loaded users: ", users);
