// we going to set global variables to our game.
var startScreen;
var gameHTML;
var counter = 30;
var questionArray = ["what is the capital of Egypt?", "what is the capital of USA?"];
var answerArray = [["Canberra", "Melbourne", "Cairo", "Darwin"],["Washington DC","California","Florida","New York"]]; 
var correctAnswer = ["C. Cairo", "A. Washington DC"];
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
			generateHTML();
			timeWrapper();
		});
});

// creat a function to set time to 30 seconds for every quetion.
		function timeWrapper(){
			theClock = setInterval(thirtySeconds, 1000);
			function thirtySeconds() {
				if (counter === 0){
					clearInterval(theClock);
				}
				if (counter > 0) {
					counter--;
				}
				$(".timer").html(counter);
			}
		}

// creat a function that generate win, loss, unanswered, generateHTML  and finalScreen.

		function generateLossDueToTimeOut() {
			unansweredTally++;
			gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswer[questionCounter] + "</p>";
			$(".mainArea").html(gameHTML);
			setTimeout(wait, 1000 * 3); 
		}

		function generateWin() {
			correctTally++;
			gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswer[questionCounter] + "</p>";
			$(".mainArea").html(gameHTML);
			setTimeout(wait, 1000 * 3);
		}

		function generateLoss() {
			incorrectTally++;
			gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswer[questionCounter] + "</p>";
			$(".mainArea").html(gameHTML);
			setTimeout(wait, 1000 * 3);
		}

		function generateHTML() {
			gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
			$(".mainArea").html(gameHTML);
		}

		function finalScreen() {
			gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'> Restart </a></p>";
			$(".mainArea").html(gameHTML);
		}













