Template.IfLoggedIn.helpers({
  authInProcess: function() {
    return Meteor.loggingIn();
  },
  canShow: function() {
    return !!Meteor.user();
  }
});