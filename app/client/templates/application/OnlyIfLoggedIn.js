Template.OnlyIfLoggedIn.helpers({
  authInProcess: function() {
    return Meteor.loggingIn();
  },
  canShow: function() {
    return !!Meteor.user();
  }
});