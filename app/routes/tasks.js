import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('task');
  },

  actions: {
    deleteTask(task) {
      task.destroyRecord();
    }
  }
});
