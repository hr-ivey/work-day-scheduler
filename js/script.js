// Assigning page elements to variables.
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
// Adds "past" condition and styling.
        if(currentHour > colHour) {
        $( ".textarea" ).addClass("past");
// Adds "future" conditions and styling.
        } else if
        (currentHour < colHour)
        $( ".textarea" ).addClass("future");
// Adds "present" condition and styling.
        else {
        $( ".textarea" ).addClass("present");
        }
        return
    }
)