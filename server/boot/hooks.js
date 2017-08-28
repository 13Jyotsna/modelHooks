var async = require('async');

module.exports = function(app, cb) {
  async.waterfall([
    async.apply(createModel),
    async.apply(updateModel),
    async.apply(destroyModel)
  ], cb);

  function createModel(cb) {
    console.log('\n----- Creating a model -----');
    app.models.Person.create({
      name: 'a name',
      address: 'random value',
      phoneNumber: 00000000000,
      city: 'any city'
    }, cb);
  }

  function updateModel(coffeeShop, cb) {
    console.log('\n----- Updating a model -----');
    coffeeShop.updateAttribute('address', '', cb);
  }

  function destroyModel(coffeeShop, cb) {
    console.log('\n----- Destroying a model -----');
    coffeeShop.destroy(cb);
  }
};