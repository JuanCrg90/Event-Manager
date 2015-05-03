Router.configure({
	layoutTemplate: 'layout'  
});

Router.route('/', {
  name: 'home'
});

Router.route('/admin',{
  name: 'adminPanel'
});

Router.route('/admin/new-event',{
  name: 'newEvent'
});