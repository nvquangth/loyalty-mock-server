"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopUpRequest = void 0;
class TopUpRequest {
    constructor(amount, textDesc) {
        this.amount = 0;
        this.txnDesc = "";
        this.amount = amount;
        this.txnDesc = textDesc;
    }
}
exports.TopUpRequest = TopUpRequest;
