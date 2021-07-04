class Block{
    constructor(x, y, width, height) {
        var options = {
         restitution:0.1,
         mass:0.1,
         friction:0.1,
         density:0.1           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image=loadImage("block.png");
        World.add(world, this.body);

      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        if(this.body.speed<3){
          imageMode(CENTER)
          image(this.image,pos.x,pos.y,this.width, this.height);
        }else{
          World.remove(world,this.body)
          push()
          this.visibility=this.visibility-5
          tint(255,this.visibility)
            image(this.image,pos.x,pos.y,this.width, this.height)
            pop()
        }
        
        
        
      }
}
