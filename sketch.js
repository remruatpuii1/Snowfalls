const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var snowBody;
var snowImg;
var snow = [];
var maxSnow = 10;

function preload()
{
  snowImg=loadImage("snow1.jpg");

}

function setup() {
  createCanvas(1095,619);
  engine = Engine.create();
  world = engine.world;

  if(frameCount%180 === 0)
  {
      for(var i=0; i<maxSnow; i++)
      {
        snow.push(snowBody = new Snowflake(random(0,1095), random(-19, 600)));
      } 
  }  

  Engine.run(engine);
}

function draw() {
  background(snowImg);  
  Engine.update(engine);

  for(var i=0; i<maxSnow; i++)
      {
        snow[i].display();
        snow[i].Repeat();
      }
    
  
      if(frameCount%180 === 0)
      {
        for(var i=0; i<maxSnow; i++)
        {
          snow[i].Repeat();
        }
      }

  drawSprites();
}

function snowfall()
{
  if(frameCount%5===0)
  {
    snowSpr = createSprite(random(0,1095), random(-10, 0));
    snowSpr.addImage("Flakes", snowImg);
    snowSpr.velocityY = 3;
    snowSpr.scale = 0.1;

    if(snowSpr.y > 619)
    {
      snowSpr.y = random(0,619);
    }
  }

}
