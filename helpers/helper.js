const Helper = {};

Helper.sendResponse = (res, message, status) => {
    const response = {};
    if (success !== null) response.success = success;
    if (data !== null) response.data = data;
    if (errors !== null) response.errors = errors;
    if (msg !== null) response.msg = msg;

    return res.status(status).json{(
        status, 
        message,
        })
     }

module.exports = Helper;