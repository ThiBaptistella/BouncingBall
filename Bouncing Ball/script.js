// Author: Thiago Baptistella
// Date: 30/11/2017
// Version: 1.0.0
// Obs: Bouncing Ball test, attached (HTML+CSS+JS).

//get canvas tag to be used in here
var canvas = document.querySelector('canvas');
//resize canvas tag to be full width and height
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//create var BALL
var ball = canvas.getContext('2d');

var radios = 30; // radios size ball
var gravity = 1.7; // gravity speed
var friction = .2; // power press
var positionX = 50; //start position X
var positionY = 50; //start position Y
var dx = 3; // speed in X
var dy = 3; // speed in Y


//eveything happening on bounce function
function bounce() {
  requestAnimationFrame(bounce); // method looping through bounce function
  ball.clearRect(0, 0, innerWidth, innerHeight); // clear ball once in on moviment

  ball.beginPath(); // start move
  ball.arc(positionX, positionY, radios, 0, Math.PI * 2, true); //create ball
  ball.lineTo(positionX - 30, positionY - 10);
  ball.fillStyle = 'orange';
  ball.fill(); // fill the color
  ball.strokeStyle = 'black';
  ball.stroke();
  ball.closePath();



  positionX += dx; // increment i frame to the ball in X velocity
  positionY += dy; // increment i frame to the ball in y velocity

    //ball bounce rigth/lefth
    if (positionX + radios > innerWidth || positionX - radios < 0){
      dx = -dx;
      }
    //ball bounce top/bottom
    if (positionY + radios > innerHeight || positionY - radios < 0) {
      dy = -dy;
    }
    // prevent the ball do not get stuck on the canvas(sides).
    this.positionX = Math.min(Math.max(this.positionX, 0 + this.radios), canvas.width - this.radios);
    this.positionY = Math.min(Math.max(this.positionY, 0 + this.radios), canvas.height - this.radios);

    dy += gravity; // add curve bounce on the Ball
    dy += friction; // add power to the ball


};
// run the function
bounce();

// move the ball once is clicked
function move(){
  dy = Math.floor((Math.random()*50)-10);
  dx = Math.floor((Math.random()*50)-10);
}
