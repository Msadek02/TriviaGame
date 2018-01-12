// we going to set global variables to our game.
var startScreen;
var gameHTML;
var counter = 30;
var questionArray = [""];
var answerArray = [[""]]; 
var correctAnswer = [];
var questionCounter = 0;
var selectAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;


$(document).ready(function(){

    // creat a function to intialize and start the screen.
			function intialScreen (){
				startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Button</a></p>";
				$(".mainArea").html(startScreen);
			}

			intialScreen();

			$("body").on("click", ".start-button", function(event){
				event.preventDefault(); 
			});
});