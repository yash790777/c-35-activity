var ball, database;
var position;

function setup()
{
  createCanvas(500,500);
  database = firebase.database();

  ball = createSprite(250,250,10,10);
  ball.shapeColor = "red";

  var ballPosition = database.ref('ball/position');
  ballPosition.on("value", readDB);
}

function draw()
{
  background("white");
    if(keyDown(LEFT_ARROW))
    {
      writeDB(-1,0);
    }
    else if(keyDown(RIGHT_ARROW))
    {
      writeDB(1,0);
    }
    else if(keyDown(UP_ARROW))
    {
      writeDB(0,-1);
    }
    else if(keyDown(DOWN_ARROW))
    {
      writeDB(0,+1);
    }
    drawSprites();
  
}

function writeDB(x,y)
{
  var dbref=database.ref("ball/position");
  dbref.set({
'x': position.x+x,'y': position.y+y
  })
}

function readDB(data)
{
 position=data.val();
 ball.x=position.x;
 ball.y=position.y;
}

