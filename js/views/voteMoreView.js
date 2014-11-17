var eb = require("../eventBus");
var Handlebones = require("handlebones");
var template = require("../tmpl/voteMore");
var utils = require("../util/utils");

module.exports = Handlebones.ModelView.extend({
  name: "vote-more-view",
  template: template,
  events: {
  },
  context: function() {
    var ctx = Handlebones.ModelView.prototype.context.apply(this, arguments);
    ctx.oneMore = ctx.remaining === 1;
    ctx.twoMore = ctx.remaining === 2;
    return ctx;
  },
  initialize: function(options) {
    Handlebones.ModelView.prototype.initialize.apply(this, arguments);
  }
});