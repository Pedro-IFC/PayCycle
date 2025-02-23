const _ = require('lodash');

module.exports = (resq, res, next) => {
    const bundle = res.locals.bundle;
    if(bundle.errors){
        const erros = parseErrors(bundle.errors);
        res.status(500).json({erros});
    }else{
        next();
    }
}

function parseErrors(nodeRestfulErrors){
    const erros = [];
    _.forIn(nodeRestfulErrors, error => erros.push(error.message));
    return erros;
}