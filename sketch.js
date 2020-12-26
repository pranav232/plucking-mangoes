
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var boy,tree
function preload()
{
boy=loadImage("boy.png")
tree=loadImage("tree.png")	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
stone=new Stone(10,570,50,50);
chain=new Chain(stone.body,{x:10,y:570});
	//Create the Bodies Here.
mango1=new Mango(450,400);
mango2=new Mango(500,400);
mango3=new Mango(560,450);
mango4=new Mango(570,470);
mango5=new Mango(600,460);
mango6=new Mango(670,480);
	Engine.run(engine);
  
}


function draw() {
  imageMode(CENTER);
  background("lightblue");
  text(mouseX +","+mouseY,mouseX,mouseY)
  image(boy,70,650,200,300);
  image(tree,600,500,400,500)
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  chain.display();
  detectColition(stone,mango1);
  detectColition(stone,mango2);
  detectColition(stone,mango3);
  detectColition(stone,mango4);
  detectColition(stone,mango5);
  detectColition(stone,mango6);
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  chain.fly();
}
function detectColition(rock,fruit){
  rockpos=rock.body.position;
  fruitpos=fruit.body.position
  var distance=dist(rockpos.x,rockpos.y,fruitpos.x,fruitpos.y);
  if(distance<=rock.width/2+fruit.width/2){
    Matter.Body.setStatic(fruit.body,false)
  }
}
