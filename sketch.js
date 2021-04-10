var player;
var wormGroup;
var score=0;
var score2=0;
function preload(){
 playerImage=loadImage("frog.png")
 bgImage=loadImage("swampImg.png")
wormImage=loadImage("worm.png")
extraImage=loadImage("What-is-Pop-Art.jpg")
}
function setup() {
  createCanvas(600,600);
  bg=createSprite(300,300)
 player= createSprite(50,550,30,30)
wormGroup=new Group;
}
function draw() {
  background("black");  
  bg.addImage(bgImage);
  bg.scale=2.5;
  player.addImage(playerImage);
  player.scale=0.4;
  player.x=mouseX;
  player.y=mouseY;
  if(frameCount%30==0){
    generateWorms();
  }
for (var i=0;i<wormGroup.length;i++)
{
  var temp=wormGroup.get(i);
  if(player.isTouching(temp))
  {
    temp.destroy();
    score+=1;
    temp=null;
  }
  else if(temp.x<0 || temp.x>600 || temp.y<0 || temp.y>600){
    score2+=1;
    temp.destroy();
    temp=null;
  }
}
textSize(20);
text("worms destroyed:"+score,350,50);
textSize(20);
text("worms missed:"+score2,350,100)
  drawSprites();
}
function generateWorms(){
  var worms=createSprite(random(40,380),random(290,380),40,5);
  var extra=createSprite(random(40,380),random(290,380),40,5);
  worms.addImage(wormImage);
  extra.addImage(extraImage);
console.log(frameCount);
worms.scale=random(0.1,0.3);
//worms.shapeColor="green";
extra.scale=random(0.1);
worms.velocityX=random(-4,4);
worms.velocityY=random(-4,4);
extra.velocityX=random(-4,4);
extra.velocityY=random(-4,4);
wormGroup.add(worms);

}