/**
 * After successful addition of a new Stuff document, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  AddStuffForm: {
    onSuccess: function(formType, result) {
      Router.go('ListStuff');
    }
  }
});