class roof{

constructor(x,y,width,height){
this.body = Bodies.rectangle(x,y,width,height,{isStatic:true})
this.width = width;
this.height = height;
this.color = color(255)
World.add(world,this.body)

}
display(){

var pos = this.body.position;
fill(this.color)
rectMode(CENTER);
rect(pos.x,pos.y,this.width,this.height);


}


}