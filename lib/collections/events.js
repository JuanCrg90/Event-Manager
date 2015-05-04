Events = new Mongo.Collection('events');

var Schema ={};

Schema.events = new SimpleSchema({
	title : {
		type : String,
		label: 'Titulo',
		max : 200
	},
	image:{
		type: String,
		regEx: SimpleSchema.RegEx.Url
	},
	description: {
		type: String,
		label: 'Descripción',
		max : 1000,
		autoform: {
			rows: 5
		}
	},
	categories: {
		type: [String],
		allowedValues: ['Desarrollo Web',
		'Growth Hack',
		'Life Hack',
		'Desarrollo Movil',
		'Devops',
		'Data Science']
	},
	date: {
		type: Date,
		label: 'Fecha del evento',
		autoform: {
			type: "datetime-local"
		}
	},
	published: {
		type: Boolean,
		defaultValue: true
	}

});

Events.attachSchema(Schema.events);