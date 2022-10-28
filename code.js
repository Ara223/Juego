var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["945d0879-9fd3-4e98-a092-09077097711d","6ec40ea4-9609-4ae5-8260-2eaed91d886e","7776e4c6-1d79-4a8c-8a12-7aa53979684d","64a9f38a-9a29-4b1b-a3c4-b85e84269b98","f6ea835b-3822-41f0-b37e-160ae5b10997","e813d909-7089-4032-94b7-d5a99fe9f8ff","cc1977ef-444f-4f8e-a117-ad97cb1b5893","b574da3f-dc07-44a9-8434-235943a39a02","cc7f7bd8-68db-456a-a1a5-0ace14205a05","c66d2409-323e-44cb-9fc3-791ef5221f87","8618bf03-f571-4a6b-ae8a-4ff8d9d4c08a","46aa80b2-4b9c-4226-baf9-dd68c61d7036","de4cd106-ad98-43f6-b7a0-843eae00ca93"],"propsByKey":{"945d0879-9fd3-4e98-a092-09077097711d":{"name":"background_landscape04_1","sourceUrl":null,"frameSize":{"x":400,"y":397},"frameCount":1,"looping":true,"frameDelay":12,"version":"ApAg1nWMHmHXY3QGZ1cXo57X3yRSK1FZ","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":397},"rootRelativePath":"assets/945d0879-9fd3-4e98-a092-09077097711d.png"},"6ec40ea4-9609-4ae5-8260-2eaed91d886e":{"name":"hielo","sourceUrl":null,"frameSize":{"x":41,"y":101},"frameCount":1,"looping":true,"frameDelay":12,"version":"ErQig80GE5pcoShCqJ4bJs3HJzacEXoH","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":41,"y":101},"rootRelativePath":"assets/6ec40ea4-9609-4ae5-8260-2eaed91d886e.png"},"7776e4c6-1d79-4a8c-8a12-7aa53979684d":{"name":"rockIce_1","sourceUrl":"assets/api/v1/animation-library/gamelab/TXMcdJmf64bm5jHdYXtpL3eGywqCb7vf/category_video_games/rockIce.png","frameSize":{"x":108,"y":239},"frameCount":1,"looping":true,"frameDelay":2,"version":"TXMcdJmf64bm5jHdYXtpL3eGywqCb7vf","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":239},"rootRelativePath":"assets/api/v1/animation-library/gamelab/TXMcdJmf64bm5jHdYXtpL3eGywqCb7vf/category_video_games/rockIce.png"},"64a9f38a-9a29-4b1b-a3c4-b85e84269b98":{"name":"ore2","sourceUrl":null,"frameSize":{"x":52,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"qNQFzycUQ4kS7OQE1xxlsdfGY6CmU8SW","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":52,"y":40},"rootRelativePath":"assets/64a9f38a-9a29-4b1b-a3c4-b85e84269b98.png"},"f6ea835b-3822-41f0-b37e-160ae5b10997":{"name":"ore1","sourceUrl":null,"frameSize":{"x":31,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"svpsCIPf41q.gnxQ17BKYBZCtwAN.Dcn","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":31,"y":30},"rootRelativePath":"assets/f6ea835b-3822-41f0-b37e-160ae5b10997.png"},"e813d909-7089-4032-94b7-d5a99fe9f8ff":{"name":"ore","sourceUrl":null,"frameSize":{"x":30,"y":25},"frameCount":1,"looping":true,"frameDelay":12,"version":"IY6w2JK8ECjWZfFfo2Spv_07UpukYPkF","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":25},"rootRelativePath":"assets/e813d909-7089-4032-94b7-d5a99fe9f8ff.png"},"cc1977ef-444f-4f8e-a117-ad97cb1b5893":{"name":"exp","sourceUrl":null,"frameSize":{"x":396,"y":354},"frameCount":1,"looping":true,"frameDelay":12,"version":"EHDrSWMSCIEeF_1N.9JpAlsQ6OPC_6Gi","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":354},"rootRelativePath":"assets/cc1977ef-444f-4f8e-a117-ad97cb1b5893.png"},"b574da3f-dc07-44a9-8434-235943a39a02":{"name":"ground_stone_broken_1","sourceUrl":"assets/api/v1/animation-library/gamelab/KrCldlEIuzS6NvxFpNF8_84VvtWHa8Ye/category_video_games/ground_stone_broken.png","frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":2,"version":"KrCldlEIuzS6NvxFpNF8_84VvtWHa8Ye","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KrCldlEIuzS6NvxFpNF8_84VvtWHa8Ye/category_video_games/ground_stone_broken.png"},"cc7f7bd8-68db-456a-a1a5-0ace14205a05":{"name":"ground_stone_2","sourceUrl":"assets/api/v1/animation-library/gamelab/TPHSAheUsW_jnglQ_pb3mL_xEPLgWWnE/category_video_games/ground_stone.png","frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":2,"version":"TPHSAheUsW_jnglQ_pb3mL_xEPLgWWnE","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/api/v1/animation-library/gamelab/TPHSAheUsW_jnglQ_pb3mL_xEPLgWWnE/category_video_games/ground_stone.png"},"c66d2409-323e-44cb-9fc3-791ef5221f87":{"name":"ground_stone_small_broken_1","sourceUrl":"assets/api/v1/animation-library/gamelab/t6ZXIA9ZZwQBwBG1_IGVA8bCZXZ_nlf_/category_video_games/ground_stone_small_broken.png","frameSize":{"x":200,"y":100},"frameCount":1,"looping":true,"frameDelay":2,"version":"t6ZXIA9ZZwQBwBG1_IGVA8bCZXZ_nlf_","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":100},"rootRelativePath":"assets/api/v1/animation-library/gamelab/t6ZXIA9ZZwQBwBG1_IGVA8bCZXZ_nlf_/category_video_games/ground_stone_small_broken.png"},"8618bf03-f571-4a6b-ae8a-4ff8d9d4c08a":{"name":"luc","sourceUrl":null,"frameSize":{"x":200,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"CPcwoeknOcOKqM5EdlCWWDNFOzRBCn10","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":100},"rootRelativePath":"assets/8618bf03-f571-4a6b-ae8a-4ff8d9d4c08a.png"},"46aa80b2-4b9c-4226-baf9-dd68c61d7036":{"name":"bat_1","sourceUrl":null,"frameSize":{"x":400,"y":217},"frameCount":1,"looping":true,"frameDelay":12,"version":"viVeon0qa8N1.gso5mfx9D9xExx8SNE0","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":217},"rootRelativePath":"assets/46aa80b2-4b9c-4226-baf9-dd68c61d7036.png"},"de4cd106-ad98-43f6-b7a0-843eae00ca93":{"name":"bat","sourceUrl":null,"frameSize":{"x":170,"y":81},"frameCount":1,"looping":true,"frameDelay":12,"version":"puP1iV7ZkF_rV29leXDMaz9I_D1TdxDJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":170,"y":81},"rootRelativePath":"assets/de4cd106-ad98-43f6-b7a0-843eae00ca93.png"}}};
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



var fondo = createSprite(200,200,400,400);
var playe = createSprite(50,140,20,20);
var hielo3 = createSprite(180,0,10,10);
var hielo1 = createSprite(260,0,10,10);
var hielo2 = createSprite(370,0,10,10);
var diamon = createSprite(190,100,10,10) 
var diamon1 = createSprite(340,280,10,10) 
var diamon2 = createSprite(250,210,10,10) 
var diamon3 = createSprite(230,370,10,10)
var diamon4 = createSprite(370,150,10,10)
var l = createSprite(200,407,400,10)
var P = createSprite(100,380,25,20);
var P1 = createSprite(75,380,25,20);
var P2 = createSprite(50,380,25,20);
var P3 = createSprite(125,380,25,20);
var P4 = createSprite(150,380,25,20);
var gameState = "serve";
var score = 0;


function draw() {
  
 playe.scale =0.7;



  if(gameState == "serve"){
  hielo3.velocityY=0;
hielo1.velocityY=0;
hielo2.velocityY=0;
     text("Consige las gemas para ganar",200,200)
  stroke("red");
    if(keyDown("space")){

    gameState = "play"
    }
  
  } 
  if(gameState == "play"){
     hielo3.velocityY=+3;
hielo1.velocityY=+2;
hielo2.velocityY=+3;
 if(keyWentUp("up")){
     playe.velocityY=0
    }
    if(keyWentDown("up")){
     playe.velocityY=-7
    }
    if(keyWentDown("left")){
     playe.velocityX=-7
    }
    if(keyWentUp("left")){
     playe.velocityX=0
    }
    if(keyWentDown("down")){
     playe.velocityY=+7
    }
    if(keyWentUp("down")){
     playe.velocityY=0
    }
    if(keyWentUp("right")){
     playe.velocityX=0
    }
    if(keyWentDown("right")){
     playe.velocityX=+7
    }
    if(hielo3.isTouching(l)){
      hielo3.x=240
      hielo3.y=0
    }
    
    if(hielo2.isTouching(l)){
      hielo2.x=370
      hielo2.y=0
    }
   
    if(hielo1.isTouching(l)){
      hielo1.x=150
      hielo1.y=0
    }
    
     if(playe.isTouching(diamon)){
      score= score + 1
      playSound("assets/category_collect/retro_game_coin_pickup_1.mp3", false)
        diamon.destroy()
    }
    
     if(playe.isTouching(diamon1)){
      score= score + 1
      playSound("assets/category_collect/retro_game_coin_pickup_1.mp3", false)
        diamon1.destroy()
    }
    
     if(playe.isTouching(diamon2)){
      score= score + 1
      playSound("assets/category_collect/retro_game_coin_pickup_1.mp3", false)
        diamon2.destroy()
  
    }
    
     if(playe.isTouching(diamon3)){
      score= score + 1
      playSound("assets/category_collect/retro_game_coin_pickup_1.mp3", false)
        diamon3.destroy()
    }
    
     if(playe.isTouching(diamon4)){
      score= score + 1
       playSound("assets/category_collect/retro_game_coin_pickup_1.mp3", false)
        diamon4.destroy()
    }
  
     if(score == 1){
      P2.shapeColor="red"
    }
   
    if(score == 2){
      P1.shapeColor="red"
    }
   
    if(score == 3){
      P.shapeColor="red"
    }
    
    if(score == 4){
      P3.shapeColor="red"
    }
    
    if(score == 5){
      P4.shapeColor="red"
    }
    

  if(playe.isTouching(hielo3) || playe.isTouching(hielo1)|| playe.isTouching(hielo2)||(score == 5)){
  playSound("assets/category_explosion/playful_game_explosive_hit.mp3", false)
  gameState = "end"
  }
}
 
  if(gameState == "end"){
 
  hielo1.x=180
     hielo1.y=0
  hielo2.x=370
     hielo2.y=0
     hielo3.x=180
     hielo3.y=0
     hielo3.velocityX=0
     hielo3.velocityY=0
      hielo2.velocityX=0
     hielo2.velocityY=0
      hielo1.velocityX=0
     hielo1.velocityY=0
     playe.x=50
     playe.y=140
      playe.velocityX=0
     playe.velocityY=0
  }
   createEdgeSprites();
   

  fondo.setAnimation("background_landscape04_1")
      playe.setAnimation("bat")
hielo3.setAnimation("hielo")
hielo1.setAnimation("hielo")
hielo2.setAnimation("hielo")
diamon.setAnimation("ore")
diamon1.setAnimation("ore1")
diamon2.setAnimation("ore2")
diamon3.setAnimation("ore2")
diamon4.setAnimation("ore")



 drawSprites()
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
