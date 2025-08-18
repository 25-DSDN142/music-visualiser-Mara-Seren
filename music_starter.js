
let sunY =200;
let sunSize;
let bgCol
let Green = [108, 148, 87];
let Black = [0, 0, 0];
let lerpAMT = (1)
let firstRun = true;
let myImage;
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {

  if(firstRun){
    myImage = loadImage('Zombie for DSDN 142 Code.png')
    firstRun = false;
  }
  image(myImage, 0,0);

  lerpAMT = map(other, 0, 100, 1,0)
  let changingColor = lerpColor (color(Green), color(Black), lerpAMT)
  background(108, 123, bgCol)
sunSize = map(drum, 0, 300,50, 300)
bgCol = map(bass,0, 100,100, 255)

  fill(changingColor); // changes from Green to Black
 
for(var i=1; i < 6; i++){
  var circlestep = i*240;
  ellipse(circlestep,sunY,sunSize)
sunY = sunY +1

if(sunY > 1000){
sunY = 0

}
console.log(sunY)
}
}
  