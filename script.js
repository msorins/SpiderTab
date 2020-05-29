var websites = JSON.parse(window.localStorage.getItem('spider-web-list'));
if (websites == null || websites.length == 0) {
  websites = ['https://producthunt.com?spider_tab_iframe'];
}

console.log("websites list is " + websites)
$(document).ready(function () {
  // Populate the websites
  let i = 0;
  for (let website of websites) {
    if(!website.startsWith('http://') && !website.startsWith('https://')) {
      website = 'http://' + website;
    }
    
    $("#iframesContainer").append(`<div class="iframeSite">
      <iframe src="${website}?spider_tab_iframe" style="height: 100%; width: 100%"> </iframe>
    </div>`);
    i += 1
  }
});




// window.location.href = chosenWebsite;
