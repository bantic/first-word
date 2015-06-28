import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  slug: DS.attr(),
  sortedWords: DS.attr(),

  poll: DS.belongsTo('poll', {async: false}),
  photo: DS.belongsTo('photo', {async: false})
});
