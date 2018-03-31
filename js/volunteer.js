/*
  volunteer.js
  by Jake Mager 3/2/2018
  
  * Dynamically add/remove volunteer 'forms' to the volunteerHolder div
  * Volunteer page has a hidden input form that holds the amount of volunteers - 1 
  * Each div has an id_n id being input name, n being amount of volunteers - 1
  * Easily go through this with a for loop
*/

$( document ).ready(function() {

    // addVolunteer event listener 
    // appends new volunteerInput_ID formDiv to volunteerHolder div
    $('#addVolunteer').on('click touch', function() {

        // get count of volunteer from hidden div
        var volunteerCount = parseInt($("#volunteerCount").val()) + 1;
        
        // max 10 volunteers
        if (volunteerCount > 9) {
            alert("Max volunteers met!");
            return;
        } 

        // create html for volunteer form
        var volunteerHTML = "<div id='volunteerInput_" + volunteerCount + "'>" +
            "<div class='row volunteerRow'>" +
                "<div class='itemLabel col-xs-6'>Name</div>" +
                "<div class='col-xs-6'>" +
                    "<input class='itemTextbox' type='text' id='volunteer_name_" + volunteerCount + "'/>" +
                "</div>" +
            "</div>" +
            "<div class='row volunteerRow'>" +
                "<div class='itemLabel col-xs-6'>Date</div>" +
                "<div class='col-xs-6'>" +
                    "<input class='itemTextbox' type='date' id='volunteer_date_" + volunteerCount + "' value='" + $("#volunteer_date_0").val() + "'/>" +
                "</div>" +
            "</div>" +
            "<div class='row volunteerRow'>" +
                "<div class='itemLabel col-xs-6'>Activity</div>" +
                "<div class='col-xs-6'>" +
                    "<input class='itemTextbox' type='text' id='volunteer_activity_" + volunteerCount + "'/>" +
                "</div>" +
            "</div>" +
            "<div class='row volunteerRow volunteerRowBottom'>" +
                "<div class='itemLabel col-xs-6'>Hours</div>" +
                "<div class='col-xs-6'>" +
                    "<input class='itemTextbox' type='number' id='volunteer_hours_" + volunteerCount + "'/>" +
                "</div>" +
            "</div>" +
        "</div>";
        
        // save new count to hidden div
        $("#volunteerCount").val(volunteerCount);

        // put html into volenteerHolder div
        $("#volunteerHolder").append(volunteerHTML);

        // scroll down page to show removeVolenteer btn
        $('html, body').animate({
        scrollTop: $("#removeVolunteer").offset().top
        }, 1000);

    });

    // removeVolunteer button event listener
    // fades then deletes the last volunteerHolder div 
    // and decreases voulunteerCount hidden div
    $('#removeVolunteer').on('click touch', function() {
        // get count of volunteer
        var volunteerCount = parseInt($("#volunteerCount").val());

        if (volunteerCount != 0) {
        $("#volunteerInput_" + volunteerCount).fadeOut();
        $("#volunteerInput_" + volunteerCount).remove();
        $("#volunteerCount").val(volunteerCount - 1);
        }
    });
})