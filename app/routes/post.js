export default Ember.Route.extend({
  model: function(params) {
    var indexModel = this.modelFor('index');
    return EmberFire.Object.create({
      ref: new Firebase("https://jsillitoe.firebaseio.com/blog/"+params.post_id)
    });
  }
});