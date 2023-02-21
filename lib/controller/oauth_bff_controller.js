const { BaseResponse, ResponseCode } = require("../model/response");
const { InitRegisterResult } = require("../model/init_register")

const initRegister = async (req, res, next) => {
    const result = new InitRegisterResult(true);
    res.status(200).json(new BaseResponse(ResponseCode.SUCCESS, "success", result))
}

const initRegister400 = async (req, res, next) => {
    res.status(400).json(new BaseResponse(ResponseCode.EMPTY_FIELD, "ReferralCode is not empty but can not find referralPlatformId according", null))
}

const initRegister429 = async (req, res, next) => {
    res.status(400).json(new BaseResponse(ResponseCode.GREED, "You have requested the OTP code more than maximum times. Please try again later", null))
}

const userLogin400 = async (req, res, next) => {
    res.status(400).json(new BaseResponse(ResponseCode.GREED, "fuck", null))
}

module.exports = {
    initRegister,
    initRegister400,
    initRegister429,
    userLogin400
};
