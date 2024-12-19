const prompt = require("prompt-sync")({ sigint: true });

console.log("Welcome to the Shrugman! :-)");

//Library with Categories:
const movies = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Dark Knight",
  "The Godfather Part II",
  "12 Angry Men",
];
const books = [
  "Anna Karenina",
  "Madame Bovary",
  "War and Peace",
  "The Great Gatsby",
  "In Search of Lost Time",
];
const anime = [
  "Hunter x Hunter",
  "Code Geass",
  "Cowboy Bebop",
  "Fighting Spirit",
  "Death Note",
];
//-------------------------

//Function for repeating the game :
function repeat() {
  let rep = prompt(
    "Do you want to continue? Type (y) for yes. Type (n) for no. "
  );
  if (rep.toLowerCase() === "y") {
    return game();
  } else if (rep.toLowerCase() === "n") {
    console.clear();
    return "Goodbye!";
  } else {
    console.log("You typed an invalid character!");
    return repeat();
  }
}
//-------------------------

//Storing a list of the games done:
const gameScoreArray = [];
let gameScore = "";
//-------------------------

console.log(game());

//Function for playing the game:
function game() {
  let ask = prompt(
    "Choose a category: Type (b) for Books. Type (m) for Movies. Type (a) for Anime."
  );

  let stringWord = "";

  if (ask.toLowerCase() === "b") {
    stringWord = books[Math.floor(Math.random() * 5)];
  } else if (ask.toLowerCase() === "m") {
    stringWord = movies[Math.floor(Math.random() * 5)];
  } else if (ask.toLowerCase() === "a") {
    stringWord = anime[Math.floor(Math.random() * 5)];
  } else {
    console.log("You typed an invalid character!");
    return game();
  }

  //Storage of variables needed for the game:
  const arrayCheck = stringWord.split("");
  const finalArray = [];
  const emoji = `--(:-/)<-<`;
  const arrayLetter = [];
  let attempts = "";
  //--------------------

  //Hiding the word:
  for (let i = 0; i < stringWord.length; i++) {
    if (stringWord[i] !== " ") {
      finalArray.push("_ ");
    } else {
      finalArray.push(" ");
    }
  }

  let finalString = finalArray.join("");
  //--------------------

  console.clear();
  console.log(finalString);
  console.log(attempts);

  //Inside the real loop of the game:
  while (attempts.length < 10 && finalArray.includes("_ ")) {
    let answer = prompt("guess a letter (or a number ;-) ):");

    console.clear();

    //If you type a letter that you already used:
    if (stringWord.toLowerCase().includes(answer.toLowerCase())) {
      if (arrayLetter.includes(answer.toLowerCase())) {
        console.log("You already used that letter!");
      } else {
        arrayLetter.push(answer.toLowerCase());
        arrayCheck.forEach((x, i) =>
          x.toLowerCase() === answer.toLowerCase()
            ? (finalArray[i] = x)
            : (finalArray[i] = finalArray[i])
        );
      }
    } else if (arrayLetter.includes(answer.toLowerCase())) {
      console.log("You already used that letter!");
    } else {
      arrayLetter.push(answer.toLowerCase());
      attempts += emoji[attempts.length];
    }
    finalString = finalArray.join("");
    //---------------------

    console.log(finalString);
    console.log(attempts);
  }
  //---------------------

  gameScoreArray.push(stringWord);

  //Declaring victory or loss:
  if (!finalArray.includes("_ ")) {
    console.log("YOU WON!");
    gameScore += `${gameScoreArray.length}. ${stringWord} -WIN\n`;
  } else if (attempts.length === 10) {
    console.log("YOU LOSE");
    gameScore += `${gameScoreArray.length}. ${stringWord} -LOSE\n`;
  }
  //----------------------
  console.log(gameScore);
  return repeat();
}
//--------------------
