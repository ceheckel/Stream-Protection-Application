/*
  main.js
  by Jake Mager 3/5/2018
  
  * Holds event listners for buttons
  * Dynamically navigate through pages
*/


// pages array
// This holds the order of the pages on the main app
var pages = ["home", "newLogStart", "siteConditons", "observations", "bacteria", "doAndph", "nitrogen", "phosphorus", "volunteers"];

// otherPages array
// This holds any other pages that are not in the main app (like modals, help menus, etc)
var otherPages = [];

$( document ).ready(function() {
    
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    document.getElementById('date').value = year + "-" + month + "-" + day;

    var hours = d.getHours();
    var minutes = d.getMinutes();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    document.getElementById('time').value = hours+":"+minutes;

    navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        console.log("lat: ", lat, " long: ",long);
        document.getElementById('lat').value = lat;
        document.getElementById('long').value = long;
    });

/*    var csv = "hello world";
    $.ajax({
      type: 'POST',
      url: 'sendEmail.php',
      data: {'csv': csv},
    });
    console.log("csv sent");*/

    // New Log button listner, just calls function for switchScreen
    $('#newLogBtn').on('click touch', function() {
        switchScreen("newLogStart");
    });

    // Forward navigation buttons listner
    // this gets the id of the current page which is the 3rd parent of the button
    // then increments the index of whereever that id is in the pages array
    $('.navForwardBtn').on('click touch', function() {
        var page = $(this).parent().parent().parent().get(0).id;
        var index = pages.indexOf(page) + 1;
        switchScreen(pages[index]);
    });

    // Back navigation buttons listner
    // same as forward btn listner ^^^^^
    $('.navBackBtn').on('click touch', function() {
        var page = $(this).parent().parent().parent().get(0).id;
        var index = pages.indexOf(page) - 1;
        switchScreen(pages[index]);
    });
    
    $('#sendEmail').on('click touch', function() {
        var csv = "hello world";
        $.ajax({
          type: 'POST',
          url: 'sendEmail.php',
          data: {'csv': csv},
        });
        console.log("csv sent");
    });
});


// function switchScreen
// screenToShow: string of next screen in pages array
// defaults to home page
function switchScreen(screenToShow) {
    if (screenToShow.length === 0) {
        screenToShow = "home";
    } 

    // loop through pages, hiding everything but screenToShow
    $.each(pages, function (index, page) {
        if (page == screenToShow) {
            $("#" + screenToShow).show();
        } else {
            $("#" + page).hide();
        }
    });
}
