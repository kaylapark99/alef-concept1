var c1, c2;
var x = 1;
var y = 1;
var xAxis = 2;
var yAxis = 1;
var easing = 0.03;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    c1 = color(35, 37, 40);
    c2 = color(44,51,62);
}
  
function draw() {
    background(c1);
    //setGradient(c1,c2)
    var targetX = mouseX;
    var dx = targetX - x;
    x += dx * easing;
    var targetY = mouseY;
    var dy = targetY - y;
    y += dy * easing;
    fill(c2);
    triangle(0, windowHeight/2, x, y ,0, windowHeight/10);
    beginShape();
    vertex(windowWidth - (windowWidth/2),0);
    vertex(windowWidth,0);
    vertex(windowWidth, windowHeight);
    vertex(windowWidth - (windowWidth/3),windowHeight);
    vertex(x, y);
    endShape();
    beginShape();
    vertex(0, windowHeight - (windowHeight/3));
    vertex(windowWidth - x, windowHeight - windowHeight/12);
    vertex(0, windowHeight - (windowHeight/4));
    endShape();
    fill(113, 244, 187);
    beginShape();
    vertex(0, windowHeight - (windowHeight/4));
    vertex(windowWidth - x, windowHeight - windowHeight/12);
    vertex(windowWidth, windowHeight - (windowHeight/4));
    vertex(windowWidth, windowHeight);
    vertex(0, windowHeight);
    endShape();

}

function setGradient(x1, y1, w, h, g1, g2, axis) {
    noFill();

    if (axis == yAxis) {  // Top to bottom gradient
        for (var i = y1; i <= y1+h; i++) {
        var inter = map(i, y1, y1+h, 0, 1);
        var c = lerpColor(g1, g2, inter);
        stroke(c);
        line(x1, i, x1+w, i);
        }
    }  
    else if (axis == xAxis) {  // Left to right gradient
        for (var i = x1; i <= x1+w; i++) {
        var inter = map(i, x1, x1+w, 0, 1);
        var c = lerpColor(g1, g2, inter);
        stroke(c);
        line(i, y1, i, y1+h);
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight, false);
}