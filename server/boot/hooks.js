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

  function updateModel(person, cb) {
    console.log('\n----- Updating a model -----');
    person.updateAttribute('address', '', cb);
  }

  function destroyModel(person, cb) {
    console.log('\n----- Destroying a model -----');
    person.destroy(cb);
  }
};