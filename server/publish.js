Meteor.publish(null, function (){ 
  return Meteor.users.find({_id:this.userId});
});

Meteor.publish(null, function (){ 
  return Meteor.roles.find();
});

Meteor.publish('events', function () {
	return Events.find();
});

Meteor.publish('event', function (params) {	
	return Events.find( params );
});