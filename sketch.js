var a = 15;
var b = 100;
var angulo = 2;
function setup() {
  createCanvas(500, 500);
  background(161,249,237)
}
function draw() {
rotate(angulo);
translate(a+1,3, angulo+=1)
stroke(color(174,161,149))
line(15,10, b+=25,60)


}