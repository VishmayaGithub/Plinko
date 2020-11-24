
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

 var particle = []
  var plinko = []
  var division = []

function preload()
{
	
}

function setup() {
	createCanvas(400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 ground = new Ground(200,670,400,20)
	
  divisionHeight = 300
  division1 = new Division(0,510,10,divisionHeight)
  division.push(division1)

  division2 = new Division(80,510,10,divisionHeight)
  division.push(division2)

  division3 = new Division(80+80,510,10,divisionHeight)
  division.push(division3)

  division4= new Division(80+80+80,510,10,divisionHeight)
  division.push(division4)

  
  division5 = new Division(80+240,510,10,divisionHeight)
  division.push(division5)

  division6 = new Division(80+80+80+160,510,10,divisionHeight)
  division.push(division6)
/
  console.log(division)
  for (var n = 15; n <= width; n = n + 50) {
	plinko.push(new Plinko(n,50));
  }
  for (var h = 15; h <= width; h = h + 50) {
	plinko.push(new Plinko(h,130));
  }
  for (var m = 15; m <= width; m = m + 50) {
	plinko.push(new Plinko(m,230));
  }
  for (var t = 15; t <= width; t = t + 50) {
	plinko.push(new Plinko(t,330));
  }
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 // division()
  ground.display()
  division1.display()
  division2.display()
  division3.display()
  division4.display()
  division5.display()
  for (var l = 0; l < plinko.length; l++) {
    plinko[l].display();
   }
   if(frameCount%60 === 0){
	particle.push(new Particle(random(100,300),10))
}

  
  for(var j = 0;j<particle.length;j++){
	  particle[j].display()
  }
j
 

  drawSprites();
 
}
