(function() {

  var $      = document.getElementById.bind(document);

  var App = function() {
    this.$el  = $('app');
    this.renderAgeLoop();
  };

  App.fn = App.prototype;

  App.fn.renderAgeLoop = function() {
    this.interval = setInterval(this.renderAge.bind(this), 100);
  };

  App.fn.renderAge = function() {
    var date     = moment().format('X');

    requestAnimationFrame(function() {
      this.html(this.view('age')({
        count: date
      }));
    }.bind(this));
  };

  App.fn.html = function(html) {
    this.$el.innerHTML = html;
  };

  App.fn.view = function(name) {
    var $el = $(name + '-template');
    return Handlebars.compile($el.innerHTML);
  };

  window.app = new App();
})();
