// With reactive variable
Template.Recipe.onCreated(function(){
	this.editMode = new ReactiveVar(false);
});

// This helper's to set the call's ID match to the ID of the matched recipe
Template.Recipe.helpers({
	updateRecipeId: function() {
		return this._id;
	},
	// With reactive variable
	editMode: function() {
		return Template.instance().editMode.get();
	}
});

// don't use arrow function if we need to access to "this"
Template.Recipe.events({
	'click .toggle-menu': function(){
		Meteor.call('toggleMenuItem', this._id, this.inMenu);
	},
	'click .fa-trash': function(){
		Meteor.call('deleteRecipe', this._id);
	},
	// With session variable
	/* 
	'click .fa-pencil': function(){
	 	Session.set('editMode', !Session.get('editMode'));
	 } 
	*/

	// With reactive variable
	'click .fa-pencil': function(event, template){
		template.editMode.set(!template.editMode.get());
	}
});