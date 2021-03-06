// we going to set global variables to our game.
var startScreen;
var gameHTML;
var counter = 30;
var questionArray = ["What is the capital of Egypt?", "What is the capital of USA?", "What is HTML stand for?" ];
var answerArray = [["Canberra", "Melbourne", "Cairo", "Darwin"],["Washington DC","California","Florida","New York"],["Hyper Text Markup Language","Hyper Text Makeup Language","High Text Markup Language","Hello Text Makeup Language"]]; 
var correctAnswer = ["C. Cairo", "A. Washington DC", "A. Hyper Text Markup Language"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;
var imageArray = ["<img class='center-block img-right' src='assets/images/Egypt.png'>", "<img class='center-block img-right' src='assets/images/USA.png'>", "<img class='center-block img-right' src='assets/images/HTML5.png'>"]


$(document).ready(function(){

    // creat a function to intialize and start the screen.
		function intialScreen (){
			startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start</a></p>";
			$(".mainArea").html(startScreen);
		}

		intialScreen();

		$("body").on("click", ".start-button", function(event){
			event.preventDefault(); 
			generateHTML();

			timeWrapper();
		});


		$("body").on("click", ".answer", function(event){
			// if answer is correct, generatewin else generate loss.
				selectedAnswer = $(this).text();
				if(selectedAnswer === correctAnswer[questionCounter]) {

					clearInterval(theClock);
					generateWin();
				}
				else {

					clearInterval(theClock);
					generateLoss();
				}
		});

		$("body").on("click", ".reset-button", function(event){
			resetGame();

		});

});


// creat a function that generate win, loss, unanswered, generateHTML  and finalScreen.

		function generateLossDueToTimeOut() {
			unansweredTally++;
			gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswer[questionCounter] + "</p>"  + "<img class='center-block img-wrong' src='assets/images/x.png'>";
			$(".mainArea").html(gameHTML);
			setTimeout(wait, 1000 * 3); 
		}

		function generateWin() {
			
			gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswer[questionCounter] + "</p>" + imageArray[questionCounter];
			$(".mainArea").html(gameHTML);
			setTimeout(wait, 1000 * 3);
			correctTally++;
		}

		function generateLoss() {
			incorrectTally++;
			gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswer[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/x.png'>";
			$(".mainArea").html(gameHTML);
			setTimeout(wait, 1000 * 3);
		}

		function generateHTML() {
			gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] +
			 "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + 
			"</p><p class='answer'>B. " +answerArray[questionCounter][1]+
			 "</p><p class='answer'>C. " +answerArray[questionCounter][2]+
			  "</p><p class='answer'>D. " +answerArray[questionCounter][3] 
			  +"</p>";
			$(".mainArea").html(gameHTML);
		}

		function finalScreen() {
			gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'> Restart </a></p>";
			$(".mainArea").html(gameHTML);
		}

	// creat a function to set time to 30 seconds for every quetion.
			function timeWrapper(){
				theClock = setInterval(thirtySeconds, 1000);
				function thirtySeconds() {
					if (counter === 0){
						clearInterval(theClock);
						generateLossDueToTimeOut();
					}
					if (counter > 0) {
						counter--;
					}
					$(".timer").html(counter);
				}
			}

		// creat a function to question counter.

		function wait() {
			if (questionCounter < 2) {
			questionCounter++;
			generateHTML();
			counter = 30;
			timeWrapper();
			}
			else {
				finalScreen();
			}
		}

		// creat a function to reset the game.

		function resetGame() {
			questionCounter = 0;
			correctTally = 0;
			incorrectTally = 0;
			unansweredTally = 0;
			counter = 30;
			generateHTML();
			timeWrapper();
		}

