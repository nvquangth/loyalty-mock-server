const { NetworkConfig } = require("../model/network_config");
const { BaseResponse, ResponseCode } = require("../model/response");

const getNetworkConfig = async (req, res, next) => {
  const networkConfig = new NetworkConfig(
    85,
    "Furmat",
    false,
    false,
    "https://i.postimg.cc/HL5hLJXw/vietmeta-avatar-default.png",
    "https://i.postimg.cc/gkyjnHN8/viet-meta-logo.png",
    null,
    "cc1a86",
    "https://i.postimg.cc/3RTb0KFP/vietmeta-card-default.png",
    "https://i.postimg.cc/9MyMxPZD/Currency-1.png",
    "Điểm",
    1000,
    null
  );
  res
    .status(200)
    .json(
      new BaseResponse(ResponseCode.SUCCESS, "Successfully", networkConfig)
    );
};

module.exports = {
  getNetworkConfig,
};
