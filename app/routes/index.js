export default Ember.Route.extend({
  needs: 'application',
  model: function() {
    return EmberFire.Array.create({
      ref: new Firebase("https://jsillitoe.firebaseio.com/blog")
    });
  }
});
