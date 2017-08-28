module.exports = function(Person) {
  // initialize
  Person.afterInitialize = function() {
    console.log('> afterInitialize triggered');
  };

  // validate
  Person.beforeValidate = function(next, personInstance) {
    console.log('> beforeValidate triggered', personInstance);
    next();
  };

  Person.afterValidate = function(next) {
    console.log('> afterValidate triggered');
    next();
  };

  // create
  Person.beforeCreate = function(next, personInstance) {
    console.log('> beforeCreate triggered', personInstance);
    next();
  };

  Person.afterCreate = function(next) {
    console.log('> afterCreate triggered');
    next();
  };

  // save
  Person.beforeSave = function(next, personInstance) {
    console.log('> beforeSave triggered', personInstance);
    next();
  };

  Person.afterSave = function(next) {
    console.log('> afterSave triggered');
    next();
  };

  // update
  Person.beforeUpdate = function(next, updatedValue) {
    console.log('> beforeUpdate triggered', updatedValue);
    next();
  };

  Person.afterUpdate = function(next) {
    console.log('> afterUpdate triggered');
    next();
  };

  // destroy
  Person.beforeDestroy = function(next) {
    console.log('> beforeDestroy triggered');
    next();
  };

  Person.afterDestroy = function(next) {
    console.log('> afterDestroy triggered');
    next();
  };
};