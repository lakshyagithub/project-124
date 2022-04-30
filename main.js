console.log('ml5 version loaded', ml5.version)
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);
    
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
  }
  function modelLoaded() {
      console.log('Model Loaded!');
  }
  function save_image() {
      save('image.png');
  }
  function draw() {
    background(220);
  }