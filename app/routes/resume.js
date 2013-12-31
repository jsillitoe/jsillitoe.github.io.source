export default Ember.Route.extend({
  needs: 'application',
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});