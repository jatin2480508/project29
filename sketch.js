//level two
block8   = new Block(330,225.30,40);
block9   = new Block(360,235.30,40);
block10  = new Block(390,235.30,40);
block11  = new Block(420,235.30,40);
block12  = new Block(450,235.30,40);
//level three
block13  = new Block(360,195.30,40);
block14  = new Block(390,195.30,40);
block15  = new Block(420,195.30,40);
//top
block16  = new Block(390,155.30,40);


const grnd = Object.create("Ground.js");






ImageMode(CENTRE)
image(polygon_img ,polygon.position.x,polygon.position.y,40,40);


let value = 0;
function draw() {
  fill("Brown");
  rect(25, 25, 50, 50);
}
function mousePressed() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}
