import { isExportDeclaration } from "typescript";
import login from "../Auth/login";
import saveSuperUser from "../Auth/saveSupserUser";

class AuthHandler {

    async authenticate(req, res){
        login(req, res);
    }


    async createSuperUser(req, res) {
        let superUser = await saveSuperUser(req, res);
    }

    // console.log(here);
    
     
}

export default AuthHandler;