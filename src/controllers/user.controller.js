
const getUsers = (req, res) => {
    res.send('Se van a listar los usarios desde el controlador')
}

const postUser = (req, res) => {
    res.send('Se va a crear un usario desde el controlador')
}

module.exports = {
    getUsers,
    postUser
}