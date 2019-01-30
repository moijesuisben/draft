var shade = 120;

function setup() {
 createCanvas(window.innerWidth, window.innerHeight);
 background(0, 59, 122);
}

function draw() {
  colorMode(HSB)

  if(mouseIsPressed) {
    fill(187, 100, 66)
    strokeWeight(0.5)
    stroke(shade, 100, 100)
    ellipse(mouseX, mouseY, 30);
  }

  shade += 60;

  if (shade > 500) {
    shade = 0
  }

  print(shade)
}
