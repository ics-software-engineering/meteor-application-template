/**
 * After successful edit, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  EditStuffForm: {
    onSuccess: function(formType, result) {
      Router.go('ListStuff');
    }
  }
});