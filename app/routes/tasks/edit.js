import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('task', params.task_id);
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('title', 'タスク編集');
    controller.set('buttonLabel', '編集');
  },

  renderTemplate() {
    this.render('tasks/form');
  },

  actions: {
    saveTask(model) {
      model.save().then(() => this.transitionTo('tasks'));
    },

    willTransition(transition) {
      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("修正がまだ保存されていません。ページを移動しますか？");

        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});
