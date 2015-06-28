import Ember from 'ember';

export default Ember.Component.extend({
  pollItem: null,
  isShowingWords: false,

  actions: {
    showWords() {
      const pollItem = this.get('pollItem');
      pollItem.reload().then(() => {
        this.set('isShowingWords', true);
      });
    }
  }
});
