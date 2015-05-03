if (Meteor.users.find().count() === 0) 
{
	console.log('Creating admin account');  
	var id=Accounts.createUser({username : 'admin', password : '123456'});  
	Roles.addUsersToRoles(id, ['admin']);

	console.log('Creating user account');  
	var id=Accounts.createUser({username : 'JuanCrg90', password : '123456'});  
	Roles.addUsersToRoles(id, ['user']);
}