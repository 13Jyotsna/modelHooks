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
      name: 'Jyotsna Oberai',
      address: 'Sion',
      phoneNumber: 7765434456,
      city: 'Mumbai'
    }, cb);
  }

  function updateModel(coffeeShop, cb) {
    console.log('\n----- Updating a model -----');
    coffeeShop.updateAttribute('address', 'Vashi', cb);
  }

  function destroyModel(coffeeShop, cb) {
    console.log('\n----- Destroying a model -----');
    coffeeShop.destroy(cb);
  }
};