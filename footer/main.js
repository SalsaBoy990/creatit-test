;$(document).ready(function () {
  // Returns width of browser viewport
  var screenWidth = $(window).width();
  console.log(screenWidth);
  var svgTriangle = $("#footer-triangle-bg");
  console.log(svgTriangle);
  if (screenWidth > 576) {
    svgTriangle.attr("viewbox", "0 0 423 355");

  } else {
    svgTriangle.attr("viewbox", "0 0 360 363");
    svgTriangle.attr("width", "360px");
    svgTriangle.attr("height", "360px");
  }
});