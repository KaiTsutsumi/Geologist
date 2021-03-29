class Hammer {
    constructor(x,y) {
      var options = {
          'restitution':0.5,
          'friction':9.0,
          'density':1.7
      }
      this.body = Bodies.rectangle(x,y,15, 90, options);
      this.width = 15;
      this.height = 90;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("yellow");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };