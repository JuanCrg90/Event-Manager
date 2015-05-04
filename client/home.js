Template.home.helpers({
	events: function () {
		return this;
	}
});

Template.home.events({
	'click #todas': function () {
		Session.set('category', {published:true});
	},
	'click #desarrolloWeb': function () {
		Session.set('category', {categories: 'Desarrollo Web',published:true});		
	},
	'click #growthHack': function () {
		Session.set('category', {categories: 'Growth Hack',published:true});		
	},
	'click #lifeHack': function () {
		Session.set('category', {categories: 'Life Hack',published:true});		
	},
	'click #desarrolloMovil': function () {
		Session.set('category', {categories: 'Desarrollo Movil',published:true});		
	},
	'click #devops': function () {
		Session.set('category', {categories: 'Devops',published:true});		
	},
	'click #dataScience': function () {
		Session.set('category', {categories: 'Data Science',published:true});		
	}

});