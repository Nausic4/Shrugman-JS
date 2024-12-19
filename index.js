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
