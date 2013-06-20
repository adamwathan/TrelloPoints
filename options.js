// Save this script as `options.js`

$(function() {
  $('#save').click(function() {
    var text = $('#point-values').val();
    var text = text.replace(/ /g, "");
    var lines = text.split(",");
    localStorage["point_values"] = JSON.stringify(lines);
  });
});