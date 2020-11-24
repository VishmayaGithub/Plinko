class Plinko {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,10,options);
     this.radius = 10
      World.add(world, this.body);
    }
    display(){
        push()
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("white");
     ellipse (pos.x, pos.y,7,7);
     pop()
    }
  };