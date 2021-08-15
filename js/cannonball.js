class CannonBall{

constructor(x,y){
 this.x=x;
 this.y=y;
this.radius=40;
var options ={
isStatic:true,
restitution:1.0,
friction:1.0,
density:1.0
}
this.body = Bodies.circle(x, y,this.radius,options);
this.radius=40
//this.tower=loadImage()
this.image=loadImage("./assets/cannonball.png")
World.add(world,this.body)
this.trajectory=[]
}
shoot() {
    var velocity = p5.Vector.fromAngle(cannon.angle);
    velocity.mult(20);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
  }


show(){
var pos = this.body.position
var angle=this.body.angle
push()
translate(pos.x,pos.y)
rotate(angle)
imageMode(CENTER)
image(this.image,0,0,this.radius,this.radius)
pop()
if(this.body.velocity.x>0 && this.body.position.x>300){
  
  
var position=[this.body.position.x,this.body.position.y]
this.trajectory.push(position)
}
for(var i=0;i<this.trajectory.length;i++){
image(this.image,this.trajectory[i][0],this.trajectory[i][1],5,5)

}


}

}