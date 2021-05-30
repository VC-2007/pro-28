class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB
        this.launcherObject = Constraint.create(options);

        World.add(world, this.launcherObject);
        
    }

    fly(){
        this.launcherObject.bodyA = null;
    }

    attach(body){
        this.launcherObject.bodyA = body;
    }

    display(){
        if(this.launcherObject.bodyA){
            var pointA = this.launcherObject.bodyA.position;
            var pointB = this.pointB;
            stroke(48,22,8);

            
            if(pointA.x < 210){
                //stroke Weight--> thickness of line
                strokeWeight(3);
            line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y + 10);
            line(pointA.x - 20, pointA.y, pointB.x + 25, pointB.y + 10);
           

            }else{
                strokeWeight(7);
            line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y + 10);
            line(pointA.x - 20, pointA.y, pointB.x + 25, pointB.y + 10);
            
            }

            
            
            
        }
    }
    
}