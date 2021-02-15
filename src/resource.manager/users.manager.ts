import addUsers from "../helpers/C/singles/AddUsers";
import readAllUsers from "../helpers/R/Many/ReadAllUsers";
import updateUser from "../helpers/U/ByID/UpdateUser";

class UsersManager {

    async registerUser(req, res) {
        const user = await addUsers(req.body);
        res.json({ user: user });
    }

    async summonAllUsers(req, res) {
        const users = await readAllUsers();
        res.json({ users: users });
    }

    async updateUserDetails(req, res) {
        const user = await updateUser(req.body);
        res.json({ user: user });
    }

}

export default UsersManager;