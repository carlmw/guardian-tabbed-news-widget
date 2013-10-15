var tabbedNews = require("../lib/tabbed_news"),
    jquery = require('jquery'),
    fetch = {
      section: function () {}
    };

describe("tabbedNews", function () {
  var domEl;
  beforeEach(function () {
    window.document.documentElement.innerHTML = [
    '<div id="latest-news">',
      '<a href="" data-section="uk-news"></a>',
    '</div>'
    ].join('');
    domEl = window.document.getElementById('latest-news');
  });

  describe("when initialised", function () {
    it("loads the first section", function () {
      var fetchMock = sinon.mock(fetch);
      fetchMock.expects('section').withArgs(jquery, 'uk-news');
      tabbedNews(jquery, fetch, domEl);

      fetchMock.verify();
    });
  });
});
