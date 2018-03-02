const { query } = require('../utils/db');


// 注册用户
let adminAll = function() {
    let _sql = "SELECT * FROM admins"
    return query(_sql)
}

module.exports = {
    adminAll
}