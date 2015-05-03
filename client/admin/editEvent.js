Template.editEvent.helpers({
	event: function () {
		return Events.findOne();
	}
});