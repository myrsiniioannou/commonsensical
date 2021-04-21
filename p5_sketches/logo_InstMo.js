

const logoSketch = s1 => {

    let scrnWidth = screen.width;
    let font;
    //let divisor = 40 ;
    let step=30;
    let str_weight=1;
    let logo_size=150;
    let fr = 30;
    let ell_radius = 24;
    let points;
    let bounds;

    s1.preload = function() {
        s1.font = s1.loadFont('assets/Gilroy-ExtraBold.otf');
    }

    s1.setup = function() {

        points = s1.font.textToPoints('c', 0, 0, logo_size, {
            sampleFactor: 5,
            simplifyThreshold: 0
        });
        bounds = s1.font.textBounds('c', 0, 0, logo_size);



        //s1.rect(bounds.x, bounds.y, bounds.w, bounds.h);

        //let cnv = s1.createCanvas(s1.windowWidth, s1.windowHeight*20/100);
        let cnv = s1.createCanvas(bounds.w*1.5, bounds.h*1.4);
        cnv.id('logo');

        s1.frameRate(fr);
        //s1.background(255,0,0);

        //console.log(s1.width/divisor);
    }

    s1.draw = function() {

        s1.strokeWeight(str_weight);
        s1.stroke(255);
        s1.fill(0);
        let max_iter = points.length/step;
        let i = s1.frameCount*step;
        s1.translate(-bounds.x + (s1.width-bounds.w)/2, -bounds.y + (s1.height-bounds.h)/2);

        s1.ellipse(points[i]['x'], points[i]['y'], ell_radius, ell_radius);
        if (s1.frameCount==s1.int(max_iter)) {
            s1.frameCount =0;
        }

        // show rectacle to see the corners of the logo
        //s1.rect(bounds.x, bounds.y, bounds.w, bounds.h);
    }
}

var logo = new p5(logoSketch,'logo');
