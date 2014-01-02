var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('component-test');
  this.route('helper-test');
  this.resource('resume', function(){});
  this.resource('projects', function(){});
  this.resource('contact', function(){});
  this.resource('index', {path: '/'}, function() {
    this.resource('post', {path: '/blog/:post_id'});
  });
});

export default Router;
