var headX = 250;
var headY = 100;
var headDirection = 1;

var armX = 150;
var armY= 50;
var armDirection = 3;

var bodyX = 200;
var bodyY = 185;
var bodyDirection = 3; 

var eyeX = 275;
var eyeY = 75;
var eyeDirection = 1;  

var size = 22
var count = 0;
var sizeDirection = 2;

var movement; 

var lipX, lipY;
var speedX, speedY;

function setup() {
    createCanvas(500, 500);
  movement = floor(random()* 10) +1;
  lipX=0;
  lipY=50;
  speedX = 1;
  speedY = 1;
  }
  
  function draw() 
{
  background(color("#CCE3DE"));
    textSize(30);
    text("Self-Portrait... Kinda",130,460 );
  
    // head
    fill(color("#E3D5CA"));
    circle(headX,headY,175);
    headX+=headDirection;
    if(headX >= 418 || headX <= 82)
    {
        headDirection *= -1;
    }
    
    
    //body
    fill(color("#9F86C0"));
    rect(200,bodyY,100,150);
    bodyY += bodyDirection;
    if(bodyY <= 0 || bodyY >= 350 )
    {
        bodyDirection *= -1;
    }
 
  
    //arms and legs
    fill(color("#CDB4DB"));
    rect(300,195,50,10);
    rect(150,armY,50,10);
    armY += armDirection;
    if(armY <= 0 || armY >= 500 )
    {
        armDirection *= -1;
    }
    if(armX >= 800 || armX <= 0)
    {
       movement *= -1;
    }

     armX += movement;
  
    fill(color("#6D6875"));
    rect(200,335,10,50);
    rect(290,335,10,50);

    
    //eyes
    strokeWeight(3);
    fill(color("#A2D2FF"));
    circle(220,75,17);
    circle(eyeX,eyeY,17);
      eyeX+=eyeDirection;
    if(eyeX >= 430 || eyeX <= 2)
    {
        eyeDirection *= -1;
    }
      if(eyeX >= 500 || eyeX <= 0)
    {
       movement *= -1;
    }

     eyeX += movement;
  
    //nose
    fill(color("#E3D5CA"));
    triangle(250,90,260,117,220,120);
    
    //freckles
    point(240,90);
    point(249,80);
    point (260,90);
    
    //hair
    strokeWeight(5);
    fill(color("#43291F"));
    line(130,175,175,50);
    line(325,50,360,175);
    
    //lips
    fill(color("#E5989B"));
  lipX = lipX + speedX;
  lipY = lipY + speedY;
    ellipse(lipX,lipY,30,17);
    if(lipX >= 190 || lipX <= 2)
    
    //signature 
    fill(17);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0; 
    }
    text("Paige Mickelson",270,500);
} 