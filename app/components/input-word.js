import Ember from 'ember';

export default Ember.Component.extend({
  pollItem: null,
  afterInput: () => {},
  store: Ember.inject.service(),

  actions: {
    submitWord() {
      const store = this.get('store');
      const word = this.get('word');
      const pollItem = this.get('pollItem');

      const inputWord = store.createRecord('input-word', {
        word,
        pollItem
      });

      inputWord.save().then(() => {
        this.get('afterInput')();
      }).catch((e) => {
        console.error(e);
      });
    }
  }
});
