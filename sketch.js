function setup() {
    createCanvas(600, 600);
    background("black");
  }
  
  function draw() {
    stroke("#E8B0F1");
    fill("purple");
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }