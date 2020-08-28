module.exports = class Response {
    constructor(data, status, message) {
        this.status = status;
        this.message = message;
        this.data = data;
    }
};
