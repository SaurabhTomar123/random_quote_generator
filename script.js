let quotes = [
  "“If the light is in your heart, you will find your way home.” ",
  "“Grace comes to forgive and then forgive again.”",
  `“You are not a drop in the ocean. You are the entire ocean, in a drop.”`,
];
let author = ["Rumi", "RUMI", "RuMi"];

let quotePlace = document.getElementById("text");
let authorPlace = document.getElementById("author");

let tweet = document.getElementById("tweet-quote");
function getQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);

  let quoteVal = quotes[randomIndex];
  let authorVal = author[randomIndex];
  quotePlace.textContent = quoteVal;
  authorPlace.textContent = authorVal;
}

function tweetIt() {
  const tweetUrl =
    "https://twitter.com/intent/tweet?text=" +
    quotePlace.textContent +
    " -" +
    authorPlace.textContent;
  tweet.setAttribute("href", tweetUrl);
}
let nextBtn = document.getElementById("new-quote");
nextBtn.addEventListener("click", getQuote);
tweet.addEventListener("click", tweetIt);
