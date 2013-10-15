var Mustache = require('mustache'),
    tmpl = [
      '<ol>',
        '{{#.}}',
        '<li>',
          '<a href="{{webUrl}}">{{webTitle}}</a>',
        '</li>',
        '{{/.}}',
      '</ol>'
    ].join('');

module.exports = function ($, fetch, domEl) {
  var $el = $(domEl);

  loadSection($el.find('a[data-section]').data('section'));

  $el.on('click', 'a[data-section]', function (e) {
    e.preventDefault();
    loadSection($(this).data('section'), renderSection);
  });

  function loadSection (name) {
    fetch.section($, name, renderSection);
  }

  function renderSection (data) {
    $el.find('.content').html(Mustache.to_html(tmpl, data.response.results));
  }
};
