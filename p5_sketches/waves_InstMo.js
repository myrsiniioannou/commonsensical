const sketch2 = s2 => {

    let fr = 30;
    //const nlines = 45;

    let nlines = 23;
    //nlines = ~~nlines;
    const res = 200; // number of segments for each line
    const factor = 0.008; // noise factor
    const factor2 = 0.02; // OTHER factor
    const speed = 0.005;
    const strkWidth = 2;
    let wavePoints = [];

    s2.setup = function() {
        let cnv = s2.createCanvas(s2.windowWidth*0.85, s2.windowHeight*0.95);
        s2.frameRate(fr);
        cnv.id('waves');
        s2.strokeWeight(strkWidth);
        s2.smooth(8);
        s2.stroke(255);
        
        for (let x = 0; x < s2.nlines; x++) {
            for (let y = 0; y < s2.res; y++) {
                wavePoints.push([])
            }
        }
    }

    s2.draw = function() {
        s2.background(0);
        const xstep = s2.height / nlines * 2;
        const ystep = s2.width / res;
        //REMEMBER IT'S REVERSE BECAUSE WE DO A TRANSFORMATION
        const line_edge_hor = 0;
        const line_edge_ver_up = 4;
        const line_edge_ver_dw = 8;
        
        let i = 0;
        
        for (let x = 0; x < nlines; x++) {
            for (let y = 0; y < res; y++) {
            
            
            //var n = noise(x * factor* 1.5 + frameCount * speed, (x+y) * factor + frameCount * speed+(mouseX+mouseY)*0.0005);
            let n = s2.noise(s2.mouseX * factor* factor2 + s2.mouseY * factor* factor2 +  s2.frameCount * speed, (x+y) * factor + s2.frameCount * speed);
            wavePoints[i] = s2.createVector(x * xstep * n, y * ystep);
            i += 1;
            }
        }

        for (let id = 0; id < wavePoints.length - 1; id++) {
            if (id%res != (res-1)) { 

                if (id%res > line_edge_hor && id%res < res-line_edge_hor) { // upper and lower edges--->L&R
                    if (id/res > line_edge_ver_up && id/res < nlines- line_edge_ver_dw) { // left and right edges --->U&D
                        s2.push(); 
                        s2.translate(0, s2.height);
                        s2.rotate(-s2.PI/2);
                        s2.line(wavePoints[id].x, wavePoints[id].y, wavePoints[id+1].x, wavePoints[id+1].y);
                        s2.pop();
                    }
                }
            }
        }
    
    }
}

var wavelines = new p5(sketch2,'waves');