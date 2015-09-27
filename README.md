A template repository for Meteor application development:

## Directory structure

The top-level structure is:

```
app/        # holds the Meteor application sources
doc/        # holds screenshots and other documentation files.
config/     # holds configuration files, such as settings.development.json
.gitignore  # don't commit IntelliJ project files and config/settings.production.json
.jshintrc   # standards for JSHint.
```

Inside the app/ directory, the Meteor app is structured as follows:

```
client/
   templates/
   stylesheets/
public/
   fonts/
server/
   seeds/
lib/
   collections/
   router/
   accounts/
```


## Packages

This application requires a number of additional packages useful for development. Here is the output of `meteor list`, with the built-in Meteor packages removed and some comments elided.

```
aldeed:autoform              5.5.1  Create forms with automatic insert and update
aldeed:collection2           2.5.0  Validation of insert and update operations on the client and server.
accounts-password            1.1.3  Password support for accounts
ian:accounts-ui-bootstrap-3  1.2.80  Bootstrap-styled accounts-ui with multi-language support.
iron:router                  1.0.9  Routing specifically designed for Meteor
sacha:spin                   2.3.1  Simple spinner package for Meteor
twbs:bootstrap               3.3.5  Front-end framework for responsive, mobile first projects.
underscore                   1.0.4  Collection of small helpers: _.map, _.each, ...
ejson                        1.0.7  Extended and Extensible JSON library
check                        1.0.6  Check whether a value matches a pattern
```

Basically, we add support for:

  * Forms (AutoForm, Collection2, Check)
  * Accounts (accounts-password and accounts-ui-bootstrap-3)
  * Routing (iron:router)
  * Presentation (Bootstrap, Spin)
  * Coding (underscore, ejson)

**Notes:**

  * The template removes the AutoPublish and Insecure packages. By default, applications built using this template should explicitly publish/subscribe and use Meteor Methods.

  * At the time of writing:

     * Iron:Router did not correctly require the ejson package, leading to the error `Exception in callback of async function: ReferenceError: EJSON is not defined`. If you get this error, then `meteor add ejson` will fix it.

     * AutoForm did not require the check package, leading to the error `ReferenceError: check is not defined`. If you get this error, `meteor add check` will fix it.








