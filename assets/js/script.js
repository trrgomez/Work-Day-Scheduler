$(document).ready(function () {
    // current day is displayed at the top of the calendar
    var date = new Date()
    var toady = `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`
    $('#currentDay').text(toady)

    // hide the alert divs
    $("#saveTask").hide()
    $("#error").hide()

    // each time block is color-coded indicating whether it is in the past, present, or future
    $(".hour").each(function () {
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

        // validates if there is a value in textarea, if not the user is alerted
        if (!text) {
            $("#error").show()
            setTimeout(function () {
                $("#error").hide()
            }, 4000)
        } else {
            // saves the time and text values in local storage
            localStorage.setItem(time, text);
            // the user is alerted that their event is saved
            $("#saveTask").show()
            setTimeout(function () {
                $("#saveTask").hide()
            }, 4000)
        }

    });

})