// Assigning page elements to variables.
var userText = $(".textarea");
var currentDatePage = $(".currentdate");

// Other variables.
var currentDate = moment().toDate()
var currentHour = moment().format("h")

// Adds current date (and time) to top of page.
currentDatePage.textContent = currentDate; 

$(".hour").each(function() {
    var colHour = $(this).attr("id") 
    console.log("Column ID/hour = ", colHour);
    console.log("Current hour = ", currentHour);
        if (currentHour === colHour) {
        $( ".textarea" ).addClass("present");
        } else if (currentHour > colHour) {
        $( ".textarea" ).addClass("past");
        } else if (currentHour < colHour) {
        $( ".textarea" ).addClass("future");
        }
    }
)

// userText = $('input');
// localStorage.setItem(userText.value)
