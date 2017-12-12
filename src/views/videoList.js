var VideoListView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('sync', this.render, this);
    this.videos = new Videos(exampleVideoData);

  },


  render: function() {
    this.$el.html(this.template());
    this.$el.children().detach();
    this.videos.forEach(this.renderVideo, this);
  },

  renderVideo: function(video) {
    var videoView = new VideoListEntryView({ model: video });
    this.$el.append(videoView.render());
  },


  template: templateURL('src/templates/videoList.html')

});

