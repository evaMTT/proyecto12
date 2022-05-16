var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;

function preload(){
  //loadImage de path (camino)
  pathImg=loadImage("path.png");
  //loadAnimation de boy (niño)
 boyImg=loadAnimation("Runner2.png","Runner1.png");
}

function setup(){
  
  createCanvas(800,800);
 //crear sprite de path (camino) 
 path=createSprite(320,370,300,10);
//agregar imagen de path
path.addImage("path",pathImg);
//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
path.y = path.width /2;
path.velocityY = -4;


//crear sprite de boy (niño)
boy = createSprite(50,50,20,50);
//agregar animación para boy
boy.addAnimation("kidrunning",boyImg);
boy.scale=0.08;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
////establecer visibilidad como false (falso) para límite izquierdo
leftBoundary.visible = false;
//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
//establecer visibilidad como false (falso) para límite izquierdo
rightBoundary.visible = false;
}

function draw() {
  background(0);
  
  
  // boy moviéndose en el eje X con el mouse
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  
  //código para reiniciar el fondo
  if(path.y > 450 ){
    path.y = height/2;
  }
  
  drawSprites();
}
