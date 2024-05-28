const Rols = require('../models/rols.model.js');
const { restart } = require('nodemon');
const { put } = require('../routes/rols.routes.js');



const getIDRols = async (req, res) => {
    try {
        const getRols = await Rols.find({});
        res.status(200).json({getRols})

        
    } catch (error) {
        res.status(500).json({ error: 'Error ' });
    }

}

const deleteRols = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteRols = await Rols.findByIdAndDelete(id)

         
        if (!deleteRols) {
            return res.status(404).json({ error: 'Rol no encontrado' });
        }

        res.status(200).json({
            ok: true,
            msg: 'Rol eliminado',
            rol: deleteRols
        });
    }

    catch (error) { 
        res.status(500).json({ error: 'Error ' });
    }
}
const postRols = async (req, res) => {
    try {
        const {name} = req.body;
        const data = {name}
        const Rol = new Rols(data)
        await Rols.save();
        return res.status(201).json({
            ok: true,
            msg: 'Rol creado con exito',
            rol: deleteRols
        });
} 
    catch (error) {
        res.status(500).json({ error: 'Error ' });
    }
}
const putRols = async (req, res) => {

    try {
        const {id} =req.params;
        const {name} =req.body;
        const actRol = await Rols.findByIdAndUpdate(id, data, { new: true });

        if (!actRol) {
            return res.status(404).json({ error: 'Rol no encontrado' });
            }

    } catch (error) {
        res.status(500).json({ error: 'Error ' });
    }
}
    

module.exports= {getIDRols,deleteRols,postRols,putRols} 

