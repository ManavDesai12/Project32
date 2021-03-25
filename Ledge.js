class ledge {
  constructor(x,y,width,height) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    this.body.position.x = mouseX;
    var pos =this.body.position;
    rectMode(CENTER);
    fill("red");
    rect(pos.x, pos.y, this.width, this.height);
  }
};
