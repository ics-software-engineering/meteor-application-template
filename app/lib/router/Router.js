Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("Stuff"); },
  loadingTemplate: 'Loading'
});

Router.route('/', {
  name: 'Home'
});

Router.route('/list', {
  name: 'ListStuff'
});


Router.route('/stuff/:_id', {
  name: 'UpdateStuff',
  data: function() { return Stuff.findOne(this.params._id); }
});
