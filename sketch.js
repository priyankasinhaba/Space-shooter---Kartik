var GameOn
var rocket
var playbutton,
aboutbutton,
asteroid,
asteroid2,
asteroid3;
var Gamestate = "1";


function preload(){
GameOn = loadImage("assets/Game On.gif");
playbuttonImg = loadImage("assets/playbutton1.jpg")
aboutbuttonImg = loadImage("assets/aboutbutton.png")
asteroid = loadImage("assets/asteroid.png")
asteroid2 = loadImage("assets/Asteroid2.webp")
asteroid3 = loadImage("assets/Asteroid3.jpg")

}

function setup(){

createCanvas(500,500);
playbutton = createImg("assets/playbutton1.jpg");
aboutbutton = createImg("assets/aboutbutton.png");
playbutton.position(400,400);
playbutton.size(100,100)
playbutton.hide();
aboutbutton.position(50,250);
aboutbutton.size(100,100)
aboutbutton.hide();
}


function draw(){
if(Gamestate === "1"){
background(GameOn);
playbutton.show();
aboutbutton.show();
}
playbutton.mousePressed(()=>{

playbutton.hide();
aboutbutton.hide();
Gamestate="2";

})

aboutbutton.mousePressed(()=>{

    playbutton.hide();
    aboutbutton.hide();
    Gamestate="about";
    
    })



drawSprites()



}
function aboutgame(){

swal({
title:"How To Play",
text:"control the rocket , hit the alien spaceships and survive the asteroids .",
textAllign:"center",
confirmButtonText:"Let's Play ",
confirmButtonColor:"red"

})
}