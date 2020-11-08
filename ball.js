class ball{
    constructor(x,y,angle){
        var options ={
            restitution: 1,
            friction: 0,
            frictionAir: 0,
            slop: 1,
            inertia: Infinity
            };
    this.body = Bodies.circle(x,y,37.5,37.5,angle,options);
    this.width = 75;
    this.height = 75;
    World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
    var pos = this.body.position;
    push();
   
    ellipseMode(CENTER);
    fill("red");
    ellipse(pos.x,pos.y,this.width,this.height);
    pop();
    }}