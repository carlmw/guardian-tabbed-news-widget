var Mustache = require('mustache'),
    tmpl = [
      '<ol>',
        '{{#.}}',
        '<li>',
          '<a href="{{webUrl}}">{{webTitle}}</a>',
          '<p>{{{fields.trailText}}}</p>',
        '</li>',
        '{{/.}}',
      '</ol>'
    ].join('');

module.exports = function ($, fetch, domEl) {
  var $el = $(domEl),
      $content = $el.find('.content'),
      $sections = $el.find('ul li');

  loadSection($el.find('a[data-section]').data('section'));

  $el.on('click', 'a[data-section]', function (e) {
    e.preventDefault();
    loadSection($(this).data('section'), renderSection);
  });

  function loadSection (name) {
    $sections.removeClass('active');
    $el.find('.' + name).addClass('active');
    fetch.section($, name, renderSection);
  }

  function renderSection (data) {
    $content.html(Mustache.to_html(tmpl, data.response.results));
  }
};
