var SdApi = {};

SdApi.Controllers = {
    BirdController: require('./controllers/BirdsController'),
};

SdApi.Errors = {
    Base: require('./lib/errors/base'),
    Object: require('./lib/errors/object'),
    User: require('./lib/errors/user'),
    Api: require('./lib/errors/api'),
};

SdApi.Logger = require('./lib/logging');

module.exports = SdApi;
