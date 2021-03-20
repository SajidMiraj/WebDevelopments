// include others file
let homeUI_UX = document.createElement('script');
homeUI_UX.src = 'assets/js/homeUI_UX.js';
document.head.appendChild(homeUI_UX);


// auto scroll nav active
const links = document.querySelectorAll('.links');
const sections = document.querySelectorAll('#section');

function changeLinkState() {
    let index = sections.length;
    while (--index && window.scrollY + 100 < sections[index].offsetTop) { }
    links.forEach((link) => link.classList.remove('active'));
    links[index].classList.add('active');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);



// counter service image
let imgDiv = document.querySelector('#counter');
let targetTag = imgDiv.getElementsByTagName('p');
let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');
let p3 = document.querySelector('.p3');
let p4 = document.querySelector('.p4');
window.onload = function () {

    let elementsArray = [];
    for (let i = 0; i < targetTag.length; i++) {
        let elements = targetTag[i].innerText;
        elementsArray.push(elements);
    }
    
    let x1 = 1;
    let y1 = Number(elementsArray[0]);
    setInterval(() => {
        if (x1 <= y1) {
            p1.innerHTML = ' ';
            let s1 = document.createTextNode(x1);
            p1.appendChild(s1);

            x1++;
        }
    }, 300);

    let x2 = 1;
    let y2 = Number(elementsArray[1]);
    setInterval(() => {
      if (x2<=y2) {
        p2.innerHTML = ' ';
        let s2 = document.createTextNode(x2);
        p2.appendChild(s2);
  
            x2++;
      }
    }, 300);

    let x3 = 1;
    let y3 = Number(elementsArray[2]);
    setInterval(() => {
      if (x3<=y3) {
        p3.innerHTML = ' ';
        let s3 = document.createTextNode(x3);
        p3.appendChild(s3);
  
            x3++;
      }
    }, 300);

    let x4 = 1;
    let y4 = Number(elementsArray[3]);
    setInterval(() => {
      if (x4<=y4) {
        p4.innerHTML = ' ';
        let s4 = document.createTextNode(x4);
        p4.appendChild(s4);
  
            x4++;
      }
    }, 300);

}