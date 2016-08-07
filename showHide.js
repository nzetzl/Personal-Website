/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
    "use strict";
    $(".tabs, h1").click(function () {
        var sectionID = $(this).attr("id");
        if (sectionID !== "resumeTab") {
            $(".section").fadeOut();
        }
    });
    $("#homeTab").click(function () {
        $("#home").delay(500).fadeIn();
    });

    $("#skillsTab").click(function () {
        $("#skills").delay(500).fadeIn();
    });

    $("#interestsTab").click(function () {
        $("#interests").delay(500).fadeIn();
    });

    $("#projectsTab").click(function () {
        $("#projects").delay(500).fadeIn();
    });
    
    $("#resumeTab").click(function () {
        window.open("/Resume.pdf", "_blank");
    });

});