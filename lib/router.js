Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading'

});

Router.route('/', {
  name: 'home',
  onRun: function(){
    Session.set('category', {published:true});
    this.next();
  },
  waitOn: function(){
    Meteor.subscribe('events');
  },
  data: function(){
    return Events.find(Session.get('category'));
  }

});

Router.route('/event/:_id',{
  name: 'showEvent',
  waitOn: function(){   
    Meteor.subscribe('event',{_id:this.params._id});
  },
  data: function(){
    return Events.findOne();
  }

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