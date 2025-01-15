require("dotenv").config();
const config = {
  apikey: process.env.API_KEY,
  serversecrete: process.env.SERVER_SECRET,
  iskalvium: process.env.IS_KAlVIUM === "true",
};
module.exports = config;
console.log("Environment Variable");
console.log(config);
