//Loads the Lumen Logo/Link and top nav bar
$(function() {
    $("#nav").load("topnav.html");
});
//Used for conditional loading of elements based on current vendor
$(function() {
    $("#conditional-loading").load("get-vendor.php");
});
//Used for loading WANem widgets
$(function () {
    $("#latencywidget").load("latency.html");
});
$(function () {
    $("#losswidget").load("loss.html");
});
$(function () {
    $("#trafficgenerator").load("trafficgenerator.html");
});
//Used for loading the vendor selection widget
$(function () {
    $("#vendorselector").load("reroute.html");
})
//Used for loading status widget
$(function() {
    $("#statuswidget").load("statuswidget.html");
});
//Used for vendor only status widget
$(function() {
    $("#vendorstatus").load("vendor-status.php");
});
//Used for opening vendor portal
$(function() {
    $("#reportingredirect").load("reporting-redirect.php");
});
//Used for loading application filtering test details and status
$(function() {
    $("#appfilter").load("applicationfiltering.html");
});
//Used for loading geo-ip filtering test details and status
$(function() {
    $("#geofilter").load("geofiltering.html");
});
//Used for loading virus over ssl filtering test details and status
$(function() {
    $("#virusssl").load("virus-ssl.html");
});
//Used for loading virus over ssl filtering test details and status
$(function() {
    $("#botnetcallback").load("botnetcallback.html");
});
//Used for loading adult site icon
$(function() {
    $("#adult").load("adult.html");
});
$(function() {
    $("#tests").load("tests.html");
});
