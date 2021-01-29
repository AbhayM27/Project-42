

// variables 


var scAngle;




function preload() {
  Day = loadImage("Day.jpg");
  Night = loadImage("Night.jpg");

}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  



   hr = hour();
   mn = minute();
   sc = second();

  
   



}

function draw() {
  background(0,0,0);  
  drawSprites();

  
  if(hr < 17) {
    imageMode(CENTER);
    image(Day,400,200);
    
  }

  
  if(hr > 17) {
    imageMode(CENTER);
    image(Night,400,200);
    
  }

fill("black");
 arc(400,200,300,300,0,360);




push();
hrAngle = map(hr,0,12,0,360);
stroke("yellow");
fill("black");
strokeWeight(7);
translate(0,0);
arc(400,200,300,300,0,hrAngle);
pop();




push();
mnAngle = map(mn,0,60,0,360);
stroke("green");
fill("black");
strokeWeight(7);
translate(0,0);
arc(400,200,240,240,0,mnAngle);
pop();

  
push();
angleMode(DEGREES);
scAngle = map(sc,0,60,0,360);
stroke("lightgreen");
fill("black");
strokeWeight(7);
translate(0,0);
arc(400,200,180,180,0,scAngle);
//rotate(scAngle);
//line(400,200,400,250); there is problem with line and its rotation
pop();



textSize(20);
fill("lightgreen");


if(sc < 10) {
  text(hr % 12  + ":0" + mn + ":0" + sc,360,205);
} else if(mn < 10 && sc > 9) {
  text(hr % 12 + ":0" + mn + ":" + sc,360,205);
} else {
  text(hr % 12 + ":" + mn + ":" + sc,360,205);
}







}
