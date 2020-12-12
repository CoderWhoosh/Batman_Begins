class Drop{
    constructor(x,y){
        var options={
            isStatic:false,
            friction:1
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x,y,10,options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("blue");
        ellipse(0,0,10,10);
        pop();
     
    }
    updatePosition(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x:random(0,800), y:random(0,700)});
        }

    }
}