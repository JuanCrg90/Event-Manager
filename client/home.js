Template.home.helpers({
	events: function () {
		return this;
	}
});

Template.home.events({
	'click #todas': function () {
		Session.set('category', {});		
	},
	'click #desarrolloWeb': function () {
		Session.set('category', {categories: 'Desarrollo Web'});		
	},
	'click #growthHack': function () {
		Session.set('category', {categories: 'Growth Hack'});		
	},
	'click #lifeHack': function () {
		Session.set('category', {categories: 'Life Hack'});		
	},
	'click #desarrolloMovil': function () {
		Session.set('category', {categories: 'Desarrollo Movil'});		
	},
	'click #devops': function () {
		Session.set('category', {categories: 'Devops'});		
	},
	'click #dataScience': function () {
		Session.set('category', {categories: 'Data Science'});		
	}

});