import * as jwt from 'jsonwebtoken';
import config from "./config";

const frisk = (req, res, next) => {

    let token = req.headers['id'];

    if (isValid(token, res))
        token = cleanToken(token);

    if (token)
        verifyToken(token, req, res, next);

}


const cleanToken = (token) => {
    return token.slice(6, token.length)
}

const verifyToken = (token, req, res, next) => {

    jwt.verify(token, config.secret, (err, decoded) => {

        if (err) return (res.json({err: 'Could not validate request!'}));
        req.decoded = decoded;

        next();
    });
}

const isValid = (token, res) => {
    if (token.startsWith('pstv_ ')) return true;
    return (res.json({err: 'Unauthorized!'}));
}

export default frisk;
