import "reflect-metadata";
import * as http from "http";
import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";


import {
    createConnection,
} from "typeorm";

import saveUserPrivileges from "./helpers/C/SaveUserPrivileges";
import addUsers from "./helpers/C/AddUsers";
import saveCarrier from "./helpers/C/SaveCarrier";
import saveCompany from "./helpers/C/saveCompany";
import saveBays from "./helpers/C/SaveBays";
import saveCarrierTypes from "./helpers/C/SaveCarrierTypes";
import saveDispatchTimes from "./helpers/C/SaveDispatchTimes";
import savePresets from "./helpers/C/SavePresets";
import AddGate from "./helpers/C/AddGate";
import saveSections from "./helpers/C/SaveSections";
import saveBranches from "./helpers/C/saveBranches";
import getBranchInfo from "./helpers/R/Custom/BranchInfo";
import getAllBranches from "./helpers/R/Many/AllBranches";
import saveDevice from "./helpers/C/SaveDevice";
import saveProductTag from "./helpers/C/saveProductTag";
import saveProduct from "./helpers/C/AddProduct";
import addManualEntry from "./helpers/C/AddManualEntry";
import updateUser from "./helpers/U/ByID/UpdateUser";
import saveOrderQue from "./helpers/C/SaveOrderQue";

const app = express();

const socketPort = 2022;
const server = http.createServer(app);

const io = require('socket.io')(server, {
    cors: {
        origin: '/*',
        methods: ['GET', 'POST']
    }
});

const EventSource = require('eventsource');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

createConnection().then(async connection => {

    console.log('Database ready... :103');

}).catch(error => console.log(error));


app.get('/', ((req, res) => {
    res.json({
        Text: 'The application started successfully... :100'
    });
}));


app.post('/save-company/', ((req, res) => {
    saveCompany(req.body).then(data => {
        res.json({
            data: data
        });
    });
}));

app.post('/save-branch/', (req, res) => {
    saveBranches(req.body).then(data => {
        res.json({
            branch: data
        });
    });
});

app.post('/save-gate/', (req, res) => {
    saveSections(req.body).then(data => {
        res.json({
            gate: data
        });
    });
});


app.post('/save-device/', (req, res) => {
    saveDevice(req.body).then(data => {
        res.json({
            device: data
        });
    });
});


app.get('/branch/:id', (req, res) => {
    getBranchInfo(req.params.id).then(data => {
        res.json({
            branch: data
        });
    });
});

app.get('/branches/:id', (req, res) => {
    console.log(req.params.id)
    getAllBranches(req.params.id).then(data => {
        res.json({
            branches: data
        });
    });
});

app.post('/save-carrier-type/', (req, res) => {
    saveCarrierTypes(req.body).then(msg => {
        res.json({
            carrierType: msg
        });
    });
});


app.post('/save-user/:id/', ((req, res) => {
    let user;
    let privs
    addUsers(req.body.user, req.params.id).then(data => {
        user = data;
        saveUserPrivileges(user.id, req.body.privs).then(data => {
            privs = data;
            let returnData = user;
            returnData.privileges = privs
            res.json(returnData)
        });
    });
}));

app.post('/save-section/', (req, res) => {
    saveSections(req.body).then(data => {
        res.json({
            data: data
        });
    });
});


app.post('/save-gate/', (req, res) => {
    AddGate(req.body).then(data => {
        res.json({
            res: data
        });
    });
});

app.post('/save-preset/', (req, res) => {
    savePresets(req.body).then(data => {
        res.json({
            res: data
        });
    });

});

app.post('/save-dispatch-times/', ((req, res) => {
    saveDispatchTimes(req.body).then(data => {
        res.json({
            res: data
        });
    });
}));

app.post('/save-bay/:id/', (req, res) => {
    saveBays(req).then(data => {
        res.json({
            res: data
        });
    });
});

app.post('/save-product-tag/', (req, res) => {
    saveProductTag(req.body).then(data => {
        res.json({
            productTag: data
        });
    });
});


app.post('/save-product/', (req, res) => {
    saveProduct(req.body).then(data => {
        res.json({
            product: data
        });
    });
});


app.post('/save-carriers/', (req, res) => {
    saveCarrier(req.body.data).then(data => {
        res.json({
            carrier: data
        });
    });
});


app.post('/save-manual-entry/', (req, res) => {
    addManualEntry(req.body).then(data => {
        res.json({
            manualEntry: data
        });
    });
});

app.patch('/update-user/', (req, res) => {
    updateUser(req.body).then(data => {
        res.json({
            user: data
        });
    });
});


app.get('/branches/:id/', (req, res) => {
    getAllBranches(req.params.id).then(data => {
        res.json({
            branches: data
        });
    });
});

app.post('/orderQue/', (req, res) => {
    saveOrderQue(req.body).then(data=>{
        res.json({
            orderQue: data
        })
    })
})


io.on('connection', client => {
    io.emit('msg', 'Connection Successful!');
    console.log(`Client ${.1}' -> Connected successfully. :101`)


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

    client.on('ping', msg => {
        io.emit('pong', 'I got a ping, here\'s a pong!.')
    })

});


server.listen(socketPort, () => {
    console.log('Application startup successful.... :100 \n' +
        ' Application Listening on port ' + socketPort + '... : 100');
});
