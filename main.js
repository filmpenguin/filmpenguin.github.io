//Snowfall script

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var particlesOnScreen = 200;
var particlesArray = [];
var w,h;
w = canvas.width = window.innerWidth;
h = canvas.height = window.innerHeight;

function random(min, max) {
    return min + Math.random() * (max - min + 1);
};

//get new window size if user resizes
function userResize(ev){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
};
window.addEventListener("resize", userResize);


function createSnowFlakes() {
    for(var i = 0; i < particlesOnScreen; i++){
        particlesArray.push({
            x: Math.random() * w,  
            y: Math.random() * h,  
            opacity: Math.random(),  
            speedX: random(-11, 11),  
            speedY: random(7, 15),    
            radius:random(0.5, 4.2),
        })
    }
};

function drawSnowFlakes(){
    for(var i = 0; i < particlesArray.length; i++){    
        var gradient = ctx.createRadialGradient(  
            particlesArray[i].x,   
            particlesArray[i].y,   
            0,                     
            particlesArray[i].x,   
            particlesArray[i].y,   
            particlesArray[i].radius  
            );

            gradient.addColorStop(0, "rgba(255, 255, 255," + particlesArray[i].opacity + ")");  // white
            gradient.addColorStop(.8, "rgba(210, 236, 242," + particlesArray[i].opacity + ")");  // bluish
            gradient.addColorStop(1, "rgba(237, 247, 249," + particlesArray[i].opacity + ")");   // lighter bluish
    
            ctx.beginPath(); 
            ctx.arc(
            particlesArray[i].x,  
            particlesArray[i].y,  
            particlesArray[i].radius,  
            0,                         
            Math.PI*2,                 
            false                     
            );

        ctx.fillStyle = gradient;   
        ctx.fill();                 
    }
};

function moveSnowFlakes(){
    for (var i = 0; i < particlesArray.length; i++) {
        particlesArray[i].x += particlesArray[i].speedX;     
        particlesArray[i].y += particlesArray[i].speedY;     

        if (particlesArray[i].y > h) {                                                                               
            particlesArray[i].x = Math.random() * w * 1.5;
            particlesArray[i].y = -50;
        }
    }
};

function updateSnowFall  () {
    ctx.clearRect(0, 0, w, h);
    drawSnowFlakes();
    moveSnowFlakes();

};

setInterval(updateSnowFall,50);
createSnowFlakes();


// scrolling "parallax" effect on home page
let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let snow4 = document.getElementById("snow4");
let snow3 = document.getElementById("snow3");
let snow2 = document.getElementById("snow2");
let snowtitle = document.getElementById("snowtitle");
let text = document.getElementById("text");

window.addEventListener("scroll", function(){
    var offset = window.scrollY;

    bg.style.top = offset * 0.5 + "px";
    moon.style.left = -offset * 0.35 + "px";
    snow4.style.top = offset * 0.45 + "px";
    snow3.style.top = offset * 0.35 + "px";
    snow2.style.top = offset * 0.25 + "px";
    snowtitle.style.top = offset * 1.5 + "px";
//    text.style.top = offset * 1 + "px";
})

function onClickRules(){
    document.location.href="rules.html";};

function onClickRSVP(){
    document.location.href="rsvp.html";};

function onClickGifts(){
    document.location.href="gifts.html";};
