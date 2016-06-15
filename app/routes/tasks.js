import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('task');
  },

  actions: {
    toggleCheckBox(task) {
      if (task.complete) {
        task.complete = false;
      } else {
        task.complete = true;
      }

      task.save();
    },

    deleteTask(task) {
      let confirmation = confirm('削除しますか？');

      if (confirmation) {
        task.destroyRecord();
      }
    }
  }
});
