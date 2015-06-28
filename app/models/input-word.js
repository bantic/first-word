import DS from 'ember-data';

export default DS.Model.extend({
  word: DS.attr(),
  pollItem: DS.belongsTo('poll-item', {async: false})
});
