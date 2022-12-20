"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopUpResult = void 0;
class TopUpResult {
    constructor(status, message, orderType, orderCode, merchantCode, terminalCode, paymentMethod, amount, point, memberPhone, createAt) {
        this.status = 0;
        this.message = "";
        this.orderType = 0;
        this.orderCode = "";
        this.merchantCode = "";
        this.terminalCode = "";
        this.paymentMethod = "";
        this.amount = 0;
        this.point = 0;
        this.memberPhone = "";
        this.createdAt = 0;
        this.status = status;
        this.message = message;
        this.orderType = orderType;
        this.orderCode = orderCode;
        this.merchantCode = merchantCode;
        this.terminalCode = terminalCode;
        this.paymentMethod = paymentMethod;
        this.amount = amount;
        this.point = point;
        this.memberPhone = memberPhone;
        this.createdAt = createAt;
    }
}
exports.TopUpResult = TopUpResult;
