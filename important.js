let button = document.getElementById('start-button');
let circle = document.getElementById('circle');
let line = document.getElementById('line');
let id = null;
let divs = "";
function changeColor() { //changes color of button
    if (circle.classList.contains('circle')){
        circle.classList.remove("circle");
        line.classList.remove("line");
    }
    else {
        circle.classList.add("circle");
        line.classList.add("line");
    }
}
window.onload = start;

function start() { //creates divs that will be used in animation
    for (i = 0; i < 40; i++) {
        let element = "line" + i;
        if(i < 20){
            divs = divs + '<div class="moving_lines" id="'+ element +'">' + '</div>';
        }
        else {
            divs = divs + '<div class="moving_lines-left" id="'+ element +'">' + '</div>';
        }
    }
    document.getElementById("lines").innerHTML = divs;
    for (i = 0; i < 40; i++) { // sets style for divs
        if(i < 20) {
            document.getElementById(`line${i}`).style.right = `0${2*i}%`;
        }
        else {
            document.getElementById(`line${i}`).style.left = `0${2*i}%`;
        }
    }
}
function animate() { //animation
    for (i = 0; i < 40; i++) {
        if(i < 20) {
            document.getElementById(`line${i}`).style.animation = 'loadright ease-in ' + 0.15*i + 's'; //change style animation
        }
        else {
            document.getElementById(`line${i}`).style.animation = 'loadleft ease-in ' + 0.15*(i-20) + 's';
        }
    }
    var disappear = document.getElementById('loading').style;
    disappear.opacity = 1;
    (function fade(){(disappear.opacity-=.1)<0?s.display="none":setTimeout(fade,320)})(); //slowly fades loading screen and sets display to none after that
}

button.addEventListener('mouseover', changeColor);
button.addEventListener('mouseout', changeColor);
button.addEventListener('click', animate)


//WAS WORKING ON THAT BUT FAILED ;/
/*
pos = -200;
clearInterval(id)
id = setInterval(frame, 8);
function frame() {
    for (i = 0; i < 10; i++) {
        if (pos == 1000) {
        clearInterval(id);
        } else {
        pos++; 
        document.getElementById(`line${i}`).style.top = 2*pos + 'px'; 
        document.getElementById(`line${i}`).style.right = pos + 30*i + 'px';
        }
    }
}
*/