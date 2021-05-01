const localImageURI = chrome.extension.getURL("images/booble.png");
document.title = "Booble";

// Get elements to modify
let div_lga = document.getElementsByClassName("LS8OJ")[0];
let img_googleLogo = document.getElementById("hplogo");
let div_searchform = document.getElementsByClassName("om7nvf")[0];
let div_main = document.getElementById("main");
let searchButton = document.querySelectorAll('input[value="Google Search"]')[1];
let luckyButton = document.querySelectorAll('input[value="I\'m Feeling Lucky"]')[1];

// change the tab's title!

// Change the search buttons' text
searchButton.value = "Booble Search";
luckyButton.value = "I'm Feeling Perky";

// change formatting to do the logo thing
div_searchform.style = "margin-top: 70px";

// Modify the google logo to fit the new image
img_googleLogo.src = localImageURI;
img_googleLogo.title = "Anime Tiddies XD";
img_googleLogo.removeAttribute("srcset");
img_googleLogo.removeAttribute("height");
img_googleLogo.width = 400;
img_googleLogo.style = "margin-left: 22px; max-height: 179%;";


// Create link element to my site
//let a_mysite = document.createElement("a");
//a_mysite.href = siteURL;
//a_mysite.target = "_blank";
//
//// Wrap img_hplogo in a_mysite element
//a_mysite.appendChild(img_hplogo.cloneNode(true));
//img_hplogo.parentNode.replaceChild(a_mysite, img_hplogo);
console.log('hewwo from the terminal');
