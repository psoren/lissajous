function Dot(radius, dim, sketch){

    this.x = dim/2;
    this.y = dim/2;
    this.radius = radius;

    this.show = function(){
        sketch.ellipse(this.x, this.y, 15, 15);
    }

    this.update = function(x,y){
        this.x = x;
        this.y = y;
    }
}
