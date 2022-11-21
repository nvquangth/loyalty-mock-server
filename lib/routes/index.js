const topUpRouter = require("./topup");
const memberRouter = require("./member");
const networkConfigRouter = require("./network_config");

module.exports = (app) => {
  app.use("/api/v1/topup", topUpRouter);
  app.use("/api/v1/member", memberRouter);
  app.use("/api/v1/network-config", networkConfigRouter);
};
