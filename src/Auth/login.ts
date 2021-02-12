import readUserByUsername from "../helpers/R/Custom/readUserByUsername";
import * as jwt from 'jsonwebtoken'
import config from "./config";

const login = async (req, res) => {

    let username = req.body.username;
    let password = req.body.password;

    const user = await readUserByUsername(username);
    if (user)
        if (user.checkIfUnencryptedPasswordIsValid(password)) {

            let token = jwt.sign({username: username}, config.secret, {expiresIn: '24h'});


            res.json({
                success: true,
                msg: 'Authorized',
                accessToken: token
            });
        } else res.sendStatus(403).json({
            success: false,
            message: 'Incorrect username or password'
        })

    else res.json({
        well: 'welll'
    })
}

export default login;