Template.RecipeSingle.onCreated(function() {
	var self = this;
	self.autorun(function(){
		// to load one single recipe, instead all of the recipes, when weŕe in the details page
		var id = FlowRouter.getParam('id');
		self.subscribe('singleRecipe', id);
	});

});

Template.RecipeSingle.helpers({
	recipe:()=>{
		//select just the id of the recipe on the route
		var id = FlowRouter.getParam('id');
		return Recipes.findOne({_id: id});
		// return Recipes.findOne({});
	}
});