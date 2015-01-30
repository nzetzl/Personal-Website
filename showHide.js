/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {
    

$(".tabs").click(function () {
    "use strict";
    $(".section").hide();
});

$("#homeTab").click(function () {
    "use strict";
    $("#home").show(1000);
});

$("#skillsTab").click(function () {
    "use strict";
    $("#skills").show(1000);
});

$("#interestsTab").click(function () {
    "use strict";
    $("#interests").show(1000);
});

$("#projectsTab").click(function () {
    "use strict";
    $("#projects").show(1000);
});


});