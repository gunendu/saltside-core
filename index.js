var SdApi = {};

SdApi.Controllers = {
    BirdController: require('./controllers/BirdsController'),
};

SdApi.Logger = require('./lib/logging');

module.exports = SdApi;
