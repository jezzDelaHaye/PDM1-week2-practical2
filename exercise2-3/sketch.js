let x, y;          
let xSpeed = 3;     
let ySpeed = 3;     
let diameter = 100; 
let radius = diameter / 2;

function setup()
{
  createCanvas(600, 400);
  x = radius; 
  y = radius;
}

function draw() 
{
  background(240);

  
  fill(0, 150, 255);
  noStroke();
  ellipse(x, y, diameter, diameter);

  
  x += xSpeed;
  y += ySpeed;

  
  if (x + radius > width || x - radius < 0) 
  {
    xSpeed *= -1;
  }

  
  if (y + radius > height || y - radius < 0) 
  {
    ySpeed *= -1;
  }
}