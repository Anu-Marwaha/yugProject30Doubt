class GBox{

    constructor(x,y){
        var options = {
         restitution:0.1,
         density:1,
         friction:1
        }
        this.object = Bodies.rectangle(x,y,50,50,options)
        this.width = 50
        this.height = 50
        World.add(world,this.object)
        this.visibility = 255
    }
    display(){
        var posX = this.object.position.x
        var posY = this.object.position.y
        var angle = this.object.angle

        
        if(this.object.speed<3){
            push();
            translate(posX,posY)
            rotate(angle)
            fill("grey")
       
            rectMode(CENTER)
            rect(0,0,this.width,this.height)
            pop();
       
        }
        else{
             push();
         this.visibility = this.visibility-5
    //     tint(255,(this.visibility))

    //     translate(posX,posY)
    //     rotate(angle)
    //     fill("green")
   
    //     rectMode(CENTER)
    //     rect(0,0,this.width,this.height)
       

         World.remove(world,this.object)
        pop();
     }

    }
}