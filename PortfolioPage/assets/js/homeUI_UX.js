    // TODO: AUTO CHECKED RADIO BTN + CHECK AND CHANGE HOME BACKGROUND
    console.log("hello world");

let homePage = document.querySelector('.home-page');
let navbar = document.querySelector('.left-nav');
let imageTag = document.querySelector('.text');
let radioBtn = document.querySelector('.radio-btn');
let targetChild = radioBtn.childNodes;

setInterval(() => {
   
    homePage.setAttribute("style", "background: url('assets/img/bannar/bannar-2.jpg'); background-size: cover; background-position: center center;"); 

    imageTag.innerHTML = "<h1> I am <br> a Designer </h1> <p> 100% html5 bootstrap templates Made by colorlib.com </P> <a> DOWNLOAD CV </a>";
        // TODO: AUTO CHECKED RADIO BTN
    // targetChild[2].checked = true;
    // targetChild[1].checked = false;
    
    setTimeout(() => {
        homePage.removeAttribute("style", "background: url('assets/img/bannar/bannar-1.jpg'); background-size: cover; background-position: center center;"); 
        
        imageTag.innerHTML = " <h1>Hi! <br>I'm Jackson</h1> <p>100% html5 bootstrap templates Made by colorlib.com</p> <a href='#'>VIEW PORTFOLIO</a> ";
        // targetChild[1].checked = true;
        // targetChild[2].checked = false;
    }, 4000);    
    
}, 8000);


function expand() {
    navbar.classList.add("expand");
    navbar.getElementsByTagName('button')[0].setAttribute("style", "display: block");
}
function collapse() {
    navbar.classList.add("collapse");
    setTimeout(() => {
        navbar.classList.remove('expand');
        navbar.classList.remove('collapse');
    }, 450);
}

homePage.getElementsByTagName('button')[0].addEventListener('click', expand);
navbar.getElementsByTagName('button')[0].addEventListener('click', collapse);
