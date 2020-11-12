class Paper{
    constructor(x,y,r){
        var paper_options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,r,paper_options)
        this.r = r;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill(255,0,255);
        ellipse(pos.x, pos.y, this.r, this.r);
    }
}