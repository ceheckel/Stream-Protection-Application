

$( document ).ready(function() {
  /* validation START */

  $('.ph').keyup(function() {
      var phEl = $("#"+this.id);
      var ph = phEl.val()
      if (ph < 5.5 || ph > 9.5) {
        $('#'+this.id+'_alert').css('display','inline');
      } else {
        $('#'+this.id+'_alert').css('display','none');
      }
      if (ph > 14 || ph < 0) {
        phEl.css("border-color", "red");
        alert("pH is between 0 and 14")
      } else {
        phEl.css("border-color", "white");
      }
  });

  $('#nitrate_1').keyup(function() {
    if ($('#nitrate_1').val() > 10) $('#nitrate_1_alert').css('display','inline');
    else $('#nitrate_1_alert').css('display','none');
  });
  $('#nitrate_2').keyup(function() {
    if ($('#nitrate_2').val() > 10) $('#nitrate_2_alert').css('display','inline');
    else $('#nitrate_2_alert').css('display','none');
  });

  $('#ammonia_blank').keyup(function() {
    if ($('#ammonia_blank').val() >= 1) $('#ammonia_blank_alert').css('display','inline');
    else $('#ammonia_blank_alert').css('display','none');
  });
  $('#ammonia_1').keyup(function() {
    if ($('#ammonia_1').val() >= 1) $('#ammonia_1_alert').css('display','inline');
    else $('#ammonia_1_alert').css('display','none');
  });
  $('#ammonia_2').keyup(function() {
    if ($('#ammonia_2').val() >= 1) $('#ammonia_2_alert').css('display','inline');
    else $('#ammonia_2_alert').css('display','none');
  });

  $('#op_blank').keyup(function() {
    if ($('#op_blank').val() >= 1) $('#op_blank_alert').css('display','inline');
    else $('#op_blank_alert').css('display','none');
  });
  $('#op_1').keyup(function() {
    if ($('#op_1').val() >= 1) $('#op_1_alert').css('display','inline');
    else $('#op_1_alert').css('display','none');
  });
  $('#op_2').keyup(function() {
    if ($('#op_2').val() >= 1) $('#op_2_alert').css('display','inline');
    else $('#op_2_alert').css('display','none');
  });

  /*
  $('#').keyup(function() {
    if ($('#').val() > 10) $('#_alert').css('display','inline');
    else $('#_alert').css('display','none');
  });
  */
  /* validation END */
});
