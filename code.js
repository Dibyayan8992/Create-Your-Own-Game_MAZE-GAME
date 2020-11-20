var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["13456462-da7c-48f6-9858-cb00608d4553"],"propsByKey":{"13456462-da7c-48f6-9858-cb00608d4553":{"name":"pieceYellow_border17_1","sourceUrl":"assets/api/v1/animation-library/gamelab/etOB84YJ71s9qi4UKPu31j4yQ1MqYDqr/category_gameplay/pieceYellow_border17.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":2,"version":"etOB84YJ71s9qi4UKPu31j4yQ1MqYDqr","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/api/v1/animation-library/gamelab/etOB84YJ71s9qi4UKPu31j4yQ1MqYDqr/category_gameplay/pieceYellow_border17.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var ball=createSprite(10,10,20,20);

var cup = createSprite(380,374,60,90);
cup.setAnimation("pieceYellow_border17_1");

var cardboard1 = createSprite(0,96,700,10);
var cardboard2 = createSprite(400,246,700,10);
var cardboard3 = createSprite(48,290,10,100);
var cardboard4 = createSprite(96,360,10,100);
var cardboard5 = createSprite(148,290,10,100);
var cardboard6 = createSprite(196,360,10,100);
var cardboard7 = createSprite(244,290,10,100);
var cardboard8 = createSprite(300,348,10,100);
var cardboard9 = createSprite(370,300,80,10);
var cardboard10 = createSprite(48,144,10,100);                      
var cardboard11 = createSprite(100,201,10,100);
var cardboard12 = createSprite(148,144,10,100);
var cardboard13 = createSprite(196,201,10,100);
var cardboard14 = createSprite(244,144,10,100);
var cardboard15 = createSprite(300,201,10,100);
var cardboard16 = createSprite(94,60,10,70);
var cardboard17 = createSprite(148,0,10,120);                      
var cardboard18 = createSprite(200,60,10,70);
var cardboard19 = createSprite(248,0,10,120);
var cardboard20 = createSprite(296,60,10,70);
var cardboard21 = createSprite(348,144,10,100);
var cardboard22 = createSprite(348,0,10,120);

playSound("assets/534391__eliot-beats__edm-beat-3.mp3",true);


function draw() {
  background("cyan");
  
  createEdgeSprites();
  ball.bounceOff(edges);
  ball.shapeColor="red";
  cup.shapeColor="gold";
  cardboard1.shapeColor="brown";
  cardboard2.shapeColor="brown";
  cardboard3.shapeColor="brown";
  cardboard4.shapeColor="brown";
  cardboard5.shapeColor="brown";
  cardboard6.shapeColor="brown";
  cardboard7.shapeColor="brown";
  cardboard8.shapeColor="brown";
  cardboard9.shapeColor="brown";
  cardboard10.shapeColor="brown";
  cardboard11.shapeColor="brown";
  cardboard12.shapeColor="brown";
  cardboard13.shapeColor="brown";
  cardboard14.shapeColor="brown";
  cardboard15.shapeColor="brown";
  cardboard16.shapeColor="brown";
  cardboard17.shapeColor="brown";
  cardboard18.shapeColor="brown";
  cardboard19.shapeColor="brown";
  cardboard20.shapeColor="brown";
  cardboard21.shapeColor="brown";
  cardboard22.shapeColor="brown";
  
  
  if(keyDown(UP_ARROW)) {

    ball.velocityX = 0;
    ball.velocityY = -2;
  }
  
  if(keyDown("DOWN_ARROW")){
    ball.velocityY = 2;
    ball.velocityX = 0;
  }
  
  if (keyDown("LEFT_ARROW")){
    ball.velocityX = -2;
    ball.velocityY = 0;
  }
  
  if (keyDown("RIGHT_ARROW")){
    ball.velocityY = 0;
    ball.velocityX = 2;
  }
  
  if (ball.isTouching(cardboard1) ||
  ball.isTouching(cardboard2) ||
  ball.isTouching(cardboard3) ||
  ball.isTouching(cardboard4) ||
  ball.isTouching(cardboard5) ||
  ball.isTouching(cardboard6) ||
  ball.isTouching(cardboard7) ||
  ball.isTouching(cardboard8) ||
  ball.isTouching(cardboard9) ||
  ball.isTouching(cardboard10)||
  ball.isTouching(cardboard11)||
  ball.isTouching(cardboard12)||
  ball.isTouching(cardboard13)||
  ball.isTouching(cardboard14)||
  ball.isTouching(cardboard15)||
  ball.isTouching(cardboard16)||
  ball.isTouching(cardboard17)||
  ball.isTouching(cardboard18)||
  ball.isTouching(cardboard19)||
  ball.isTouching(cardboard20)||
  ball.isTouching(cardboard21)||
  ball.isTouching(cardboard22)){
    
    ball.y=10;
    ball.x=10;
  }
   
  if (ball.isTouching(cup)){
    stopSound("assets/534391__eliot-beats__edm-beat-3.mp3");
    textSize("23");
    fill("red");
    text("CONGRATULATIONS!!YOU WON",29,170);
    textFont("Syne Tactile");
    ball.velocityX=0;
    ball.velocityY=0;
  }
  
  drawSprites();
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
