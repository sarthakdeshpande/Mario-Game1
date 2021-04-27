var mario, mario_running, mario_collided, bg, bgImg,ground;

function preload() {
    mario_running = loadAnimation("./images/mar1.png",
        "./images/mar2.png",
        "./images/mar3.png",
        "./images/mar4.png",
        "./images/mar5.png",
        "./images/mar6.png",
        "./images/mar7.png")
    bgImg = loadImage("./images/bgnew.jpg")
}
function setup() {
    createCanvas(1000, 600);
    
    bg = createSprite(500, 300, 1000, 600);
    bg.addImage(bgImg);
    bg.scale = 0.5;
    mario = createSprite(100, 500, 50, 50);
    mario.addAnimation("running", mario_running);
    mario.scale = 0.25;
    ground = createSprite(500,580,1000,5);
    // mario.debug = true;
    
    ground.visible=false;

}

function draw() {
    if(keyDown("space")){
        mario.velocityY=-10;
        
    }
    mario.velocityY+=0.3;
    mario.collide(ground); 
    drawSprites();
}
