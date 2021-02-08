import {getRepository} from "typeorm";
import Branch from "../../../entity/Branch";

export default async function getBranchInfo(branchId){
    try {
        return await getRepository(Branch)
            .createQueryBuilder("branch")
            .leftJoinAndSelect('branch.company', 'company')
            .leftJoinAndSelect('branch.gates', 'gates')
            // .leftJoinAndSelect('branch.dispatchTimes', 'dispatch')
            // .leftJoinAndSelect('gates.accessTo', 'sections')
            // .leftJoinAndSelect('gates.alerts', 'alerts')
            .leftJoinAndSelect('branch.sections', 'branchSections')
            .leftJoinAndSelect('branch.users', 'users')
            // .leftJoinAndSelect('users.carrier', 'carriers')
            // .leftJoinAndSelect('carriers.user', 'carrierUser')
            // .leftJoinAndSelect('carriers.type', 'carrierTypes')
            // .leftJoinAndSelect('users.privileges', 'privileges')
            // .leftJoinAndSelect('branchSections.gates', 'accessGates')
            // .leftJoinAndSelect('branchSections.presets', 'presets')
            // .leftJoinAndSelect('presets.section', 'presetSection')
            // .leftJoinAndSelect('sections.devices', 'devices')
            .leftJoinAndSelect('branch.stores', 'stores')
            // .leftJoinAndSelect('stores.bays', 'bays')
            // .leftJoinAndSelect('bays.store', 'bayStores')
            // .leftJoinAndSelect('bays.product', 'bayProducts')
            .where('branch.id = :id', {id: parseInt(branchId)})
            .getOne();
    } catch (err) {
        console.log(err)
    }
}