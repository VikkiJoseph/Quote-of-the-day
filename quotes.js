var arrayOfQuotes = [
  {
    "author": "Joseph Miriyala",
    "quote": " Just wait for the time"
  },
  {
    "author": "Joseph Miriyala",
    "quote": " Money is powerful but sometimes saying no to it is more powerful"
  },
  {
    "author": "Joseph Miriyala",
    "quote": " When you know the value of money you dont spend it."
  },
{
    "author": "Joseph Miriyala",
    "quote": " Some dreams make you sleep, Some won't and I choose the second one"
  },
{
    "author": "Joseph Miriyala",
    "quote": " You know what Success is depends on second letter, So dont stop in a first attempt."
  },
{
    "author": "Joseph Miriyala",
    "quote": " Don't shock by wathing my name as a author,I learnt this code and done"
  },
{
    "author": "Joseph Miriyala",
    "quote": " Make time useful."
  }
]

function generateQuote()
{
  var randomNumber = randomSelector(arrayOfQuotes.length);
  document.getElementById("quoteOutput").innerHTML ='"' + arrayOfQuotes[randomNumber].quote + '"';
  document.getElementById("authorOutput").innerHTML ="-" + arrayOfQuotes[randomNumber].author;
}

function randomSelector(arrayLength){
  return Math.floor(Math.random() * arrayLength);
}