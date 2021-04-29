const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;
var tom,tomImg;
var jerry,jerryImg;
var mouseImg,gardenI;
var tom2Img, tom3Img,mouse2Img;    
function preload() {
    //load the images here
tomImg= loadImage("images/cat1.png")
jerryImg= loadImage("images/mouse1.png")
gardenI = loadImage("images/garden.png")
mouseImg = loadAnimation("images/mouse2.png","images/mouse3.png")
tom2Img=loadAnimation("images/cat2.png","images/cat3.png")
tom3Img=loadAnimation("images/cat4.png")
mouse2Img=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    tom = createSprite(800,500);
    tom.addImage(tomImg);
    tom.scale=0.25;
    jerry = createSprite(150,500);
    jerry.addImage(jerryImg);
    jerry.scale=0.25;
}

function draw() {

    background(gardenI);
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        jerry.addAnimation("jerry2",mouse2Img)
        jerry.changeAnimation("jerry2");
        jerry.scale=0.25
        tom.velocityX=0
        tom.addAnimation("catwalk2",tom3Img)
        tom.changeAnimation("catwalk2")  
        tom.scale=0.25;
        tom.x=300
    }
    
 
    drawSprites();
        
}
function keyPressed(){

    if(keyCode===LEFT_ARROW){
        jerry.addAnimation("jerryTeasing",mouseImg)
        jerry.changeAnimation("jerryTeasing");
        jerry.frameDelay = 25;
        tom.velocityX=-5
        tom.addAnimation("catwalk",tom2Img)
        tom.changeAnimation("catwalk")
        jerry.scale=0.25;
        tom.scale=0.25;
    }


}


