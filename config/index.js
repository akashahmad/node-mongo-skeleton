let configValues = require('./config.json');

module.exports={
    getDbConnctionString:async ()=>{
        return 'mongodb://'+configValues.development.username+":"+configValues.development.password+"@"+configValues.development.host+"/"+configValues.development.dbName
    }
}