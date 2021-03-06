import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  slug: DS.attr(),

  pollItems: DS.hasMany('poll-item', {async: false})
});
