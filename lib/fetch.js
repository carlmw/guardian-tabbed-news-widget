var CONTENT_ROOT = "http://content.guardianapis.com/search?show-fields=trailText&section=";

module.exports.section = function fetchSection ($, sectionName, callback) {
  $.ajax({
    type: 'GET',
    url: CONTENT_ROOT + sectionName,
    contentType: "application/json",
    dataType: 'jsonp',
    success: callback
  });
};
