'use strict'

let s = function(sketch){
    let dots = [];
    let numPoints = 300;
    let center = {};
    let path = [];

    sketch.setup = function(){
        let dimension = 200;
        sketch.createCanvas(dimension,dimension);
        dots.push(new Dot(dimension/2.1, dimension, sketch));
        center.x = dimension/2;
        center.y = dimension/2;
    }

    sketch.draw = function(){
        sketch.background(0);

        let frame = sketch.frameCount % numPoints;
        let t = sketch.map(frame, 0, numPoints, 0, sketch.TWO_PI);

        for(let i = 0; i < dots.length; i++){

            let x = center.x + dots[i].radius * sketch.sin(sketch.a*t);
            let y = center.y + dots[i].radius * sketch.sin(sketch.b*t);

            x = x.toFixed(2);
            y = y.toFixed(2);

            //For each dot, draw 300 points
            if(path.length < numPoints*dots.length){
                path.push({x:x,y:y});
            }

            sketch.noStroke();
            for(let i = 0 ; i < path.length; i++){
                sketch.fill('#0099ff');
                sketch.ellipse(path[i].x, path[i].y, 4, 4);
            }

            sketch.fill(255);
            dots[i].update(x, y);
            dots[i].show();
        }
    }
}

for(let i = 1; i < 5; i++){
    for(let j = 1; j < 5; j++){
        let sketch = new p5(s, document.getElementById('sketch1'));
        sketch.a = i;
        sketch.b = j;
    }
}
