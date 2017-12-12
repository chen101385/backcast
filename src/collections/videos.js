var Videos = Backbone.Collection.extend({

  model: Video,

  populateVideoList: function(videoList) {
    this.reset();
    videoList.forEach((video) => {
      let videoObj = new Video(video);
      this.add(videoObj);
    });
    this.trigger('sync', this);
    this.models[0].select();
  },

});
