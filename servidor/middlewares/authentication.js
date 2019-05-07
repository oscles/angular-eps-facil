var jwt = require('jsonwebtoken');
var CONFIG = require('../config/config');

/* ======================================
 Verificar token
======================================*/
exports.verifyToken = (req, res, next) => {
    let token = req.query.token;
    jwt.verify(token, CONFIG.SEED, (err, decode) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                message: 'Token incorrecto',
                error: err
            });
        }
        req.user = decode.user;
        next();
    });
}