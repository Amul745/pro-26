const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon,cannonball;
//var boat
var boats=[]

var balls=[]
function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle=-PI/4
  ground = new Ground(0, height - 1, width * 2, 1); 
  tower = new Tower(width/2-480,height-250,200,350);
  cannon=new Cannon(width/2-445,height/2-190,120,40,angle)
 // boat=new Boat(width,height-100,180,180,-100)
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  
  Engine.update(engine);
  ground.display();
  
  cannon.show();
  tower.show();
  for(var i=0;i<balls.length;i++){

    showcannonball(balls[i],i)
    for( var j=0;j<boats.length;j++){
      if(balls[i]!==undefined&& boats[j]!==undefined){
        var collision=Matter.SAT.collides(balls[i].body,boats[j].body)
        if(collision.collided){
          boats[j].remove(j)
          Matter.World.remove(world,balls[i].body)
          balls.splice(i,1)
          i--
        }
      }
    }
    
  }
 // Matter.Body.setVelocity(boat.body,{x:-0.9,y:0})
 //boat.display();
 
 showboats()
 
}
function keyPressed(){
  if(keyCode===DOWN_ARROW){
var cannonball=new CannonBall(cannon.x,cannon.y)
balls.push(cannonball)
  }
  
}

function showcannonball(ball,index){
ball.show();
if(ball.body.position.x>=width||ball.body.position.y>=height){
  Matter.World.remove(world,ball.body)
  balls.splice(index,1)
}

}
function keyReleased(){
if (keyCode===DOWN_ARROW){
balls[balls.length-1].shoot()
}
}
function showboats(){
if(boats.length>0){
if(boats.length<4&& boats[boats.length-1].body.position.x<width-300){
  var positions=[-120,-100,-120,-80]
  var position=random(positions)
  var boat=new Boat(width,height-80,150,150,position)
  boats.push(boat)
}
for(var i=0;i<boats.length;i++){
  Matter.Body.setVelocity(boats[i].body,{x:-0.9,y:0})
  boats[i].display()
  
}


}
else{var boat =new Boat(width,height-100,150,150,-100)
boats.push(boat)
}

}


