var VideoListView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('sync', this.render, this)
  },


   render: function() {
    this.$el.children().detach();
    var children = this.collection.map(function(video) {
      var video = new VideoListEntryView({ model: video }).render();
      return video;
    });
    this.$el.html(this.template());
    this.$el.append(children);
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
