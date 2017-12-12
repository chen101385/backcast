var Videos = Backbone.Collection.extend({

  model: Video,

  populateVideoList: function(rawVideoList) {
    this.reset();
    console.log(rawVideoList);
    if (rawVideoList === window.exampleVideoData) {
      rawVideoList.forEach((rawVideo) => {
        let videoModel = new Video(rawVideo);
        this.add(videoModel);
      });
    } else {
      rawVideoList.items.forEach((rawVideo) => {
        let videoModel = new Video(rawVideo);
        this.add(videoModel);
      });
    }
    this.trigger('sync', this);
    this.models[0].select();
  },

});
