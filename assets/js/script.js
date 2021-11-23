$(document).ready(function(){
    // current day is displayed at the top of the calendar
    var date = new Date()
    var toady = `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`
    $('#currentDay').text(toady)
})