const SerialPort = require('serialport');
const portName = 'COM4';
const baudRate = 9600;

let myPort = new SerialPort(portName, {
    baudRate
})

export default function openPort(type) {
    if (type === 'err') {
        myPort.write('10')
    } else if (type === 'success') {
        myPort.write('20')
    } else if (type === 'alarm') {
        myPort.write('30')
    } else if (type === 'wait') {
        myPort.write('40')
    } else {
        return null;
    }
}