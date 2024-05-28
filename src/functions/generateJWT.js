const jwt = require('jsonwebtoken');

const generateJWT = ( user ) => {
    return new Promise( (resolve, reject) => {
        const secret = "!=PQii;H7;YH6PnM1~LQ(d3MYBDkBq"
        const payload = {
            id: user._id
        }

        jwt.sign(payload, secret, {
            expiresIn: '30m'
        }, (error, token) => {
            if ( error ) {
                console.log(error);
                reject('No se pudo generar el token correctamente')
                return
            }
            resolve(token);
        });
    })
}

module.exports = generateJWT