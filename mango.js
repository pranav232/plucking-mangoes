class Mango{
    constructor(x,y){
        var options={
       restitution:0.7,
       friction:1,
       density:1,
       isStatic:true
        }
        this.image=loadImage("mango.png")
        this.body=Bodies.rectangle(x,y,50,50,options);
        this.width=50;
        this.height=50;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER)
        rotate(angle)
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}