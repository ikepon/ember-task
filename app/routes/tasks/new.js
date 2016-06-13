import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('task');
  },

  setupController: function(controller, model) {
    this._super(controller, model);

    controller.set('title', 'タスク作成');
    controller.set('buttonLabel', '作成');
  },

  renderTemplate() {
    this.render('tasks/form');
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
