const Adm = require('../models/adm');

const AdmController = {
    index: (req, res, next) => {
        res.send({acao: Adm.acao(), 
            terror: Adm.terror(), 
            comedia: Adm.comedia()});
    }
}

module.exports = AdmController;