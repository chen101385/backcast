var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function(data) {
    this.videos = new Videos();
    this.videos.populateVideoList(data || window.exampleVideoData);
    this.videoPlayer = new VideoPlayerView({collection: this.videos});
    this.videoList = new VideoListView({collection: this.videos});
    this.search = new SearchView({collection: this.videos});
    this.render();
  },

  render: function() {
    var self = this;
    this.$el.html(this.template());
    this.$('.player').html(this.videoPlayer.render());
    this.$('.list').html(this.videoList.render());
    this.$('.search').html(this.search.render());
    this.$('.form-control').on('keypress', e => {
      if (e.which === 13) {
        sendQuery(self);
      }
    });
    this.$('.btn').on('click', () => {
      sendQuery(self);
    });
    sendQuery = () => {
      var query = $('.form-control').val();
      if (!query) {
        alert('Please enter a valid search');
      } else {
        self.videos.search(query);
      }
    };
    return this.$el;
  },


  template: templateURL('src/templates/app.html')

});
