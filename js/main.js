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


    // New Log button listner, just calls function for switchScreen
    $('#newLogBtn').on('click touch', function() {
        switchScreen("newLogStart");
    });

    // Forward navigation buttons listner
    // this gets the id of the only visilbe class with the name page
    // then increments the index of whereever that id is in the pages array
    $('.navForwardBtn').on('click touch', function() {
        var page = $( ".page:visible" ).get(0).id;
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