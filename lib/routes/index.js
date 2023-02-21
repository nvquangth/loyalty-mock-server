const topUpRouter = require("./topup");
const memberRouter = require("./member");
const networkConfigRouter = require("./network_config");
const oauthBffRouter = require("./oauth_bff");

module.exports = (app) => {
  app.use("/api/v1/topup", topUpRouter);
  app.use("/api/v1/member", memberRouter);
  app.use("/api/v1/network-config", networkConfigRouter);
  app.use("/api/v1/users", oauthBffRouter)
};
