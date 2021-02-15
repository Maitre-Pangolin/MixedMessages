const fs = require("fs");

let adjectives, nouns;

adjectives = fs
  .readFileSync("./ressources/adjective.txt", "utf8")
  .split("\r\n");
nouns = fs.readFileSync("./ressources/noun.txt", "utf8").split("\r\n");

function arrayRandomPick(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function firstLetterUpperCase(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function randomID100() {
  return Math.floor(Math.random() * 100);
}

function randomEmoticon() {
  let index = 128512 + Math.floor(Math.random() * (128591 - 128512 + 1)); // Create a decimal code between 128512 and 128591 (Emoticon range)
  return String.fromCodePoint(index);
}

function createUserName() {
  let userName = "";
  userName += randomEmoticon() + "  ";
  userName += firstLetterUpperCase(arrayRandomPick(adjectives));
  userName += firstLetterUpperCase(arrayRandomPick(nouns));
  userName += "_" + randomID100();
  return userName;
}

console.log(createUserName());
