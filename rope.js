class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 300
        }
        this.pointB = pointB
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }


    display(){
push();
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(1);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
    }
    
}