var App;

module("Acceptances - Helper", {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test("temp test stub", function(){
  expect(1);
  ok( true, "true succeeds" );

});

