class Rubber {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':5.0,
          'density':0.7
      }
      this.body = Bodies.circle(x, y, 10, options);
      this.width = 10;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      fill("red");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };