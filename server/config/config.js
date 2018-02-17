//on tests we set the NODE_ENV to test.
//on Heroku its set to production.

const env = process.env.NODE_ENV || "development";
if(env === "test" || env ==="development") {
  const configJson = require("./config.json");
  Object.keys(configJson[env]).forEach(key => process.env[key] = configJson[env][key])
}
console.log(`*${env}*`);

