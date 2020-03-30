var movingRect,fixedRect;
var object1,object2;
var 
gameObject1,gameObject2;

function setup() {
  createCanvas(1200,800);
 movingRect= createSprite(400, 200, 80, 40);
 movingRect.shapeColor = "green";

gameObject1= createSprite(100,200,50,80);
gameObject1.shapeColor = "green";
gameObject1.visible = false;

gameObject2= createSprite(200,200,50,80);
gameObject2.shapeColor = "green";
gameObject2.visible = false;

gameObject3= createSprite(300,200,50,80);
gameObject3.shapeColor = "green";
gameObject3.visible = false;

gameObject4= createSprite(400,200,50,80);
gameObject4.shapeColor = "green";
gameObject4.visible = false;

gameObject5= createSprite(500,200,50,80);
gameObject5.shapeColor = "green";
gameObject5.visible = false;

gameObject6= createSprite(600,200,50,80);
gameObject6.shapeColor = "green";
gameObject6.visible = false;

gameObject7= createSprite(700,200,50,80);
gameObject7.shapeColor = "green";
gameObject7.visible = false;

gameObject8= createSprite(800,200,50,80);
gameObject8.shapeColor = "green";
gameObject8.visible = false;

gameObject9= createSprite(900,200,50,80);
gameObject9.shapeColor = "green";
gameObject9.visible = false;
}

function draw() {
  background(0,0,0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor = "green";
    background("red") ;

  }

 
  if(isTouching(movingRect,gameObject2)){
    movingRect.shapeColor = "green";
    background("blue") ;

  }

  if(isTouching(movingRect,gameObject3)){
    movingRect.shapeColor = "green";
    background("yellow") ;

  }

  if(isTouching(movingRect,gameObject4)){
    movingRect.shapeColor = "green";
    background("purple") ;

  }

  if(isTouching(movingRect,gameObject5)){
    movingRect.shapeColor = "green";
    background("darkBlue") ;

  }

  if(isTouching(movingRect,gameObject6)){
    movingRect.shapeColor = "green";
    background("lightGreen") ;

  }

  if(isTouching(movingRect,gameObject7)){
    movingRect.shapeColor = "green";
    background("pink") ;

  }

  if(isTouching(movingRect,gameObject8)){
    movingRect.shapeColor = "green";
    background("orange") ;

  }

  if(isTouching(movingRect,gameObject9)){
    movingRect.shapeColor = "green";
    background("brown") ;

  }

  drawSprites();

  
}

 