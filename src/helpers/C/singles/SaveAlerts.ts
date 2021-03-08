import Alerts from "../../../entity/Alerts";
import {getConnection} from "typeorm";
import Sections from "../../../entity/Sections";

export default async function saveAlert(_alert, _section){

    let alert = new Alerts();
    // alert.name = _alert.name;
    alert.type = _alert.type;
    alert.severity = _alert.severity;

}