const { BaseResponse, ResponseCode } = require("../model/response");
const { MoneyPackage, MoneyPackages } = require("../model/money_package");
const { Order } = require("../model/order");

const getMoneyPackages = async (req, res, next) => {
  const packages = [];
  packages.push(new MoneyPackage(10000, "VND"));
  packages.push(new MoneyPackage(20000, "VND"));
  packages.push(new MoneyPackage(50000, "VND"));
  packages.push(new MoneyPackage(100000, "VND"));
  packages.push(new MoneyPackage(200000, "VND"));
  packages.push(new MoneyPackage(500000, "VND"));
  packages.push(new MoneyPackage(1000000, "VND"));
  packages.push(new MoneyPackage(2000000, "VND"));
  packages.push(new MoneyPackage(5000000, "VND"));
  const moneyPackages = new MoneyPackages(packages);
  res
    .status(200)
    .json(
      new BaseResponse(ResponseCode.SUCCESS, "Successfully", moneyPackages)
    );
};

const checkout = async (req, res, next) => {
  const amount = req.body.amount;
  const order = new Order(`${Date.now()}`, amount);
  res
    .status(200)
    .json(new BaseResponse(ResponseCode.SUCCESS, "Successfully", order));
};

const getMoneyPackages401 = async (req, res, next) => {
  res.status(401).json(new BaseResponse(ResponseCode.UNAUTHORIZED, "", null));
};

const getMoneyPackages500 = async (req, res, next) => {
  res.status(500).json(new BaseResponse(500000, "", null));
};

const checkout401 = async (req, res, next) => {
  res.status(401).json(new BaseResponse(ResponseCode.UNAUTHORIZED, "", null));
};

const checkout500 = async (req, res, next) => {
  res.status(500).json(new BaseResponse(500000, "", null));
};

module.exports = {
  getMoneyPackages,
  checkout,
  getMoneyPackages401,
  getMoneyPackages500,
  checkout401,
  checkout500,
};
