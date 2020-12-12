class Umbrella{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x,y,150,options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        //ellipse(0,0,150,150);
        pop();
    }
}