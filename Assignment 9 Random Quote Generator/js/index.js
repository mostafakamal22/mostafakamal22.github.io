// Declare Global Variables
var quoteAuthor = document.getElementById("author");
var quoteContent = document.getElementById("content");
var quotes = [
  {
    id: 1,
    author: "Oscar Wilde",
    body: "Be yourself; everyone else is already taken.",
  },
  {
    id: 2,
    author: "Marilyn Monroe",
    body: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  },
  {
    id: 3,
    author: "Frank Zappa",
    body: "So many books, so little time.",
  },
  {
    id: 4,
    author: "Albert Einstein",
    body: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  },
  {
    id: 5,
    author: "Marcus Tullius Cicero",
    body: "A room without books is like a body without a soul.",
  },
  {
    id: 6,
    author: "Bernard M. Baruch",
    body: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
  },
  {
    id: 7,
    author: "William W. Purkey",
    body: "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
  },
  {
    id: 8,
    author: "Dr. Seuss",
    body: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  },
  {
    id: 9,
    author: "Mae West",
    body: "You only live once, but if you do it right, once is enough.",
  },
  {
    id: 10,
    author: "Mahatma Gandhi",
    body: "Be the change that you wish to see in the world.",
  },
  {
    id: 11,
    author: "Robert Frost",
    body: "In three words I can sum up everything I've learned about life: it goes on.",
  },
  {
    id: 12,
    author: "J.K. Rowling",
    body: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
  },
  {
    id: 13,
    author: "Albert Camus",
    body: "Don’t walk in front of me… I may not follow. Don’t walk behind me… I may not lead. Walk beside me… just be my friend.",
  },
  {
    id: 14,
    author: "Mark Twain",
    body: "If you tell the truth, you don't have to remember anything.",
  },
  {
    id: 15,
    author: "Maya Angelou",
    body: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
  },
  {
    id: 16,
    author: "C.S. Lewis",
    body: "Friendship ... is born at the moment when one man says to another 'What! You too? I thought that no one but myself . . .'",
  },
  {
    id: 17,
    author: "Elbert Hubbard",
    body: "A friend is someone who knows all about you and still loves you.",
  },
  {
    id: 18,
    author: "Oscar Wilde",
    body: "To live is the rarest thing in the world. Most people exist, that is all.",
  },
  {
    id: 19,
    author: "Oscar Wilde",
    body: "Always forgive your enemies; nothing annoys them so much.",
  },
  {
    id: 20,
    author: "Martin Luther King Jr.",
    body: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
  },
  {
    id: 21,
    author: "Mahatma Gandhi",
    body: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
  },
  {
    id: 22,
    author: "Stephen Chbosky",
    body: "We accept the love we think we deserve.",
  },
  {
    id: 23,
    author: "Friedrich Nietzsche",
    body: "Without music, life would be a mistake.",
  },
  {
    id: 24,
    author: "Oscar Wilde",
    body: "I am so clever that sometimes I don't understand a single word of what I am saying.",
  },
  {
    id: 25,
    author: "Ralph Waldo Emerson",
    body: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
  },
  {
    id: 26,
    author: "Steve Jobs",
    body: "Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.",
  },
  {
    id: 27,
    author: "Narcotics Anonymous",
    body: "Insanity is doing the same thing, over and over again, but expecting different results.",
  },
  {
    id: 28,
    author: "Marilyn Monroe",
    body: "I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.",
  },
  {
    id: 29,
    author: "André Gide",
    body: "It is better to be hated for what you are than to be loved for what you are not.",
  },
  {
    id: 30,
    author: "H. Jackson Brown Jr.",
    body: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
  },
];

var minId = quotes[0].id;
var maxId = quotes[quotes.length - 1].id;

function generateNewQuote() {
  // Find Old Quote ID
  var oldQuoteId = quotes.find(
    (q) =>
      q.author === quoteAuthor.innerHTML && q.body === quoteContent.innerHTML
  )?.id;

  // Generate New Qoute Id
  var randomId = Math.floor(Math.random() * (maxId - minId + 1)) + minId;

  // Check if the old Quote is the new Quote
  if (randomId === oldQuoteId) {
    if (randomId > minId && randomId < maxId) {
      // Take the First Quote if the old is between the max and min

      randomId = minId;
    } else {
      // Exclude the Min and the Max from the random number possiblity
      randomId =
        Math.floor(Math.random() * (maxId - 1 - minId + 1 + 1)) + minId + 1;
    }
  }

  // Get New Quote Content
  var newQuote = quotes.find((q) => q.id === randomId);

  // Apply New Quote Content The Page
  quoteAuthor.innerHTML = `--${newQuote.author}`;
  quoteContent.innerHTML = `"${newQuote.body}"`;
}
