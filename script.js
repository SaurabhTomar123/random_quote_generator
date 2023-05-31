let quotes = [];

let quotePlace = document.getElementById("text");
let authorPlace = document.getElementById("author");
let tweet = document.getElementById("tweet-quote");

function loadQuotes() {
  fetch("quotes.json")
    .then((Response) => Response.json())
    .then((data) => {
      quotes = data;
      console.log("Quotes loaded:", quotes);
    })
    .catch((error) => {
      console.error("error loading quotes : ", error);
    });
}
loadQuotes();
function getQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);

  let quoteVal = quotes[randomIndex];

  quotePlace.textContent = quoteVal;
}

function tweetIt() {
  const tweetUrl =
    "https://twitter.com/intent/tweet?text=" +
    quotePlace.textContent +
    " -" +
    authorPlace.textContent;
  tweet.setAttribute("href", tweetUrl);
}

function postQuote() {
  FB.ui(
    {
      method: "share",
      href: "",
      quote: quotePlace,
    },
    function () {}
  );
}

const postButton = document.getElementById("fb-quote");
postButton.addEventListener("click", postQuote);

let nextBtn = document.getElementById("new-quote");
nextBtn.addEventListener("click", getQuote);
tweet.addEventListener("click", tweetIt);
