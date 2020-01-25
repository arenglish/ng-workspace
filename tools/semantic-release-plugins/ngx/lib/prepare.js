const path = require("path");
const child = require("child_process");
console.log(path.dirname(require.main.filename));

module.exports = async function prepareNgx(options, context) {
  console.log("CONTEXT CWD");
  console.log(context.cwd);
  const angularJSON = require(context.cwd + "/angular.json");
  console.log(angularJSON);
  child.execSync(`ng build`, {
    stdio: "inherit"
  });

  return true;
};
