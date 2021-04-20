const sketch3 = s3 => {

    // Flowfield object
    let flowfield;


    s3.setup = function() {
      let cnv = s3.createCanvas(s3.windowWidth, s3.windowHeight);

      cnv.id('flowfield');
      cnv.class('flowfield-class');

      cnv.parent("about-img");
      // Make a new flow field with "resolution" of 16
      s3.flowfield = new FlowField(50);
    }

    s3.draw = function() {
      s3.background(0);
      s3.flowfield.display();

    }

    s3.mousePressed = function() {
      s3.flowfield.init();
    }

    function FlowField(r) {
      // How large is each "cell" of the flow field
      this.resolution = r;
      // Determine the number of columns and rows based on sketch's width and height
      this.cols = s3.width / this.resolution;
      this.rows = s3.height / this.resolution;
      // A flow field is a two dimensional array of p5.Vectors
      // We can't make 2D arrays, but this is sort of faking it
      this.make2Darray = function(n) {
        let array = [];
        for (let i = 0; i < n; i++) {
          array[i] = [];
        }
        return array;
      };
      this.field = this.make2Darray(this.cols);

      this.init = function() {
        // Reseed noise so we get a new flow field every time
        s3.noiseSeed(Math.floor(s3.random(10000)));
        let xoff = 0;
        for (let i = 0; i < this.cols; i++) {
          let yoff = 0;
          for (let j = 0; j < this.rows; j++) {
            let theta = s3.map(s3.noise(xoff, yoff), 0, 1, 0, s3.TWO_PI);
            // Polar to cartesian coordinate transformation to get x and y components of the vector
            this.field[i][j] = s3.createVector(s3.cos(theta), s3.sin(theta));
            yoff += 0.1;
          }
          xoff += 0.1;
        }
      };
      this.init();

      // Draw every vector
      this.display = function() {
        for (let i = 0; i < this.cols; i++) {
          for (let j = 0; j < this.rows; j++) {
            drawVector(this.field[i][j], i * this.resolution, j * this.resolution, this.resolution - 2);
          }
        }
      };

      this.lookup = function(lookup) {
        let column = Math.floor(constrain(lookup.x / this.resolution, 0, this.cols - 1));
        let row = Math.floor(constrain(lookup.y / this.resolution, 0, this.rows - 1));
        //println(lookup.x);
        return this.field[column][row].copy();
      };

      // Renders a vector object 'v' as an arrow and a location 'x,y'
      let drawVector = function(v, x, y, scayl) {
        s3.push();
        // Translate to location to render vector
        s3.translate(x, y);
        s3.stroke(255);
        // Call vector heading function to get direction (note that pointing to the right is a heading of 0) and rotate
        s3.rotate(v.heading());
        // Calculate length of vector & scale it to be bigger or smaller if necessary
        let len = v.mag() * scayl;
        // Draw three lines to make an arrow (draw pointing up since we've rotate to the proper direction)
        s3.line(0, 0, len, 0);
        s3.pop();
      };
    }

}

var flowfield = new p5(sketch3,'flowfield');