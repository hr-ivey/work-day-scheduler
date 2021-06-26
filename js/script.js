// Assigning page elements to variables.
var userText = document.querySelector(".textarea");
var currentDatePage = document.querySelector(".currentdate");

// Other variables.
var currentDate = moment().toDate()
var currentHour = moment().format("h")

// Adds current date (and time) to top of page.
currentDatePage.textContent = currentDate; 

$(".hour").each(function() {
    var colHour = $(this).attr("id") 
    console.log("Column ID/hour = ", colHour);
    console.log("Current hour = ", currentHour);
// If the current hour is equal to the hour in column, add "present" styling.
        if (currentHour === colHour) {
        $( ".textarea" ).addClass("present");
// Adds "past" conditions and styling styling.
        } else if ((currentHour < colHour - 6) && (currentHour > colHour)) {
        $( ".textarea" ).addClass("past");
// Adds "future" conditions and styling.
} else if ((currentHour > colHour + 6) && (currentHour < colHour)) {
        $( ".textarea" ).addClass("future");
    }
})

// userText = $('input');
// localStorage.setItem(userText.value)