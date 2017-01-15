// Meteor.subscribe('recipes');

//Template level subscription replaces the Meteor.subscribe command
Template.Recipes.onCreated(function() {
	var self = this;
	self.autorun(function(){
		self.subscribe('recipes');
	});

});

Template.Recipes.helpers({
	recipes:()=>{
		return Recipes.find({});
	}
});

// Wrapping up: events to show new recipe form
Template.Recipes.events({
	'click  .new-recipe' : ()=> {
		Session.set('newRecipe', true);
	}
});