function getWelcomeMsg() {
    return "Wellcome to my page!";
}


function getColor() {
    var date = new Date ();
    console.log(date.getMinutes());
    if(date.getMinutes() > 18) {
         return "green"
    }
    return "red";

}

var wellcome = getWelcomeMsg();
console.info(wellcome);

var summaryElement = document.getElementById("summary");
console.info("summaryElement", summaryElement);
var color = getColor();
summaryElement.style.color = color;

function hidePage(page) {
    var el = document.getElementById(page);
    el.style,display = 'none' ;
}
 
function showPage(page) {
    document.getElementById(page).style.display = 'block';
}

function initMenu() {
    var links = document.querySelectorAll("#top-menu-bar a");
    console.info(links);
    for(var i = 0; i < links.length; i++) {
        links[i].onclick = clickOnMenuItem;

    }
}

function clickOnMenuItem () {
    console.warn('click on menu', this);
    hideAllPages();
    var pageId = this.getAttribute('data-page');
    console.warn({pageId});
    showPage(pageId);

}

function hideAllPages() {
    var pages = document.querySelectorAll(".page");
    for (var i = 0; i < pages.length; i++ ) {
        pages[i].style.display = 'none';
    }
}

initMenu();



function showSkills() {
    var skills = ['html', 'css', 'js'];
    console.warn('showSkills', skills);
     skills.forEach(function(skill, index) {
        console.info("#" + (index + 1) + " " + skill);
     }
}
showSkills();