console.log("Script Started");

//Variable to track the number of clicks
let clicks = 0;

//Set the value of one click
let clickValue = 1;

//Variable to track the number of levels
let level = 1;

//Variable to store the click display h1 element
let clickDisplay = document.getElementById("click-display");

//Variable to store the level display h1 element
let levelDisplay = document.getElementById("level-display");

//Set the initial text for click count h1
clickDisplay.innerText = "Clicks: " + clicks;

//Set the initial text for level 
levelDisplay.innerText = "Level: " + level;

//Called each time the image is clicked
function handleClick() {
    console.log("click");

    // Add one to click count
    clicks = clicks + clickValue;

    // Update display
    clickDisplay.innerText = "Clicks: " + clicks;

    //Check if have 10 cliks, ande if is level one or two
    if (clicks == 10) {
        alert("Congratulations! You have reached 10 clicks and advanced to level 2!");
    }
     if (clicks >= 10) {
        clickValue = 2;
        levelDisplay.innerText = "Level: 2";
    }
    if (clicks == 50) {
        alert("Congratulations! You have reached 50 clicks and advanced to level 3!");
    }
     if (clicks >= 50) {
        levelDisplay.innerText = "Level: 3";
        clickValue = 5;
    }
} 