var path = require("path");
var rootPath = path.normalize(__dirname + "/../../");

module.exports = {
    development:{
        db:"mongodb://localhost/standupdatabase",
        rootPath:rootPath,
        port:process.env.PORT||9000

    },
    production:{
        db:"mongodb://adetokunbo:abachaforpresident@ds011913.mlab.com:11913/multivision",
        rootPath:rootPath,
        port:process.env.PORT||80
    }
};