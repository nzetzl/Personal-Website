/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
    

    $(".tabs").click(function () {
        "use strict";
        $(".section").hide();
    });

    $("#homeTab").click(function () {
        "use strict";
        $("#home").show();
    });

    $("#skillsTab").click(function () {
        "use strict";
        $("#skills").show();
    });

    $("#interestsTab").click(function () {
        "use strict";
        $("#interests").show();
    });

    $("#projectsTab").click(function () {
        "use strict";
        $("#projects").show();
    });


});