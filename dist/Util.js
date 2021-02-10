"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SerialPort = require('serialport');
var portName = 'COM4';
var baudRate = 9600;
var myPort = new SerialPort(portName, {
    baudRate: baudRate
});
function openPort(type) {
    if (type === 'err') {
        myPort.write('10');
    }
    else if (type === 'success') {
        myPort.write('20');
    }
    else if (type === 'alarm') {
        myPort.write('30');
    }
    else if (type === 'wait') {
        myPort.write('40');
    }
    else {
        return null;
    }
}
exports.default = openPort;
//# sourceMappingURL=Util.js.map