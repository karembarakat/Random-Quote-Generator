var btn = document.getElementById('btn');
var quote = document.getElementById('quote-text');
var quotes = [
    "Be yourself; everyone else is already taken. – Oscar Wilde",
    "I'm selfish, impatient and a little insecure. – Marilyn Monroe",
    "In the middle of difficulty lies opportunity. – Albert Einstein",
    "To live is the rarest thing in the world. Most people exist, that is all. – Oscar Wilde",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "The best way to predict your future is to create it. – Abraham Lincoln"
];


var lastQuote = null;

function generateQuote() {
    var randQuote = quotes[Math.floor(Math.random() * quotes.length)];

    console.log(randQuote);

    if (randQuote === lastQuote) {
        randQuote = quotes[Math.floor(Math.random() * quotes.length)];
    }

    lastQuote = randQuote;
    quote.innerHTML = randQuote;
}