// Please note that Handlebars helpers will only be found automatically by the
// resolver if their name contains a dash (reverse-word, translate-text, etc.)
// For more details: http://stefanpenner.github.io/ember-app-kit/guides/using-modules.html

export default Ember.Handlebars.makeBoundHelper(function(markdown) {
  if (markdown){
    var showdown = new Showdown.converter();
    return new Ember.Handlebars.SafeString(showdown.makeHtml(markdown));
  }else{
    return '';
  }
});