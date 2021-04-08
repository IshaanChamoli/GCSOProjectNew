
var car, wall, speed, weight

function setup() {
  createCanvas(800,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite (300, 200, 50, 100)
  speed = random (50, 90)
  weight = random (400,1500)
car.velocityX= speed

}



function draw() {
  background(255,255,255);  

  if (car.isTouching(wall)) {

    car.velocityX = 0;
    
    }
    
    if (0.5*weight*speed*speed/22500 <= 100) {
    
    car.shapeColor = "green" ;
    
    
    }
    
    if (0.5*weight*speed*speed/22500 < 180 && 0.5*weight*speed*speed/22500 >100 ) {
    
      car.shapeColor = "yellow" ;
      
      
      }
    
      if (0.5*weight*speed*speed/22500 >= 180) {
    
        car.shapeColor = "red" ;
        
        
        }




  drawSprites();
}