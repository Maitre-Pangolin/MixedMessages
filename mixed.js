const fs = require("fs");

let adjectives, nouns;

adjectives = fs.readFileSync("./adjective.txt", "utf8").split("\r\n");
nouns = fs.readFileSync("./noun.txt", "utf8").split("\r\n");

function arrayRandomPick(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function firstLetterUpperCase(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function randomID100() {
  return Math.floor(Math.random() * 100);
}

function createUserName() {
  let userName = "";
  userName += firstLetterUpperCase(arrayRandomPick(adjectives));
  userName += firstLetterUpperCase(arrayRandomPick(nouns));
  userName += "_" + randomID100();
  return userName;
}

console.log(createUserName());
