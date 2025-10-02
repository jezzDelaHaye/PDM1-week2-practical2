function setup() 
{
    createCanvas(400, 400);
    noStroke();
    fill(255, 0, 150);
    background(0);
}

function draw() 
{
    
    if (mouseIsPressed) 
    {
        circle(random(0,width), random(0,height), random(10,100));
    }
    if (keyIsPressed)
    {
        background(0);

    }

    
    
}