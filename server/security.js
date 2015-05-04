//Events.permit(['insert', 'update', 'remove']).apply();
Events.permit(['insert', 'update', 'remove']).ifHasRole('admin').apply();
