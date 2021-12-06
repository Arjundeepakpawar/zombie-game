var bg, bgImg
var player, shooterImg, shooterShooting
var zombie, zombieImg, zombieGroup
var heart1, heart2, heart3
var heart1Img, heart2Img, heart3Img
var  life = 3


function preload(){
bgImg = loadImage("./assets/bg.jpeg")
shooterImg = loadImage("./assets/shooter_2.png")
shooterShooting = loadImage("./assets/shooter_3.png")
zombieImg = loadImage("./assets/zombie.png")
heart1Img = loadImage("./assets/heart_1.png")
heart2Img = loadImage("./assets/heart_2.png")
heart3Img = loadImage("./assets/heart_3.png")
}






function setup() {
  createCanvas(windowWidth, windowHeight);
 bg = createSprite(displayWidth/2 - 20,displayHeight/2 - 40,20 , 20 )
bg.addImage(bgImg)
bg.scale = 1.1
player = createSprite(displayWidth - 1150, displayHeight - 300,50,50  )
player.addImage(shooterImg)
player.scale = 0.3
player.setCollider("rectangle",0, 0, 300, 300)
zombieGroup = new Group()
heart1 = createSprite(displayWidth - 150,40,20,20)
heart1.addImage("heart1",heart1Img)
heart1.visible = false
heart1.scale = 0.4

heart2 = createSprite(displayWidth - 100,40,20,20)
heart2.addImage("heart2",heart2Img)
heart2.visible = false
heart2.scale = 0.4

heart3 = createSprite(displayWidth - 150,40,20,20)
heart3.addImage("heart3",heart3Img)
heart3.scale = 0.4




}


function draw() {
  background(0);  
  if(life === 3){
    heart3.visible = true
    heart2.visible  = false
    heart1.visible = false
  }
  else if(life === 2){
    heart3.visible = false
    heart2.visible  = true
    heart1.visible = false


  }
else if(life === 1){

  heart3.visible = false
    heart2.visible  = false
    heart1.visible = true
}



  if(keyDown("UP_ARROW")&&player.y> 60 ){
  player.y = player.y - 30
  }
  if(keyDown("DOWN_ARROW")&&player.y<displayHeight - 195  ){
    player.y = player.y + 30
    }
  if(keyWentDown("space")){
  player.addImage(shooterShooting)
  }
  else if(keyWentUp("space")){
player.addImage(shooterImg)
  }
if(zombieGroup.isTouching(player)){
for(var i = 0; i<zombieGroup.length;i++){
if(zombieGroup[i].isTouching(player)){
zombieGroup[i].destroy()
life = life-1

}

}


}




enemy()

  drawSprites()  
}
function enemy(){
  if(frameCount%100===0){
    zombie = createSprite(random(displayWidth  +  200,390),random(100,500),40,40)
    zombie.addImage(zombieImg)
    zombie.scale = 0.15
    zombie.velocityX = -3
    zombie.setCollider("rectangle",0,0,400,400)
    zombie.lifetime = 400
    zombieGroup.add(zombie)
  }
  

}
