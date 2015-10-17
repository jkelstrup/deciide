var degrees = [
  "Absolutely",
  "Definitely",
  "Meeeh...",
  "Somewhat",
  "That'll be a",
  "OH MY GOD",
  "Ouuukaay,",
  "Simply.",
  "Ironically",
  "Funnily enough",
  "Boringly",
  "Intensely",
  "Amazingly",
  "Flipping",
  "Fucking",
  "I'm gonna go with",
  "Tough one! But",
  "Because it's you",
  "In the name of Bejesus",
  "Simon says",
  "The verdict is",
  "Judge rules:",
  "Why do you even ask?",
  "I declare",
  "You can rely on a",
  "Santa gives you a",
  "Oh Lord",
  "I don't know. Let's go with",
  "For your own sake",
  "For God's sake",
  "To cut to the chase:",
  "Hell"
];

var decision = document.getElementById('decision');
var degree = decision.getElementsByTagName('h2')[0];
var verdict = decision.getElementsByTagName('h1')[0];

function decide() {
  var yes = Math.random() >= 0.5;
  degree.innerHTML = degrees[Math.floor(Math.random() * degrees.length)];

  if (yes) {
    verdict.innerHTML = "YES!";
    decision.classList.add('yes');
  } else {
    verdict.innerHTML = "NO!";
    decision.classList.add('no');
  }

}

function back() {
  decision.classList.remove('no');
  decision.classList.remove('yes');
}
