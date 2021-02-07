
var player;
var score=0;
var wormGroup;

function setup()
{
  createCanvas(600,600);
  player = createSprite(40,550,30,30); 
  wormGroup= new Group();
  
}

function draw()
{
  background("black");
  textSize(23)
  stroke("red")
  noFill()
  ellipse(100,350,40,30)
   
  
  
  player.x = mouseX;
  player.y = mouseY;
  
  stroke("blue");
  if(player.x<150 && player.x>90 && player.y<380 && player.y>320 ){
    text("NO CHEATING!!",200,200);
    
    player.x=30;
    player.y=30;
    score=0;
  }


  generateWorms();

  for(var i = 0 ; i< wormGroup.length ;i++){
    var temp = wormGroup.get(i) ;
    if (player.isTouching(temp)) {
      score++;
      temp.destroy();
      
      }   
    }

  stroke("yellow")
  text("Worms destroyed: "+score,350,50);
  
  drawSprites();
}

function generateWorms()
{
  if(frameCount % 30 === 0){
  var worm = createSprite(100,350,40,5);
  worm.shapeColor="green";
  console.log(frameCount);
  worm.velocityY = random(-4,5);
  worm.velocityX = random(-4,5);
  wormGroup.add(worm); 
  }

}