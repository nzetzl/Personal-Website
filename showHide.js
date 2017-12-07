/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
    "use strict";
    $(".tabs, h1").click(function () {
        var sectionID = $(this).attr("id");
        $(".section").fadeOut();
    });
    $("#homeTab").click(function () {
        $("#Home").delay(500).fadeIn();
    });

    $("#skillsTab").click(function () {
        $("#Skills").delay(500).fadeIn();
    });

    $("#interestsTab").click(function () {
        $("#Interests").delay(500).fadeIn();
    });

    $("#projectsTab").click(function () {
        $("#Projects").delay(500).fadeIn();
    });
    
    $("#resumeTab").click(function () {
        $("#Resume").delay(500).fadeIn();
        //window.open("/Resume.pdf", "_blank");
    });

});