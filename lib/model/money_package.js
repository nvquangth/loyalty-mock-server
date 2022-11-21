"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoneyPackages = exports.MoneyPackage = void 0;
class MoneyPackage {
    constructor(value, currency) {
        this.value = 0;
        this.currency = "VND";
        this.value = value;
        this.currency = currency;
    }
}
exports.MoneyPackage = MoneyPackage;
class MoneyPackages {
    constructor(packages) {
        this.moneyPackages = packages;
    }
}
exports.MoneyPackages = MoneyPackages;
