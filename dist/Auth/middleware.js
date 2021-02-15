"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jsonwebtoken");
var config_1 = require("./config");
var frisk = function (req, res, next) {
    var token = req.headers['id'];
    if (isValid(token, res))
        token = cleanToken(token);
    if (token)
        verifyToken(token, req, res, next);
};
var cleanToken = function (token) {
    return token.slice(6, token.length);
};
var verifyToken = function (token, req, res, next) {
    jwt.verify(token, config_1.default.secret, function (err, decoded) {
        if (err)
            return (res.json({ err: 'Could not validate request!' }));
        req.decoded = decoded;
        next();
    });
};
var isValid = function (token, res) {
    if (token.startsWith('pstv_ '))
        return true;
    return (res.json({ err: 'Unauthorized!' }));
};
exports.default = frisk;
//# sourceMappingURL=middleware.js.map