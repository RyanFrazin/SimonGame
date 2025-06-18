gamePattern = [];
userClickedPattern = [];
buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;

$(document).keypress(function() {
    nextSequence();
});

function nextSequence() {
    userClickedPattern = [];

    var randomNumber = Math.floor(Math.random() * 4); // Generates a random number between 1 and 3
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    level++;

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    $("#level-title").text("level" + " " + level);

    playSound(randomChosenColor);
    console.log(gamePattern);
}

$(".btn").click(function() {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    animatePress(userChosenColor);
    playSound(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);
    console.log(userClickedPattern);
});

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");

    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
    var wrongAudio = new Audio("sounds/wrong.mp3");

    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success");

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        wrongAudio.play();
       
        $("body").addClass("game-over");
        
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        $("h1").text("Game Over, Press Any Key to Restart");

        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
}