gamePattern = [];
buttonColors = ["red", "blue", "green", "yellow"];
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4); // Generates a random number between 1 and 3

    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    console.log(gamePattern);
}