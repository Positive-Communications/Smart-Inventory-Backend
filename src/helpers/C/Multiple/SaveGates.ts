import addGate from "../singles/AddGate";

export default async function saveGates(gateArray) {

    let gates = [];

    for (const data of gateArray) {
        let gate = await addGate(data);
        gates.push(gate);
    }

    return gates;
}