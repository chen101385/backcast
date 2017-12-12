var VideoListEntryView = Backbone.View.extend({

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    this.$('.video-list-entry-title').click(() => {
      this.model.select();
    });
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});