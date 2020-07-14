var websites = JSON.parse(window.localStorage.getItem('spider-web-list'));
if (websites == null || websites.length == 0) {
  websites = ['https://producthunt.com?spider_tab_iframe'];
}

var widthList = JSON.parse(window.localStorage.getItem('spider-web-list-width'));
console.log("width list is " + websites)
if(widthList == null || widthList.length < websites.length) {
  widthList = []
  while(widthList.length < websites.length) {
    widthList.push(1)
  }
}

$(document).ready(function () {
  // Populate the websites
  let i = 0;
  for (let website of websites) {
    if(!website.startsWith('http://') && !website.startsWith('https://')) {
      website = 'http://' + website;
    }
    
    $("#iframesContainer").append(`<div class="iframeSite" style="flex-grow: ${widthList[i]}">
      <iframe src="${website}?spider_tab_iframe" style="height: 100%; width: 100%"> </iframe>
    </div>`);
    i += 1
  }
});




// window.location.href = chosenWebsite;
