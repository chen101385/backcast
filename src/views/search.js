var SearchView = Backbone.View.extend({

  render: function() {
    this.$el.html(this.template());
    this.$('button').click((e) => {
      this.collection.search(this.$('input').val());
    });
    this.$('input').on('keyup', (e) => {
      if (e.which === 13 || e.keyCode === 13) {
        this.collection.search(this.$('input').val());
      }

    });
    return this.$el;
  },

  template: templateURL('src/templates/search.html')

});
