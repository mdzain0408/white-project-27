class rope{
constructor(bodyA,bodyB,offsetX,offsetY){

this.offsetX = offsetX;
this.offsetY = offsetY;
var options = {

bodyA:bodyA,
bodyB:bodyB,
pointB:{x:this.offsetX,y:this.offsetY}


}

this.body = Constraint.create(options);
World.add(world,this.body);

}


display(){

var pointA = this.body.bodyA.position
var pointB = this.body.bodyB.position


var anchor1X = pointA.x
var anchor1Y = pointA.y

var anchor2X = pointB.x + this.offsetX;
var anchor2Y = pointB.y + this.offsetY;



line(anchor1X,anchor1Y,anchor2X,anchor2Y)

}





}