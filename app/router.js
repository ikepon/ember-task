import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('tasks', { path: '/' }, function() {
    this.route('edit', { path: '/:task_id/edit' });
    this.route('new');
  });
});

export default Router;
