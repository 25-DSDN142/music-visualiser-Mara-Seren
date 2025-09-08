
let sunY =200;
let sunSize;
let bgCol
let BGrey = [136,136,128];
let Grey = [168,160,144];
let lerpAMT = (1)
let firstRun = true;
let scene;
let ZWave = [];
let myImage;
let myImage2;
let scene2;
let WondaZ = [];
let dustY =400;
let dustSize;
//const myElement = document.getElementById('ellipse');


// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {


  
  if(firstRun){
   scene = loadImage('ZWave/ZWave.1.png')
   scene2 = loadImage('WondaZ/WondaZ1.png')

  ZWave.push(loadImage('ZWave/ZWave.1.png'))
   ZWave.push(loadImage('ZWave/ZWave.2.png'))
    ZWave.push(loadImage('ZWave/ZWave.3.png'))
     ZWave.push(loadImage('ZWave/ZWave.4.png'))

     myImage = loadImage('Behind.png')
     myImage2 = loadImage('Infront.png')

  WondaZ.push(loadImage('WondaZ/WondaZ1.png')) 
   WondaZ.push(loadImage('WondaZ/WondaZ2.png'))  

   firstRun = false;
    
  }
 

lerpAMT = map(other, 0, 100, 1,0)
let changingColor = lerpColor (color(BGrey), color(Grey), lerpAMT,)//Circle colours

  background(108, 46, bgCol)//Background colour
 
sunSize = map(drum, 0, 400,20, 200)

dustSize = map(bass,0, 40, 200, 400)

bgCol = map(bass,0, 100,100, 255)//Background colour

fill(107, 61, 52)
rect(0, dustSize, 4000,)

  fill(changingColor); 
  
image(myImage,0,0)

let slowcounter =counter / 80
let whichZomFrame= int(slowcounter %2);

console.log(whichZomFrame)
image(ZWave[whichZomFrame], 0,0); //ZWave animation

let whichWonFrame2= int( map(vocal, 0, 100, 0, 2));

console.log(whichWonFrame2)
image(WondaZ[whichWonFrame2], 0,0); //wonda zombie animation

image(myImage2,0,0)


fill(168,160,144, 60)
noStroke();


ellipse(1000, 400, sunSize)
ellipse(100, 100, sunSize)
ellipse(100, 560, sunSize)
ellipse(600, 660, sunSize)
ellipse(900, 600, sunSize)
ellipse(800, 200, sunSize)
ellipse(1100, 100, sunSize)
ellipse(1200, 700, sunSize)
ellipse(300, 200, sunSize)
ellipse(400, 700, sunSize)
ellipse(800, 1000, sunSize)
ellipse(600, 600, sunSize)
ellipse(200, 50, sunSize)
ellipse(300, 60, sunSize)
ellipse(200, 700, sunSize)
ellipse(400, 80, sunSize)
ellipse(500, 200, sunSize)
ellipse(600, 100, sunSize)
ellipse(600, 400, sunSize)


for(var i=1; i < 5; i++){
  var circlestep = i*300;
  ellipse(circlestep,sunY,sunSize)
sunY = sunY +1
if(sunY > 1000){
sunY = 0

}
}
  var wallstep = i*300;
  rect(wallstep,dustY,dustSize)
dustY = dustY +1


}
  