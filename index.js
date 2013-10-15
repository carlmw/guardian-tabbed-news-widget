var tabbedNews = require('./lib/tabbed_news'),
    fetch = require('./lib/fetch');

// Use jquery supplied by the page
tabbedNews($, fetch, "#latest-news");
