
let sunY =350;
let sunSize;
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
sunSize = map(drum, 0, 100,50, 400)

  fill(255, 255, 0); // yellow

  ellipse(300,sunY,sunSize)
sunY = sunY +1

if(sunY > 1000){
sunY = 0

}
console.log(sunY)
}