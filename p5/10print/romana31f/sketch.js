var w = 16;
var h = 16;
var index = 0;




function setup() {
      createCanvas(windowWidth, windowHeight);
      background(5,30,80);
      
      smooth();
      strokeWeight(3);
}

function draw() {
     /*var x1 = w * index; 
     var x2 = x1 + w; 
     var y1 = h * 23; 
     var y2 = h * 24;

      if (random(2) < 1) {
        line(x2, y1, x1, y2);
      } else {
        line(x1, y1, x2, y2);
      }
      index++;
      if (index == width / w) {
        image = get(0, h, width, h * 23);
        background(0,0, 255);
        set(0, 0, image);
        index = 0;

        } */
a =mouseY;
b =30;
var x1=b/2 + (index*b/2);
var x2=(3*b/2) + (b*index);
var y1=height - a/2


        if (random(2) < 1) {
        noFill();
        strokeWeight(0.5);
        stroke(130,150,190);
        arc(x1,y1, a, b, 0, PI);
        } else {
          noFill();
          strokeWeight(random(0.2));
          stroke(254,254,254.60);
        arc(x2, y1, a, b, PI, 0);
      }

      index++;
      if (index > 3*width / b) {
        image = get(0, b, width, height - b/4);
        background(5,30,80,random(80));
        set(0, 0, image);
        index = 0;

        }






      }