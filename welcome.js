/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    'use strict';
    var modal = document.getElementById('welcomeBox');
    var span = document.getElementsByClassName("close")[0];
    var arrow = document.getElementById("modalArrow");
    var description = document.getElementById("description");
	var toSite = document.getElementById("skip");
	var p = document.getElementById("welcome");
	var numIntroItems = 3;
	var count = 0;
        
    span.onclick = function () {
        modal.style.display = "none";
    };
    
    arrow.onclick = function () {
		count++;
		if (count === numIntroItems - 1) {
			$("#modalArrow").fadeOut();
		}
		jQuery(p).fadeOut();
		p = jQuery(p).next();
		console.log(p);
		p.delay(500).fadeIn();
//        $("#welcome, #modalArrow").fadeOut();
//        $("#description").delay(500).fadeIn();
    };
	
	toSite.onclick = function () {
		modal.style.display = "none";
	}

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
        
        //ga('send', 'event', 'anyClick', 'click')
    };
    
    window.onload = function () {
        var welcomeShown = sessionStorage.getItem("welcomeShown");
        if (welcomeShown === null || welcomeShown === false) {
            modal.style.display = "block";
            sessionStorage.setItem("welcomeShown", true);
        }
    };
});