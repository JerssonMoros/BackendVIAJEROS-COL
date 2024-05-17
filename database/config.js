const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect("mongodb+srv://bejaranosonia874:WebViajeros2024.@cluster0.ohvmef7.mongodb.net/DatabaseViajerosCol");
        console.log('Coneccion a la base de datos se realizo correctamente.');
    } catch (error) {
        console.log(error);
        throw new Error('Problema al conectarse con la base de datos.')
    }
}

module.exports = dbConnection