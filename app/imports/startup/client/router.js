import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Do imports to maximize chance of success; try deleting later.
import '../../ui/layouts';
import '../../ui/pages';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/list', {
  name: 'List_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Stuff_Page' });
  },
});

FlowRouter.route('/add', {
  name: 'Add_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Stuff_Page' });
  },
});

FlowRouter.route('/stuff/:_id', {
  name: 'Edit_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Stuff_Page' });
  },
});

// the App_notFound template is used for unknown routes and missing lists
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
