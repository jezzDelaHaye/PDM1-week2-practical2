function setup()
{
    createCanvas(600,600);

}
function draw()
{
    noStroke()
    if (mouseIsPressed)
    {
        fill(0);
        background(255);
    }
    else
    {
        fill(255)
        background(0);
    }   
    circle(300,300,200);
}

//start with black background, white circle. 
//when pressed circle goes black, background white