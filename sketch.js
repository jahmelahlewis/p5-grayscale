function setup(){
    createCanvas(600,400);
     background(255);
     noStroke();
     num = 0;
} 
    
    
function draw(){
    if(num < 255){
        fill(num);
        ellipse(width/2, 250, 250);
        
        num = num + 1;
    }
}