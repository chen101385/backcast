var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$('.video-list').empty();
    this.collection.forEach((video) => {
      var videoView = new VideoListEntryView({model: video});

      this.$('.video-list').append(videoView.render());
    });
    return this.$el;
  },

  template: templateURL('src/templates/videoList.html')

});
