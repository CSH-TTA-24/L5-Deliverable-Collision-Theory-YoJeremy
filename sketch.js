let myXPos = 100;
let myYPos = 100;
let mySize;
let score = 0;
let enemyXPos = 300;
let enemyYPos = 300;
let enemySize;

function setup() {
  createCanvas(500, 500);
  noStroke();

  mySize =50
  enemySize =50
}

function draw() {
  background(0);

  fill(255, 0, 0);
  ellipse(enemyXPos, enemyYPos, enemySize, enemySize);

  fill(0, 0, 255);
  ellipse(myXPos, myYPos, mySize, mySize);

  if (keyIsDown(LEFT_ARROW)) {
    myXPos -= 3;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    myXPos += 3;
  }

  if (keyIsDown(UP_ARROW)) {
    myYPos -= 3;
  }

  if (keyIsDown(DOWN_ARROW)) {
    myYPos += 3;
  }

  let distance = dist(myXPos, myYPos, enemyXPos, enemyYPos);
  text("Score:" + score, 25, 25)
  if (distance <= (mySize / 2) + (enemySize / 2)) {
    enemyXPos = random(25,475);
    enemyYPos = random(25,475);
    score += 1
    
  }
}