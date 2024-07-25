const destroy = require('./character/destroy');

module.exports = {
  all: require('./character/all'),
  admin: require('./character/admin'),
  realm: require('./character/realm'),
  add: require('./character/add'),
  create: require('./character/create'),
  modify: require('./character/modify'),
  edit: require('./character/edit'),
  destroy: require('./character/destroy')
}
