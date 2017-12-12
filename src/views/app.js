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
    this.$('.list').html(this.videoList.render());
    this.$('.btn').click((event) => {
      event.preventDefault();
      this.videos.search(this.$('.form-control').val());
    });

    return this.$el;
  },


  template: templateURL('src/templates/app.html')

});
