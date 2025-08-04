
let sunY =350;
let sunSize;
let bgCol
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(108, 123, bgCol)
sunSize = map(drum, 0, 100,50, 400)
bgCol = map(bass,0, 100,100, 255)

  fill(206, 88, 0); // orange
  
  ellipse(300,sunY,sunSize)
sunY = sunY +1

if(sunY > 1000){
sunY = 0

}
console.log(sunY)
}