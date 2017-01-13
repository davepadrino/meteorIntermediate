Meteor.publish('recipes', function(){
	return Recipes.find({author: this.userId});
});

// to load one single recipe, instead all of the recipes, when weŕe in the details page
Meteor.publish('singleRecipe', function(id){
	check(id, String);
	return Recipes.find({_id: id});
});