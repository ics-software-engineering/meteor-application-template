Template.IfLoggedIn.helpers({
  /**
   * @returns {*} True if Meteor is in the process of logging in.
   */
  authInProcess: function() {
    return Meteor.loggingIn();
  },
  /**
   * @returns {boolean} True if there is a logged in user.
   */
  canShow: function() {
    return !!Meteor.user();
  }
});