Events = new Mongo.Collection('events');

var Schema ={};

Schema.events = new SimpleSchema({
	title : {
		type : String,
		label: 'Titulo',
		max : 200
	},
	desc: {
		type: String,
		label: 'Descripción',
		max : 1000,
		autoform: {
			rows: 5
		}
	},
	categories: {
		type: [String],
		allowedValues: ['Desarrollo Web.',
		'Growth Hack.',
		'Life Hack.',
		'Desarrollo Móvil.',
		'Devops.',
		'Data Science']
	},
	date: {
		type: Date,
		label: 'Fecha del evento'
	},
	published: {
		type: Boolean,
		defaultValue: true
	}

});

Events.attachSchema(Schema.events);