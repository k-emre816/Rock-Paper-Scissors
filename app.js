const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Start the Game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    //Computer Options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        //Update Images
        playerHand.src = `./assets/${this.textContent}.png`;

        computerHand.src = `./assets/loading.gif`;

        var userChoice = this.textContent;
        const winner = document.querySelector(".winner");
        winner.textContent = "";
        setTimeout(function () {
          computerHand.src = `./assets/${computerChoice}.png`;
          //Here is where we call compare hands
          compareHands(userChoice, computerChoice);
        }, 1750);
      });
    });
  };

  const UpdateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    //Update Text
    const winner = document.querySelector(".winner");
    //Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }
    //Check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        pScore++;
        UpdateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        UpdateScore();
        return;
      }
    }
    //Check for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins";
        cScore++;
        UpdateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        UpdateScore();
        return;
      }
    }
    //Check for scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        cScore++;
        UpdateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        UpdateScore();
        return;
      }
    }
  };

  //Is call all the inner function
  startGame();
  playMatch();
};

//start the game function
game();

// const buttonSave = document.querySelector("#storage");
// const inputSave = document.querySelector("#storageValue");
// const displayStorage = document.querySelector("#displayStorage");
// //displayStorage.textContent = localStorage.getItem("myValues");
// buttonSave.addEventListener("click", () => {
//   var inputContent = inputSave.value;

//   // get storage values
//   var storageValues = JSON.parse(localStorage.getItem("myValues"));
//   if (storageValues) {
//     storageValues.push(inputContent);
//   } else {
//     storageValues = [inputContent];
//   }

//   // save new all values in local storage
//   localStorage.setItem("myValues", JSON.stringify(storageValues));
// });
