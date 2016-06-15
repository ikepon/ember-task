import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import Ember from 'ember';

export default Model.extend({
  title: attr('string'),
  description: attr('string'),
  complete: attr('boolean'),
  deadline: attr('date'),

  isValid: Ember.computed.notEmpty('title'),
  isDisabled: Ember.computed.empty('title')
});
