class Ball{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.polygon = Bodies.circle(50,200,20);
        this.width = width;
        this.height = height;
        World.add(world,polygon);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        imageMode(CENTER)
        image(polygon_img,polygon.position.x,this.polygon.position.y,40,40);
        pop();
      }
}
