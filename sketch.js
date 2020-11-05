var wall, wallThickness;
var bullet, bulletSpeed, bulletWeight;
var damage;

function setup() {
  createCanvas(1600,400);
  wall = createSprite(1500, 200, wallThickness, height/2);
  bullet = createSprite(50, 200, 50, 10);
  bulletSpeed = random(30, 52);
  wallThickness = random(22, 83);
  bulletWeight = random(223, 321);
  bullet.velocityX = bulletSpeed;
}

function draw() {
  background(255,255,255);
if (hasCollided(bullet, wall)){
  bullet.velocityX = 0;
  damage = 0.5 * bulletWeight * bulletSpeed * bulletSpeed/(wallThickness * wallThickness * wallThickness);
if(damage > 10){
  bullet.shapecolor = rgb(255, 0, 0);
}
if(damage<10){
  bullet.shapecolor = rgb(0, 255, 0);
}
}
  drawSprites();
}

function hasCollided(lbullet, lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
if (bulletRightEdge>=wallLeftEdge) {
  return true
} else {
  return false
}
}