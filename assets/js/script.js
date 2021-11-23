$(document).ready(function(){
    // current day is displayed at the top of the calendar
    var date = new Date()
    var toady = `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`
    $('#currentDay').text(toady)

    // hide the alert divs
    $("#saveTask").hide()
    $("#error").hide()

    // each time block is color-coded indicating whether it is in the past, present, or future
    $(".hour").each(function () {
        var time = new Date();
        var hour = time.getHours();
    
        var currHour = parseInt($(this).attr("id"));
    
        if (hour > currHour) {
          $(this).addClass("past");
        } else if (hour === currHour) {
          $(this).addClass("present");
        } else {
          $(this).addClass("future");
        }
      });
})