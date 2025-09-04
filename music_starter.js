
let sunY =200;
let sunSize;
let bgCol
let BGrey = [136,136,128];
let Grey = [168,160,144];
let lerpAMT = (1)
let firstRun = true;
let scene;
let ZWave = [];

//const myElement = document.getElementById('ellipse');


// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {

  if(firstRun){
   scene = loadImage('ZWave/ZWave.1.png')

  ZWave.push(loadImage('ZWave/ZWave.1.png'))
   ZWave.push(loadImage('ZWave/ZWave.2.png'))
    ZWave.push(loadImage('ZWave/ZWave.3.png'))
     ZWave.push(loadImage('ZWave/ZWave.4.png'))
   firstRun = false;
    
  }
 

lerpAMT = map(other, 0, 100, 1,0)
let changingColor = lerpColor (color(BGrey), color(Grey), lerpAMT,)//Circle colours

  background(108, 123, bgCol)//Background colour
 
sunSize = map(drum, 0, 400,40, 200)

bgCol = map(bass,0, 100,100, 255)//Background colour
 
  fill(changingColor); // changes from Green to Black
  
rect(0, 500, 2000, 400)//Road
fill (136,136,128)
rect(0, 20, 100, 800)
//ZWave = map (bass)
//let slowbass = ZWave (bass / 60)
let whichZomFrame= int( map(bass, 0,100,0,4));

console.log(whichZomFrame)
image(ZWave[whichZomFrame], 0,0); //ZWave animation



fill(96, 32, 8, 100)
noStroke();


ellipse(1000, 400, sunSize)
ellipse(100, 100, sunSize)
ellipse(100, 560, sunSize)
ellipse(600, 660, sunSize)
ellipse(900, 600, sunSize)
ellipse(800, 200, sunSize)
ellipse(1100, 100, sunSize)
ellipse(1200, 700, sunSize)

for(var i=1; i < 5; i++){
  var circlestep = i*300;
  ellipse(circlestep,sunY,sunSize)
sunY = sunY +1
if(sunY > 1000){
sunY = 0

}
//console.log(sunY)
}
}
  