import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('task');
  },

  actions: {
    saveTask(model) {
      model.save().then(() => this.transitionTo('tasks'));
    },

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  }
});
