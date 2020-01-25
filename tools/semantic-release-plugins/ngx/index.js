const { failNgx, prepareNgx, successNgx, verifyNgx } = require("./lib");

let verified;

async function verifyConditions(pluginConfig, context) {
  await verifyNgx(pluginConfig, context);
  verified = true;
}

async function prepare(pluginConfig, context) {
  if (!verified) {
    await verifyNgx(pluginConfig, context);
    verified = true;
  }

  return prepareNgx(pluginConfig, context);
}

async function success(pluginConfig, context) {
  if (!verified) {
    await verifyNgx(pluginConfig, context);
    verified = true;
  }

  await successNgx(pluginConfig, context);
}

async function fail(pluginConfig, context) {
  if (!verified) {
    await verifyNgx(pluginConfig, context);
    verified = true;
  }

  await failNgx(pluginConfig, context);
}

module.exports = { verifyConditions, prepare, success, fail };
