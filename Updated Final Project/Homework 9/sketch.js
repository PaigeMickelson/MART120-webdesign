function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(color("#CCE3DE"));
    textSize(40);
    text('Paige L. Mickelson',270,500 );
  
    // head
    fill(color("#E3D5CA"));
    circle(250,100,175);
    
    //body
    fill(color("#9F86C0"));
    rect(200,185,100,150);
    
    //arms and legs
    fill(color("#CDB4DB"));
    rect(300,195,50,10);
    rect(150,195,50,10);
    fill(color("#6D6875"));
    rect(200,335,10,50);
    rect(290,335,10,50);
    
    //eyes
    strokeWeight(3);
    fill(color("#A2D2FF"));
    circle(220,75,17);
    circle(275,75,17);
    
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
    
    //mouth
    fill(color("#E5989B"));
    ellipse(245,135,30,17);
    
    
    //signature 
    fill(120);
 
   
  }