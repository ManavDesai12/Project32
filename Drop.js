class Drops {
    constructor(x, y){
        var options = {
            friction:0,
            density:2,
                }
        this.body = Bodies.circle(x, y, 50, options);
        World.add(world, this.body);
    }
    display(){
        fill("YELLOW");
        ellipse(this.body.position.x, this.body.position.y, 70, 70);

    }
    update(){
        if(this.body.position.y > height){
            text("You missed.", 180, 200);
        }
    }
}
