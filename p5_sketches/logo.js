let font;
let divisor = 50 ;
let step=10;
let str_weight=1;
let logo_size=100;
let fr = 20;


function preload() {
  font = loadFont('assets/Gilroy.otf');
}
let points;
let bounds;

function setup() {
  frameRate(fr);
  createCanvas(500, 500);
  background(0);
  points = font.textToPoints('c', 0, 0, logo_size, {
    sampleFactor: 5,
    simplifyThreshold: 0
  });
  bounds = font.textBounds('c', 0, 0, logo_size);
}

function draw() {
  strokeWeight(str_weight);
  stroke(255);
  fill(0);
  let max_iter = points.length/step;
  let i = frameCount*step;
  translate(-bounds.x * width / bounds.w +width/4, -bounds.y * height / bounds.h - height/5);
  ellipse(points[i]['x'], points[i]['y'], width/divisor, width/divisor);
  if (frameCount==int(max_iter)) {
    frameCount =0;
  }

}
