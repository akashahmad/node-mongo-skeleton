let configValues = require('./config.json');

module.exports={
    getDbConnctionString:()=>{
        return "mongodb://localhost:27017/goldshop_db";
    }
}