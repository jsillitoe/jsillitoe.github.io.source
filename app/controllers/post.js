export default Ember.ObjectController.extend({
	needs:'application',
	isEditing: false,
	isCreating: false,
	newpost:{},
	actions:{
    createNew: function(){
      this.set('newpost', {date: Date().toString()});
      this.set('isCreating', true);
    },
    saveNew: function(){
      var newpost = this.get('newpost');

      //Generate the id for the new post. Ugly, but it does what I want
      //which is to make an id like 2013-12-4-my-awesome-blog-post-title
      var d = new Date();
      var cd = d.getDate();
      var cm = d.getMonth() + 1; //Months are zero based
      var cy = d.getFullYear();
      var md = cy+"-"+cm+"-"+cd;
      var title = newpost.title;
      var name = title.replace(/\s/gi, '-').replace(/[^a-z0-9\-_]/gi, '').toLowerCase();
      var id = md+"-"+name;

      newpost.id = id;
      newpost.date = Date().toString();
      newpost.author = {name:'jsillitoe'}; //TODO pull this from the actual user logged in.
      
      var fbRef = new Firebase("https://jsillitoe.firebaseio.com/blog/"+id);
      fbRef.set(newpost);
      
      this.set('newpost', {date: Date().toString()});
      this.set('isCreating', false);
    },
    cancelNew: function(){

      this.set('isCreating', false);
    }, 
		edit: function(){
			this.set('isEditing', true);
		},
		doneEditing: function(){
			this.set('isEditing', false);
		}		
	}

});
