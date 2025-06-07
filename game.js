gamePattern = [];
userClickedPattern = [];
buttonColors = ["red", "blue", "green", "yellow"];
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4); // Generates a random number between 1 and 3
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);

    const audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();
}
$(".btn").click(function() {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
});