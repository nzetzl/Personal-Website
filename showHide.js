/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {

    $(".tabs").click(function () {
        "use strict";
        $(".section").fadeOut();
    });
    
    $("#homeTab").click(function () {
        "use strict";
        $("#home").delay(500).fadeIn();
    });

    $("#skillsTab").click(function () {
        "use strict";
        $("#skills").delay(500).fadeIn();
    });

    $("#interestsTab").click(function () {
        "use strict";
        $("#interests").delay(500).fadeIn();
    });

    $("#projectsTab").click(function () {
        "use strict";
        $("#projects").delay(500).fadeIn();
    });

});