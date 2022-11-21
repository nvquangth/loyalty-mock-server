const { MemberInfo } = require("../model/member_info");
const { BaseResponse, ResponseCode } = require("../model/response");

const getMemberInfo = async (req, res, next) => {
  const memberInfo = new MemberInfo(
    "71twR5nn49gxaIkOuMZ%2ByrFZI46MeLzN4YrOlzzCWoyZHvtr0pMQCumoBJSNZrlu",
    "71twR5nn49gxaIkOuMZ%2ByuGy%2BFCHa%2B7OZf6hKkCB34o%3D",
    "390009423231193088",
    "0345116457",
    null,
    "0345116457",
    10000000
  );

  res
    .status(200)
    .json(new BaseResponse(ResponseCode.SUCCESS, "Successfully", memberInfo));
};

module.exports = {
  getMemberInfo,
};
