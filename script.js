function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var websites = JSON.parse(window.localStorage.getItem('spider-web-list'));
if(websites == null || websites.length == 0) {
  websites = ['https://www.google.ro/'];
}

console.log("websites list is " + websites)
var chosenWebsiteIndex = getRandomInt(websites.length);
var chosenWebsite = websites[chosenWebsiteIndex];

console.log(`Chosen website is ${chosenWebsite}`);
window.location.href = chosenWebsite;
