"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseCode = exports.BaseResponse = void 0;
class BaseResponse {
    constructor(code, message, data) {
        this.code = 0;
        this.message = "";
        if (code) {
            this.code = code;
        }
        if (message) {
            this.message = message;
        }
        if (data) {
            this.data = data;
        }
    }
    get Code() {
        return this.code;
    }
    set Code(value) {
        this.code = value;
    }
    get Message() {
        return this.message;
    }
    set Message(value) {
        this.message = value;
    }
    get Data() {
        return this.data;
    }
    set Data(value) {
        this.data = value;
    }
}
exports.BaseResponse = BaseResponse;
var ResponseCode;
(function (ResponseCode) {
    ResponseCode[ResponseCode["SUCCESS"] = 0] = "SUCCESS";
    ResponseCode[ResponseCode["ERROR"] = -1] = "ERROR";
    ResponseCode[ResponseCode["UNAUTHORIZED"] = 201] = "UNAUTHORIZED";
    ResponseCode[ResponseCode["GREED"] = 429] = "GREED";
    ResponseCode[ResponseCode["EMPTY_FIELD"] = 400201] = "EMPTY_FIELD";
})(ResponseCode = exports.ResponseCode || (exports.ResponseCode = {}));
