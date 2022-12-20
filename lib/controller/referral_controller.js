const { BaseResponse, ResponseCode } = require("../model/response");
const { ReferralDetail } = require("../model/referral_detail");

const getReferralCode = async (req, res, next) => {
  const referralDetail = new ReferralDetail("09696969696");

  res
    .status(200)
    .json(
      new BaseResponse(ResponseCode.SUCCESS, "Successfully", referralDetail)
    );
};

const getReferralCode401 = async (req, res, next) => {
  res.status(401).json(new BaseResponse(ResponseCode.UNAUTHORIZED, "", null));
};

const getReferralCode500 = async (req, res, next) => {
  res.status(500).json(new BaseResponse(500000, "", null));
};

module.exports = {
  getReferralCode,
  getReferralCode401,
  getReferralCode500,
};
