class Slingshot{

    constructor(bodyA,pointB){
        var options = {
         bodyA:bodyA,
         pointB:pointB,
         length:20,
         stiffness:0.8
        }
        this.chain=Constraint.create(options)  
        this.pointB=pointB
        World.add(world,this.chain)
    }
    display(){

        if(this.chain.bodyA){
            push();
        
        
        var pointA = this.chain.bodyA.position
        var pointB = this.pointB

        strokeWeight(3);
        stroke("red");

        line(pointA.x,pointA.y,pointB.x,pointB.y)
   
        pop();
        }

    }
    fly(){
        this.chain.bodyA=null;
    }
    attach(body){
        this.chain.bodyA = body;
    }
}
