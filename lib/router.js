Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading'

});

Router.route('/', {
  name: 'home'
});

Router.route('/admin',{
  name: 'adminPanel',
  waitOn: function(){
  	Meteor.subscribe('events');
  }
});

Router.route('/admin/new-event',{
  name: 'newEvent'
});

Router.route('/admin/editEvent/:_id',{
  name: 'editEvent',
  waitOn: function(){  	
  	Meteor.subscribe('event',{_id:this.params._id});
  }
});


var IR_BeforeHooks = {  
  
  isAdmin: function() {

    if (Meteor.user() && Roles.userIsInRole(Meteor.user(), 'admin')) {
      this.next();
    }
    else
    {
      Router.go('home');      
    }
  },
}

Router.before(IR_BeforeHooks.isAdmin, {only: ['adminPanel','newEvent','editEvent']});