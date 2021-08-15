class Boat{

constructor(x,y,width,height,boatpos){
var options={
restitution:0.5,
density:0.8,
friction:0.8
}
this.body=Bodies.rectangle(x,y,width,height,options)
World.add(world,this.body)
this.width=width;
this.height=height;
this.image=loadImage("assets/boat.png");
this.boatPosition=boatpos
}
remove(index){
    Matter.World.remove(world,boats[index].body)
    boats.splice(index,1)
}
display(){

var pos=this.body.position
var angle=this.body.angle
push()
translate (pos.x,pos.y)
rotate(angle)
imageMode(CENTER)
image(this.image,0,this.boatPosition,this.width,this.height)
pop()


} 













}