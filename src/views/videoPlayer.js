var VideoPlayerView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('select', this.render, this);
  },

  render: function() {
    console.log('render');
    this.$el.html('<div class="loading">Please wait...</div>');
    return this.$el;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
