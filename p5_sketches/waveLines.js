//const nlines = 45;

let nlines = window.innerWidth/32;
nlines = ~~nlines;
const res = 200; // number of segments for each line
const factor = 0.008; // noise factor
const factor2 = 0.03; // OTHER factor
const speed = 0.005;
const strkWidth = 2;
let wavePoints = [];


console.log(nlines);

//const W = 500, H = 500;
//const W = screen.width, H = screen.height;

//REVERSE W/H
//const xstep = W / nlines * 2;
//const ystep = H / res





function setup() {
  createCanvas(windowWidth, windowHeight*0.9);
  strokeWeight(strkWidth);
  smooth(8);
  stroke(255);
  
  for (let x = 0; x < nlines; x++) {
    for (let y = 0; y < res; y++) {
      wavePoints.push([])
    }
  }
  
}


function draw() {
  background(0);
  const xstep = height / nlines * 2;
  const ystep = width / res;
  //REMEMBER IT'S REVERSE BECAUSE WE DO A TRANSFORMATION
  const line_edge_hor = height/40;
  const line_edge_ver = width/100;

  
  let i = 0;
  
  for (let x = 0; x < nlines; x++) {
    for (let y = 0; y < res; y++) {
      
    
      //var n = noise(x * factor* 1.5 + frameCount * speed, (x+y) * factor + frameCount * speed+(mouseX+mouseY)*0.0005);
      var n = noise(mouseX * factor* factor2 + mouseY * factor* factor2 +  frameCount * speed, (x+y) * factor + frameCount * speed);
      wavePoints[i] = createVector(x * xstep * n, y * ystep);
      i += 1;
    }
  }

  for (let id = 0; id < wavePoints.length - 1; id++) {
    if (id%res != (res-1)) { 
      
      /*
      if (id%res > 5 && id%res < res-5) { // upper and lower edges
        if (id/res > 10 && id/res < nlines - 20) { // left and right edges 
          */

      if (id%res > line_edge_hor && id%res < res-line_edge_hor) { // upper and lower edges--->L&R
        if (id/res > line_edge_ver && id/res < nlines- line_edge_ver) { // left and right edges --->U&D
          push(); 
          translate(0, height);
          rotate(-PI/2);
          line(wavePoints[id].x, wavePoints[id].y, wavePoints[id+1].x, wavePoints[id+1].y);
          pop();

        }
      }
    }
  }
  
}
