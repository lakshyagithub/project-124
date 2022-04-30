console.log('ml5 version loaded', ml5.version)
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);
    
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
  }
  
  function draw() {
    background(220);
  }