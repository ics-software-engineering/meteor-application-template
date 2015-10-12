![](https://raw.githubusercontent.com/ics-software-engineering/meteor-application-template/master/doc/meteor-application-template-home.png)

Meteor-application-template is a sample Meteor application that illustrates:

  * A standard directory layout.
  * A standard set of Meteor packages and example usage (Iron Router, AutoForm, Accounts, Bootstrap, etc.)
  * Simple authorization/authentication and use of settings files for initialization.
  * Simple quality assurance

The goal of this template is to help you get quickly started doing Meteor development by providing a reasonable directory structure for development and deployment, a set of common extensions to the core framework, and boilerplate code to illustrate simple and common application capabilities.

## Usage

First, [install Meteor](https://www.meteor.com/install).

Second, [create a new GitHub repository](https://help.github.com/articles/create-a-repo/), and clone it into your local workspace.

Third, change directories into your local repo directory, and type the following:

```
% git remote add template https://github.com/ics-software-engineering/meteor-application-template.git
% git fetch template
% git merge -m "merge template into master" template/master
```

Git may report a merge conflict due to your README.md differing from the template:

```
Auto-merging README.md
CONFLICT (add/add): Merge conflict in README.md
Automatic merge failed; fix conflicts and then commit the result.
```

If this happens, just edit your README.md to reflect the contents appropriate to your app prior to your first commit.

Now your local repo should contain the template. To test that everything is OK, cd into the app directory and run the application:

```
% meteor --settings ../config/settings.development.json
```

If all goes well, the template application will appear at [http://localhost:3000](http://localhost:3000).  You can login using the credentials in [settings.development.json](https://github.com/ics-software-engineering/meteor-application-template/blob/master/config/settings.development.json), or else register a new account.

## Walkthrough

The following sections describe the major features of this template.

### Directory structure

The top-level structure is:

```
app/        # holds the Meteor application sources
doc/        # holds screenshots and other documentation files.
config/     # holds configuration files, such as settings.development.json
.gitignore  # don't commit IntelliJ project files and config/settings.production.json
.jshintrc   # standards for JSHint.
```

This structure separates documentation files (such as screenshots) and configuration files (such as the settings files) from the actual Meteor application.

The app/ directory contains this structure:

```
client/
  stylesheets/
  templates/
    application/
    home/
    stuff/
public/
  images/
lib/
  accounts/
  collections/
  router/
server/
   seeds/
```

### Preinstalled packages

This application requires a number of additional packages useful for development. Here is a recent output of `meteor list`, with the built-in Meteor packages removed and some comments elided.

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

Basically, the template includes support for:

  * Forms (AutoForm, Collection2, Check)
  * Accounts (accounts-password and accounts-ui-bootstrap-3)
  * Routing (iron:router)
  * Presentation (Bootstrap, Spin)
  * Coding (underscore, ejson)

**Notes:**

  * The template removes the AutoPublish and Insecure packages. Therefore, applications built using this template should explicitly publish/subscribe and use Meteor Methods.

  * At the time of writing:

     * Iron:Router did not correctly require the ejson package, leading to the error `Exception in callback of async function: ReferenceError: EJSON is not defined`. If you get this error, then `meteor add ejson` will fix it.

     * AutoForm did not require the check package, leading to the error `ReferenceError: check is not defined`. If you get this error, `meteor add check` will fix it.

### Application functionality

The application implements a simple CRUD application for managing "Stuff", which is a Mongo Collection consisting of a name (String) and a quantity (Number). There are four pages, a home page (shown above), an "AddStuff" page for creating new Stuff documents, an "EditStuff" page for editing pre-existing Stuff documents, and a "ListStuff" page that displays all defined Stuff documents.

You must login to access any page other than the Home page. Here are screenshots of the other pages:

#### List Stuff page

![](https://raw.githubusercontent.com/ics-software-engineering/meteor-application-template/master/doc/ListStuff.png)

#### Add Stuff page

![](https://raw.githubusercontent.com/ics-software-engineering/meteor-application-template/master/doc/AddStuff.png)

#### Edit Stuff page

![](https://raw.githubusercontent.com/ics-software-engineering/meteor-application-template/master/doc/EditStuff.png)


### Collections

The application implements a single Collection called "Stuff". Each Stuff document has two fields: a String "name" and a Number "quantity".

The definition of the Stuff collection is in [app/lib/collections/Stuff.js](https://github.com/ics-software-engineering/meteor-application-template/blob/master/app/lib/collections/Stuff.js).

The Stuff collection is initialized in [app/server/seeds/Stuff.js](https://github.com/ics-software-engineering/meteor-application-template/blob/master/app/server/seeds/Stuff.js).

### CSS

The application uses [Twitter Bootstrap](http://getbootstrap.com/), and installs two Meteor packages: `twbs:bootstrap` and `ian:accounts-ui-bootstrap-3`.

Most of the Bootstrap-based layout is contained in the [app/client/templates/application](https://github.com/ics-software-engineering/meteor-application-template/tree/master/app/client/templates/application) directory.

Because the application implements navbar-fixed-top, the [app/client/stylesheets/style.css](https://github.com/ics-software-engineering/meteor-application-template/blob/master/app/client/stylesheets/style.css) file adds 70px of padding to the body so that it is not covered by the navbar.

### Routing

For display and navigation among its four pages, the application uses [Iron Router](http://iron-meteor.github.io/iron-router/).

Routing is defined in [app/lib/router/Router.js](https://github.com/ics-software-engineering/meteor-application-template/blob/master/app/lib/router/Router.js).

Routing is used for the Navbar links in [app/client/templates/application/Header.html](https://github.com/ics-software-engineering/meteor-application-template/blob/master/app/client/templates/application/Header.html).

Routing is also used to jump to the List Stuff page after successful form submission in [app/client/templates/stuff/AddStuff.js](https://github.com/ics-software-engineering/meteor-application-template/blob/master/app/client/templates/stuff/AddStuff.js) and [app/client/templates/stuff/EditStuff.js](https://github.com/ics-software-engineering/meteor-application-template/blob/master/app/client/templates/stuff/EditStuff.js).

### Forms

To implement the AddStuff and EditStuff forms, the application uses [AutoForm](https://github.com/aldeed/meteor-autoform).

The schema defining the document structure for the Stuff collection, as well as the Meteor Methods used to insert and update document instances are in [app/lib/collections/Stuff.js](https://github.com/ics-software-engineering/meteor-application-template/blob/master/app/lib/collections/Stuff.js).

To present the forms, the application uses the quickform component.  See [app/client/templates/stuff/AddStuff.html](https://github.com/ics-software-engineering/meteor-application-template/blob/master/app/client/templates/stuff/AddStuff.html) and [app/client/templates/stuff/EditStuff.html](https://github.com/ics-software-engineering/meteor-application-template/blob/master/app/client/templates/stuff/EditStuff.html).

### Authentication

For authentication, the application uses the Meteor accounts-ui package, with some simple customization in [app/lib/accounts/AccountsConfig.js](https://github.com/ics-software-engineering/meteor-application-template/blob/master/app/lib/accounts/AccountsConfig.js).

When the application is run for the first time, a settings file (such as [config/settings.development.json](https://github.com/ics-software-engineering/meteor-application-template/blob/master/config/settings.development.json)) should be passed to Meteor. That will lead to a default account being created through the code in [app/server/seeds/Accounts.js](https://github.com/ics-software-engineering/meteor-application-template/blob/master/app/server/seeds/Accounts.js).

The application allows users to register and create new accounts at any time.

### Authorization

Only logged in users can manipulate Stuff documents (but any registered user can manipulate any Stuff document, even if they weren't the user that created it.)

To prevent users who are not logged in from accessing pages that manipulate Stuff instances, template-based authorization is used following the recommendations in [Implementing Auth Logic and Permissions](https://kadira.io/academy/meteor-routing-guide/content/implementing-auth-logic-and-permissions). (While these recommendations are associated with the Flow Router guide, we follow them even though we use Iron Router).

The application implements template-based authorization using an IfLoggedIn template, defined in [app/client/templates/application/IfLoggedIn.html](https://github.com/ics-software-engineering/meteor-application-template/blob/master/app/client/templates/application/IfLoggedIn.html) and [app/client/templates/application/IfLoggedIn.js](https://github.com/ics-software-engineering/meteor-application-template/blob/master/app/client/templates/application/IfLoggedIn.js).

This template is used to prevent unauthorized access in the templates associated with Stuff instances, implemented in [app/client/templates/stuff](https://github.com/ics-software-engineering/meteor-application-template/tree/master/app/client/templates/stuff).

### Initialization/configuration

The [app/server/seeds](https://github.com/ics-software-engineering/meteor-application-template/tree/master/app/server/seeds) directory contains initialization code for both accounts and the Stuff collection. This code is designed to be executed only once, when the application is first run and the Mongo DB is empty.

The [config](https://github.com/ics-software-engineering/meteor-application-template/tree/master/config) directory is intended to hold settings files.  The repository contains one file: [config/settings.development.json](https://github.com/ics-software-engineering/meteor-application-template/blob/master/config/settings.development.json).

The [.gitignore](https://github.com/ics-software-engineering/meteor-application-template/blob/master/.gitignore) file prevents a file named settings.production.json from being committed to the repository. So, if you are deploying the application, you can put settings in a file named settings.production.json and it will not be committed.

### Quality Assurance

#### JSHint

The application includes a [.jshintrc](https://github.com/ics-software-engineering/meteor-application-template/blob/master/.jshintrc) file which defines global variables for the Meteor globals (and those defined by the packages included in this template application).

In addition, it defines "Stuff" and "stuff" as globals.  You will want to edit this part of the .jshintrc file when you define your own collections.

## Screencast

Click the image below to watch a 25 minute walkthrough of this system.

[<img src="https://raw.githubusercontent.com/ics-software-engineering/meteor-application-template/master/doc/meteor-application-template-youtube.png" width="600">](https://www.youtube.com/watch?v=Ioe0dNyqjYg)

Note that since the time of this screencast:

  * I've added a public/images directory containing a sample image to illustrate the use of static assets.  The home page displays this image (the Meteor logo).

  * You must now cd into the app/ directory before running the `meteor` command.









