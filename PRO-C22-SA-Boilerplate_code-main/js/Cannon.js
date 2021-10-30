class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    
  }
  display(){
    imageMode(CENTER)
    image(cannonImage, this.x, this.y, this.width, this.height);

    image(cannonImg_2, 150, 150, 100, 100);
  }
}
