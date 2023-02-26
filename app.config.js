import "dotenv/config";

module.exports = {
  extra: {
    baseUrl: process.env.BASE_URL,
    apiKey: process.env.API_KEY,
  },
};