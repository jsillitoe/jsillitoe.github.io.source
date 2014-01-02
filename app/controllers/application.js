export default Ember.Controller.extend({
	isLoggedIn: false,
	user:null,
  actions:{
    login: function(){
      var self = this;
      var fbRef = new Firebase('https://jsillitoe.firebaseio.com');
      var auth = new FirebaseSimpleLogin(fbRef, function(error, user) {
        if(error){
          //TODO silently fails for now. integrate an alert or maybe a growl notifications.
          //alert(error);
        }else if(user){
          self.set('user', user);
          self.set('isLoggedIn', true);
        }else{
          self.logout();
        }
      });
      auth.login('github');
    },
    logout: function(){
      this.set('isLoggedIn', false);
      this.set('user', null);
    }   
  }
});
