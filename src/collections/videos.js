var Videos = Backbone.Collection.extend({

  model: Video,

  search: function(query) {
    var self = this;
    Backbone.ajax({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {  
        maxResults: '5',
        part: 'snippet',
        q: query,
        key: window.YOUTUBE_API_KEY
      },
      dataType: 'json',
      success: function (data) {
        self.populateVideoList(data.items);
      },
      error: function (data) {
        console.error('error');
      }
    });
  },

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
