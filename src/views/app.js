var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.videos.populateVideoList(window.exampleVideoData);
    this.videoPlayer = new VideoPlayerView({collection: this.videos});
    this.videoList = new VideoListView({collection: this.videos});
    this.render();
    this.videos.models[0].select();
  },


  render: function() {
    this.$el.html(this.template());
    this.$('.player').html(this.videoPlayer.render());



    new VideoPlayerView({
      el: this.$('.player'),
      collection: this.videos
    }).render();

    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    }).render();

    // this.videoPlayer = new VideoPlayerView();
    // this.videoPlayer.render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
