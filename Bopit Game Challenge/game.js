let buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4); // RNG
    let randomChosenColour = buttonColours[randomNumber]; //Chose colour
    console.log(gamePattern.push(randomChosenColour)); //Push colour to array

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100); //button flash

    let audio = new Audio("sounds/" + randomChosenColour + ".mp3"); // select sound
    audio.play(); //play sound
}

$(("#" + randomChosenColour || "#startButton")).on("click", function() {
    handlerFunc();
});

function handlerFunc() {
    let userChosenColour = (this);
}