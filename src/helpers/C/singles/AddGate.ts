import Gate from "../../../entity/Gate";
import {getConnection} from "typeorm";

export default async function addGate(data) {

    let gate = new Gate();

    await gate.createItself(data);

    const valid = await gate.isLegit();

    try {
        if (valid)
            return await
                getConnection().manager.save(gate);
    } catch (e) {
        console.log(e);
    }
}

let config = {
    name: "",
    readerAddress: "",
    numberOfAnts: "",
    antToDetectOutgoing: "",
    antToDetectIncoming: "",
    ant1: "",
    ant2: "",
    ant3: "",
    ant4: "",
    ant1Power: "",
    ant2Power: "",
    ant3Power: "",
    ant4Power: "",
    role: "",
    branchID: "",
}