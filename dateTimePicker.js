/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    'use strict';
    $('#datetimepicker1').datetimepicker();
    
    $('#datetimepicker1').datetimepicker({
        pickTime: false
    });
});