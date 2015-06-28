import Ember from 'ember';

export default Ember.Component.extend({
  pollItem: null,

  wordPairs: Ember.computed('pollItem.sortedWords.[]', function() {
    const sortedWords = this.get('pollItem.sortedWords');
    return sortedWords.map(([word, count]) => {
      return {word, count};
    });
  })
});
