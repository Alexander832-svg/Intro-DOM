console.log("Script Started");

//Variable to track the number of clicks
let clicks = 0;

//Variable to store the click display h1 element
let clickDisplay = document.getElementById("click-display");

//Set the initial text for click count h1
clickDisplay.innerText = "Clicks: " + clicks;

//Called each time the image is clicked
function handleClick() {
    console.log("click");

    // Add one to click count
    clicks = clicks + 1;

    // Update display
    clickDisplay.innerText = "Clicks: " + clicks;
}