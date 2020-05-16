var websites = JSON.parse(window.localStorage.getItem('spider-web-list'));
if(websites == null || websites.length == 0) {
  websites = ['https://www.google.ro/', 'https://mirceasorin.ro/'];
}

// console.log("websites list is " + websites)
// $( document ).ready(function() {
//   console.log( "ready!" );

//   let i = 0;
//   let classes = ['red', 'blue', 'yellow']
//   for(let website of websites) {
//     console.log("adding: ", classes[i])
//     $( "#container" ).append( `<div class="${classes[i]}"></div>`);
//     i += 1
//   }
// });

// window.location.href = chosenWebsite;
