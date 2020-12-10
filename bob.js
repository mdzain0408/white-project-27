class bob{

constructor(x,y,r){

this.r = r;

var options = {

    'restitution':0.8,
    'friction':1.0,
    'density':1.0
}
this.body = Bodies.circle(x,y,r,options)
this.color = color(9, 145, 158)
World.add(world,this.body);

}


display(){

var pos = this.body.position
fill(this.color)
ellipseMode(RADIUS);
ellipse(pos.x,pos.y,this.r,this.r);

}

}