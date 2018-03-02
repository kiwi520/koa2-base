const adminModel = require("../models/admin");
let getAdminInfo = async (ctx, next) => {
    const RowDataPacket = await adminModel.adminAll(),
        Info = JSON.parse(JSON.stringify(RowDataPacket));
    ctx.body = {
        success: true,
        data: {
            adminInfo: Info
        }
    };
};

module.exports = {
    getAdminInfo
}