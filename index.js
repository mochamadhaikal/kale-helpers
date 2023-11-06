const moment = require("moment");
const { v4: uuidV4  } = require('uuid');

const now = (format = "YYYY-MM-DD") => {
    return moment().locale("id").format(format);
};

const convertDate = (val, format = "YYYY-MM-DD") => {
    const result = moment(val).locale("id").format(format);
    return result;
}

const uid = () => {
    const id = uuidV4();
    return id.replace(/-/g, "");
}

module.exports = { now, convertDate, uid };