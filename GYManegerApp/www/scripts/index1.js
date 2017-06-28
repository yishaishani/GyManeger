// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        
        var divList = document.getElementsByName("displayDiv").forEach(loadDivs);
    };

    $(document).on('pageinit', '#index', function () {
        $('#logIn').click(SetUsername);
        $('#home').click(goHome);
    });

    $(document).on('pagebeforeshow', '#coaches', function () {
        $('#btn_insertCoaches').click(SetCoaches);
    });


    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };

    function loadDivs(item, index) {
        document.getElementById(item.id).innerHTML = "";
        $("#" + item.id).load(item.id + ".html");
    };
    
} )();