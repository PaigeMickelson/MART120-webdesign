//shape
var shapeX= 30;
var shapeY= 50;
var shapeXSpeed;
var shapeYSpeed; 

//circle
var circleX= 70;
var circleY= 30;
var circleXSpeed;
var circleYSpeed;

//key codes
var w=87;
var s=83;
var a=65;
var d=68;

//game piece x and y
var characterX=-350;
var characterY=250; 

//mouse shape
var mouseShapeX;
var mouseShapeY;

function setup()
{
  createCanvas(500,600)
  
  //speed taken from example
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

  circleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
     circleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
}


function draw()
{
  background(color("#666A86"));
  stroke(0);
  fill(0);
  
  //border
borders(10);

  //message
  textSize(20);
  fill (color("#95B8D1"));
  text("EXIT^",width-80,height-550)
  
//game piece
  fill(color("#E8DDB5"));
    push();
  translate(width * 0.8, height * 0.5);
  star(characterX, characterY, 10, 20,5);
 
//star shape from p5js.org examples
  function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
}
  endShape(CLOSE);
  }
    
// handle the keys
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }
  
 //enemy 1
  fill(color("#EDAFB8"));
  circle(shapeX,shapeY, 45);
  
//enemy 2
  fill(color("#333333"));
  circle(circleX,circleY, 55);
  
//Speed for shape
shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  
//Speed for Circle
circleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
     circleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
  
//Movement for shape
shapeX += shapeXSpeed;
shapeY += shapeYSpeed;
  
//Movement for circle
circleX += circleXSpeed;
circleY += circleYSpeed; 
  
//boundaries 
      if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }
  
  
   if(circleX > width)
    {
        circleX = 0;
    }
    if(circleX < 0)
    {
        circleX = width;
    }
    if(circleY > height)
    {
        circleY = 0;
    }
    if(circleY < 0)
    {
       circleY = height;
    }
  
  
//Game Piece Victory
      if(characterX > width-80 && characterY > width-550)
    {
        fill(color("#E8DDB5"));
        stroke(5);
        textSize(26);
        text("You're a Super Star!", width/2-50, height/2-50);
      
//shape with mouse click
    fill(120,130,140);
    circle(mouseShapeX, mouseShapeY, 25);
    }
  
  function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}




//functions 

function borders(thickness)
{
  rect(0,0,width,thickness);
  rect(0,0,thickness,height);
  rect(0, height-thickness,width, thickness);
  rect(width-thickness,0,thickness,height-90);
}




function createCharacter(x,y)
{
  charaxterX= x;
  characterY= y;
  console.log(characterX);
}


  
}