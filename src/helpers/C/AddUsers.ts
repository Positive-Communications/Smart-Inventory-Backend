import Users from "../../entity/Users";
import {getConnection} from "typeorm";
import Branch from "../../entity/Branch";
import {json} from "express";

export default async function addUsers(user_, id) {
    let branch = getConnection()
        .createQueryBuilder()
        .select('branch')
        .from(Branch, 'branch')
        .where('branch.id =:id', {id: parseInt(id)})
        .getOne();


    let user = new Users();
    user.branch = await branch;
    user.identificationNumber = user_.identificationNumber;
    user.userPicture = user_.userPicture;
    user.userName = user_.userName;
    user.password = user_.password;
    user.hashPassword();
    user.identificationType = user_.identificationType;
    user.identificationPhoto = user_.identificationPhoto;
    user.designation = user_.designation;
    user.isCarrier = user_.isCarrier;
    user.departmentWorkArea = user_.departmentWorkArea;
    user.phone = user_.phone;
    user.mobile = user_.mobile;
    user.email = user_.email;
    user.joined = user_.joined;
    try{
        return await getConnection()
            .manager
            .save(user);
    }catch (e){
        console.log(e)
    }
}