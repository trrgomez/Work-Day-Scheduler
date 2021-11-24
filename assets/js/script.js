$(document).ready(function () {
    // current day is displayed at the top of the calendar
    var date = new Date();
    var time = (date.getMonth()+1)+'-'+date.getDate()+'-'+date.getFullYear();
    $('#currentDay').text(time)

    // hide the alert divs
    $("#saveTask").hide()
    $("#error").hide()

    // each time block is color-coded indicating whether it is in the past, present, or future
    $(".time-block").each(function () {
        // gets the current date and grabs the hour
        var time = new Date();
        var hour = time.getHours();

        // grabs the hour id
        var currHour = parseInt($(this).attr("id"));

        // checks to see if hour is past, present or future and compares the value with current hour
        if (hour > currHour) {
            $(this).addClass("past");
        } else if (hour === currHour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    });

    // saves the text for the event in local storage
    $(".saveBtn").on("click", function () {
        // grabs the value in text area
        var text = $(this).siblings(".description").val();
        // grabs the text hour corresponding to the textarea
        var time = $(this).siblings(".hour").text();

        if(!text){
            // the user is alerted that no input was entered
            $("#error").show()
            setTimeout(function(){
              $("#error").hide()
            }, 4000)
          }else {
        // saves the time and text values in local storage
            localStorage.setItem(time, text);
             // the user is alerted that their event is saved
            $("#saveTask").show()
            setTimeout(function(){
              $("#saveTask").hide()
            }, 4000)
          }


    });

    $(".hour").each(function () {
        // grabs the text element of the hour
        var getHour = $(this).text();
        // grabs the value in textarea at that hour from local storage
        var description = localStorage.getItem(getHour);

        // if there is a value, we set the textarea with that value from local storage
        if (description) {
            $(this).siblings(".description").val(description);
        }

    });

    // button that will clear local storage and textarea
    $('#clear').on('click', function(){
        localStorage.clear()
        $('textarea').val('')
      })

})