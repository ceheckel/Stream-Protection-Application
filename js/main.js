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
    // By Logan Wilson
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
    document.getElementById('site_time').value = hours+":"+minutes;

    navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        console.log("lat: ", lat, " long: ",long);
        document.getElementById('latitude').value = lat;
        document.getElementById('longitude').value = long;
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


    // Submit button listner
    // By Logan Wilson
    $('#sendEmail').on('click touch', function() {

        var site_name = $("#site_name").val();
        var wbid = $("#wbid").val();
        var legal = $("#legal").val(); 
        var county = $("#county").val(); 
        var date = $("#date").val(); 
        var latitude = $("#latitude").val(); 
        var longitude = $("#longitude").val(); 
        var site_time = $("#site_time").val(); 
        var sampler_1 = $("#sampler_1").val(); 
        var sampler_2 = $("#sampler_2").val(); 
        var weather = $("#weather").val(); 
        var wind_spd = $("#wind_spd").val(); 
        var wind_dir = $("#wind_dir").val(); 
        var stage = $("#stage").val(); 
        var stage_qual = $("#stage_qual").val(); 
        var secchi_depth = $("#secchi_depth").val(); 
        // var secchi_vis = $("#secchi_vis").val();
        var site_obs_none = $("#site_obs_none").val(); 
        var clean = $("#clean").val(); 
        var manure = $("#manure").val(); 
        var unsightly = $("#unsightly").val(); 
        var foam = $("#foam").val(); 
        var detritus = $("#detritus").val(); 
        var trash = $("#trash").val(); 
        var sig_algae = $("#sig_algae").val(); 
        var fish_kill = $("#fish_kill").val();
        var dead_animals = $("#dead_animals").val();
        var iron_precip = $("#iron_precip").val();
        var siltation = $("#siltation").val();
        var flow_alter = $("#flow_alter").val();
        var habitat_alter = $("#habitat_alter").val();
        var oil_film = $("#oil_film").val();
        var odor = $("#odor").val();
        var exotic_spp = $("#exotic_spp").val();
        var cattle = $("#cattle").val();
        var obs_comments = $("#obs_comments").val();
        var air_temp = $("#air_temp").val();
        //var air_temp_comments = $("#air_temp_comments").val();
        var water_temp = $("#water_temp").val();
        //var water_temp_comments = $("#water_temp_comments").val();
        var do_1 = $("#do_1").val();
        var do_1_comments = $("#do_1_comments").val();
        var do_2 = $("#do_2").val();
        var do_2_comments = $("#do_2_comments").val();
        var ph_1 = $("#ph_1").val();
        var ph_1_comments = $("#ph_1_comments").val();
        var ph_2 = $("#ph_2").val();
        var ph_2_comments = $("#ph_2_comments").val();
        var nitrate_1 = $("#nitrate_1").val();
        var nitrate_1_comments = $("#nitrate_1_comments").val();
        var nitrate_2 = $("#nitrate_2").val();
        var nitrate_2_comments = $("nitrate_2_comments").val();
        var nitrite_1 = $("#nitrite_1").val();
        var nitrite_1_comments = $("#nitrite_1_comments");
        var nitrite_2 = $("#nitrite_2");
        var nitrite_2_comments = $("#nitrite_2_comments");
        // var ammonia_blank = $("#ammonia_blank").val();
        // var ammonia_blank_comments = $("#ammonia_blank_comments").val();
        var ammonia_1 = $("#ammonia_1").val();
        var ammonia_1_comments = $("#ammonia_1_comments").val();
        var ammonia_2 = $("#ammonia_2").val();
        var ammonia_2_comments = $("#ammonia_2_comments").val();
        var op_blank = $("#op_blank").val();
        var op_blank_comments = $("#op_blank_comments").val();
        var op_1 = $("#op_1").val();
        var op_1_comments = $("#op_1_comments").val();
        var op_2 = $("#op_2").val();
        var op_2_comments = $("#op_2_comments").val();
        var chloride_blank = $("#chloride_blank").val();
        var chloride_blank = $("#chloride_blank").val();
        var chloride_1 = $("#chloride_1").val();
        var chloride_1_comments = $("#chloride_1_comments").val();
        var chloride_2 = $("#chloride_2").val();
        var chloride_2_comments = $("#chloride_2_comments").val();
        var date_row = $("#date_row").val();
        var volunteer_row = $("#volunteer_row").val();
        var activity_row = $("#activity_row").val();
        var hours_row = $("#hours_row").val();

        var volunteerCSV = "";
        // Get volunteers
        var volunteerCount = parseInt($("#volunteerCount").val()) + 1;
        for (let i = 0; i < volunteerCount; i++) {
            let volunteerName = $("#volunteer_name_" + i).val();
            let volunteerDate = $("#volunteer_date_" + i).val();
            let volunteerActivity = $("#volunteer_activity_" + i).val();
            let volunteerHours = $("#volunteer_hours_" + i).val();

            volunteerCSV = volunteerCSV + volunteerName + "," + volunteerDate + "," + volunteerActivity + "," + volunteerHours + ",";
        }

        volunteerCSV = volunteerCSV.substring(0, volunteerCSV.length - 1); // remove last comma

        // Create CSV
        var csv = site_name + "," + wbid + "," + legal + "," + county + "," + date + "," + latitude + "," + longitude + "," + 
                    site_time + "," + sampler_1 + "," + sampler_2 + "," + weather + "," + wind_spd + "," + wind_dir + "," + 
                    stage + "," + stage_qual + "," + secchi_depth + "," + /*secchi_vis +*/  "," + site_obs_none + "," + clean + "," + 
                    manure + "," + unsightly + "," + foam + "," + detritus + "," + trash + "," + sig_algae + "," + fish_kill + "," + 
                    dead_animals + "," + iron_precip + "," + siltation + "," + flow_alter + "," + habitat_alter + "," + oil_film + "," + 
                    odor + "," + exotic_spp + "," + other_obs + "," + cattle + "," + obs_comments + "," + air_temp + "," /*+ air_temp_comments*/ + "," + 
                    water_temp + "," /*+ water_temp_comments*/ + "," + do_1 + "," + do_1_comments + "," + do_2 + "," + do_2_comments + "," + 
                    ph_1 + "," + ph_1_comments + "," + ph_2 + "," + ph_2_comments + "," + nitrate_1 + "," + nitrate_1_comments + "," + 
                    nitrate_2 + "," + nitrate_2_comments + "," + nitrite_1 + "," + nitrite_1_comments + "," + nitrite_2 + "," + nitrite_2_comments + "," +
                    /*ammonia_blank +*/ "," + /*ammonia_blank_comments +*/ "," + ammonia_1 + "," + ammonia_1_comments + "," + ammonia_2 + "," + 
                    ammonia_2_comments + "," + op_blank + "," + op_blank_comments + "," + op_1 + "," + op_1_comments + "," + chloride_1 + "," + 
                    chloride_1_comments + "," + chloride_2 + "," + chloride_2_comments + "," + date_row + "," + volunteer_row + "," + activity_row + "," + 
                    hours_row + "," + volunteerCSV;


        // var csv = "hello world";
        // $.ajax({
        //   type: 'POST',
        //   url: 'sendEmail.php',
        //   data: {'csv': csv},
        // });
        console.log(csv);
    });
});


// function switchScreen
// screenToShow: string of next screen in pages array
// defaults to home page
function switchScreen(screenToShow) {
    closeNav();
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


// Side Navigation - Jake Mager
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}