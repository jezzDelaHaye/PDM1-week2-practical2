function setup()
{
    createCanvas(400,400)
}
function draw()
{
    background(0);
    rectMode(CENTER);
    if (mouseY >= 375)
    {
        rect(mouseX,375,50,50);
    }
    if (mouseY <= 25)
    {
        rect(mouseX,25,50,50);
    }
    if (mouseX >= 375)
    {
        rect(375,mouseY,50,50);
    }
    if (mouseX <= 25)
    {
        rect(25,mouseY,50,50);
    }
    if(mouseX <= 375 && mouseX >= 25 && mouseY <= 375 && mouseY >= 25)
    {
        rect(mouseX,mouseY,50,50);
    }

        
    
    
}