Recipes = new Mongo.Collection('recipes');

// Grant insert permissions only if an user exists and is logged in
Recipes.allow({
	insert: function(userId, doc) {
		return !!userId;
	}
});

Ingredient = new SimpleSchema({
	name: {
		type: String,
	},
	amount: {
		type: String,
	}
});



RecipeSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},

	desc: {
		type: String,
		label: "Description"
	},
	ingredients: {
		type: [Ingredient]
	},
	inMenu: {
		type: Boolean,
		defaultValue: false,
		optional: true,
		autoform: {
			type: "hidden"
		}
	},
	author:{
		type: String,
		label: "Author",
		autoValue: function() {
			return this.userId
		},
		autoform: {
			type: "hidden",
		} 
	},

	createdAt: {
		type: Date,
		label: "Created at",
		autoValue: function() {
			return new Date()
		},
		autoform: {
			type: "hidden",
		} 
	}
});


Recipes.attachSchema( RecipeSchema );