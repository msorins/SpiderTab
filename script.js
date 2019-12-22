function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var websites = ['https://www.producthunt.com/', 'https://www.google.ro/'];
var chosenWebsiteIndex = getRandomInt(websites.length);
var chosenWebsite = websites[chosenWebsiteIndex];

console.log(`Chosen website is ${chosenWebsite}`);
window.location.href = chosenWebsite;
