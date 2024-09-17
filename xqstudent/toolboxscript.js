var drawers = document.getElementsByClassName("drawer");
var i;

for (i = 0; i < drawers.length; i++) {
  drawers[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var tools = document.getElementsByClassName("tool");
var i;

for (i = 0; i < tools.length; i++) {
  tools[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function getAllSiblings(elem,filter) {
  var sibs = [];
  elem = elem.parentNode.firstChild;
  do {
    if (filter(elem)) {
      sibs.push(elem);
    }
  } while (elem = elem.nextSibling)
  return sibs;
}

function legitAlert(who) {
  console.log(who.nodeType) ;
  //alert( who && who.nodeType === Node.ELEMENT_NODE );
} ;

function openTab(evt, tabId) {
  // VARIABLES

  // index in for loops
  var i ;
  // tabcontent chosen by user
  var tabC = document.getElementById(tabId) ;
  // tablink button clicked by user
  var tabL = evt.currentTarget ;
  // is the one i'm clicking active?
  var clickedActive = tabL.classList.contains("active") ;
  // all tabcontents in this tool
  var tabContents = getAllSiblings(tabC,function(el){
    if (el.nodeType === Node.ELEMENT_NODE) {
      return el.classList.contains("tabcontent") ;
    } else {
      return false ;
    }
  }) ;
  // all tablinks in this tool
  var tabLinks = getAllSiblings(tabL,function(el){
    return el.nodeType === Node.ELEMENT_NODE ;
  }) ;
  // placeholder element
  var el ;

  // CLOSE ALL TABCONTENTS IN THIS TOOL
  for (i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none" ;
  }

  // DEACTIVATE ALL TABLINKS IN THIS TOOL
  for (i = 0; i < tabLinks.length; i++) {
    el = tabLinks[i] ;
    el.className = el.className.replace(" active", "");
  }

  // SELECTIVELY SHOW THE INFO + ACTIVATE THE TAB
  if (!clickedActive) {
    tabC.style.display = "block";
    tabL.className += " active";
  }
} 