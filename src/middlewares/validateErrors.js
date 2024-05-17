const { validationResult } = require('express-validator');

const validateError = ( req, res, next ) => {
    const errors = validationResult( req );

    if ( !errors.isEmpty() ){
        const listErrors = [];
        errors.array().forEach( error => {
            console.log(error);
            listErrors.push(error.msg)
        })
        
        return res.status(400).json({
            ok: false,
            errores: listErrors
        })
    }

    next();
}

module.exports = validateError
