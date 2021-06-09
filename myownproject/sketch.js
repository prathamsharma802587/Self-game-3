var maize;
var cardboard1,cardboard2,cardboard3,cardboard4,cardboard5,cardboard6,cardboard7,cardboard8,cardboard9,cardboard10,
cardboard11,cardboard12,cardboard13,cardboard14,cardboard15,cardboard16,cardboard17,cardboard18,cardboard19,cardboard20,cardboard21;
var box1,box2,box3,box4,box5;
var box1Img,box2Img,box3Img,box4Img,box5Img;
var police,policeImg;
var eagle, eagleImg ;
var diamond1,diamond2,diamond3,diamond4;
var diamond1Img,diamond2Img,diamond3Img,diamond4Img
var smog;
var edges;
var grillGate1,grillGate2,grillGate3,grillGate4;
var GameScore=0;

function preload(){
  eagleImg = loadImage('images/eagle.png')

  policeImg=loadImage('images/police.jpg')

  box1Img=loadImage('images/box1.png.png')
  box2Img=loadImage('images/box2.png.png')
  box3Img=loadImage('images/box3.png.png')
  box4Img=loadImage('images/box4.png.png')
  box5Img=loadImage('images/box5.png.png')

  diamond1Img=loadImage('images/diamond1-removebg-preview - Copy (2).png')
  diamond2Img=loadImage('images/diamond2-removebg-preview - Copy (3).png')
  diamond3Img=loadImage('images/diamond3-removebg-preview - Copy.png')
  diamond4Img=loadImage('images/diamond4-removebg-preview.png')


}


function setup() {
  createCanvas(400,400);
  
   cardboard1 = createSprite(10,70,100,20);
   cardboard1.shapeColor = "brown";
   cardboard2 = createSprite(100,50,20,100);
  cardboard2.shapeColor = "brown";
   cardboard3 = createSprite(80,130,100,20);
  cardboard3.shapeColor = "brown";
   cardboard4 = createSprite(50,250,20,100);
  cardboard4.shapeColor = "brown";
   cardboard5 = createSprite(130,210,100,20);
   cardboard5.shapeColor = "brown";
   cardboard6 = createSprite(10,250,100,20);
   cardboard6.shapeColor = "brown";
   cardboard7 = createSprite(160,120,20,100);
   cardboard7.shapeColor = "brown";
   cardboard8 = createSprite(150,20,100,20);
   cardboard8.shapeColor = "brown";
   cardboard9 = createSprite(250,70,20,100);
   cardboard9.shapeColor = "brown";
   cardboard10 = createSprite(270,150,100,20);
   cardboard10.shapeColor = "brown";
   cardboard11 = createSprite(330,50,100,20);
   cardboard11.shapeColor = "brown";
   cardboard12 = createSprite(340,125,20,100);
   cardboard12.shapeColor = "brown";
   cardboard13 = createSprite(220,250,20,100);
   cardboard13.shapeColor = "brown";
   cardboard14 = createSprite(330,210,150,20);
   cardboard14.shapeColor = "brown";
   cardboard15 = createSprite(100,300,20,100);
   cardboard15.shapeColor = "brown";
   cardboard16 = createSprite(180,310,100,20);
   cardboard16.shapeColor = "brown";
   cardboard17 = createSprite(30,352,20,100);
   cardboard17.shapeColor = "brown";
   cardboard18 = createSprite(175,352,20,100);
   cardboard18.shapeColor = "brown";
   cardboard19 = createSprite(280,290,20,100);
   cardboard19.shapeColor = "brown";
   cardboard20 = createSprite(350,270,120,20);
   cardboard20.shapeColor = "brown";
   cardboard21 = createSprite(250,390,100,20);
   cardboard21.shapeColor = "brown";

   //grill gates aroung the maze

   grillGate1 = createSprite(200,0,400,5);
   grillGate1.shapeColor = "blue";
   grillGate2 = createSprite(200,400,400,5);
   grillGate2.shapeColor = "blue";
   grillGate3 = createSprite(0,200,5,400);
   grillGate3.shapeColor = "blue";
   grillGate4 = createSprite(400,200,5,400);
   grillGate4.shapeColor = "blue";

   eagle=createSprite(65,15,20,30)
   eagle.shapeColor="red";
   eagle.addImage(eagleImg);
   eagle.scale = 0.5;
    

   eagle.velocityX=4;
   eagle.velocityY=2;

   police=createSprite(370,380,10,10)
   police.shapeColor="blue";
   police.addImage(policeImg);
   police.scale=0.1;

   diamond1=createSprite(76,260,10,20)
   diamond1.shapeColor="pink";
   diamond1.addImage(diamond1Img);
   diamond1.scale=0.3

   diamond2=createSprite(345,235,10,20)
   diamond2.shapeColor="pink";
   diamond2.addImage(diamond2Img);
   diamond2.scale=0.3

   diamond3=createSprite(303,81,10,20)
   diamond3.shapeColor="pink";
   diamond3.addImage(diamond3Img);
   diamond3.scale=0.3

   diamond4=createSprite(135,82,10,20)
   diamond4.shapeColor="pink";
   diamond4.addImage(diamond4Img);
   diamond4.scale=0.3


   
   box1=createSprite(310,304,35,35)
   box1.shapeColor="brown";
   box1.addImage(box1Img);
   box1.scale=0.2;

   box2=createSprite(22,94,35,35)
   box2.shapeColor="brown";
   box2.addImage(box2Img);
   box2.scale=0.2;

   box3=createSprite(128,48,35,35)
   box3.shapeColor="brown";
   box3.addImage(box3Img);
   box3.scale=0.2;

   box4=createSprite(370,175,35,35)
   box4.shapeColor="brown";
   box4.addImage(box4Img);
   box4.scale=0.2;

   box5=createSprite(140,335,35,35)
   box5.shapeColor="brown";
   box5.addImage(box5Img);
   box5.scale=0.2;
  

}


function draw() {
  background("orange") 
  text(mouseX+","+mouseY,50,100) 

  edges = createEdgeSprites;
 
  eagle.bounceOff(grillGate1);
  eagle.bounceOff(grillGate2);
  eagle.bounceOff(grillGate3);
  eagle.bounceOff(grillGate4);

if(keyDown("right")){
 police.x = police.x + 4;
}
 if(keyDown("left")){
   police.x = police.x - 4;
 }
 if(keyDown("up")){
   police.y=police.y - 4;
 }
 if(keyDown("down")){
  police.y = police.y + 4;
}
 
 police.bounceOff(cardboard1)
 police.bounceOff(cardboard2)
 police.bounceOff(cardboard3)
 police.bounceOff(cardboard4)
 police.bounceOff(cardboard5)
 police.bounceOff(cardboard6)
 police.bounceOff(cardboard7)
 police.bounceOff(cardboard8)
 police.bounceOff(cardboard8)
 police.bounceOff(cardboard9)
 police.bounceOff(cardboard10)
 police.bounceOff(cardboard11)
 police.bounceOff(cardboard12)
 police.bounceOff(cardboard13)
 police.bounceOff(cardboard14)
 police.bounceOff(cardboard15)
 police.bounceOff(cardboard16)
 police.bounceOff(cardboard17)
 police.bounceOff(cardboard18)
 police.bounceOff(cardboard19)
 police.bounceOff(cardboard20)
 police.bounceOff(cardboard21)

 police.bounceOff(grillGate1)
 police.bounceOff(grillGate2)
 police.bounceOff(grillGate3)
 police.bounceOff(grillGate4)
 
 //desrtoy diamond when police touches it
  if(police.isTouching(diamond1)){
      diamond1. destroy();
    }
    if(police.isTouching(diamond2)){
      diamond2. destroy();
    }
    if(police.isTouching(diamond3)){
      diamond3. destroy();
    }
    if(police.isTouching(diamond4)){
      diamond4. destroy();
    }

    if(police.isTouching(diamond1)){
      text("Score: " + GameScore);
    }
    if(police.isTouching(diamond2)){
      text("Score: " + GameScore);
    }
    if(police.isTouching(diamond3)){
      text("Score: " + GameScore);
    }
    if(police.isTouching(diamond4)){
      text("Score: " + GameScore);
    }


 
  


  /*if(robber1.isTouching(cardboard1)||robber1.isTouching(cardboard2)||robber1.isTouching(cardboard3)||
  robber1.isTouching(cardboard4)||robber1.isTouching(cardboard5)||robber1.isTouching(cardboard6)||
  robber1.isTouching(cardboard7)||robber1.isTouching(cardboard8)||robber1.isTouching(cardboard9)||
  robber1.isTouching(cardboard10)||robber1.isTouching(cardboard11)||robber1.isTouching(cardboard12)||
  robber1.isTouching(cardboard13)||robber1.isTouching(cardboard14)||robber1.isTouching(cardboard15)||
  robber1.isTouching(cardboard16)||robber1.isTouching(cardboard17)||robber1.isTouching(cardboard18)||
  robber1.isTouching(cardboard19)||robber1.isTouching(cardboard20)||robber1.isTouching(cardboard21)){
    
  robber1.velocityX=-5
  robber1.velocityY=4

  
  
  
    
  
  
  


*/  
  
  drawSprites()

}