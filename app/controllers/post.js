export default Ember.ObjectController.extend({
	needs:'application',
	isEditing: false,
	actions:{
		edit: function(){
			this.set('isEditing', true);
		},
		doneEditing: function(){
			this.set('isEditing', false);
		}		
	}

});
