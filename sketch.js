var mic;
let heartbeat = [];


function setup() {


  createCanvas(807, 807);
  heartbeat = new Ball(10);

  for (let beep = -3; beep < 8; beep++) {
    heartbeat[beep] = new Ball(beep * 100);

    //Starts at zero, distributes to 11 heartbeat evenly with about 100px apart
  }

  mic = new p5.AudioIn();
  mic.start();

  frameRate(10);

}

function draw() {
  //Animation

  console.log("mic level " + mic.getLevel());

  let bgYellow = color(164, 213, 53);
  let bgYellow2 = color(255, 168, 53);
  let bgGreen = color(188, 255, 154);
  let bgGreen2 = color(91, 255, 80);
  let bgPink = color(255, 185, 244);

  clear();


  bgColor(bgYellow, bgYellow2, bgGreen, bgGreen2);

}

function bunny(yellow, white) {
  scaling();
  drawHead();
  drawBody();
  hair();
  face_parts();
  ears();
  eyes(yellow, white);

}

function bgColor(color1, color2, color3, color4) {

  background(color(204, 255, 255));

  resetMatrix();

  if (mouseX > width * .46 & mouseX < width * .54 & mouseY > height * .53 & mouseY < height * .58) {
    //heart'

    for (let beep = -3; beep < 8; beep++) {

      heartbeat[beep].display();
      heartbeat[beep].move();

    }

    fill(255, 174, 210);
    noStroke();
    triangle(width * .5, height * .95, width * 0.1, height * .51, width * 0.9, height * .51);
    arc(width * .32, height * .52, 400, 600, PI, 0);
    arc(width * .68, height * .52, 400, 600, PI, 0);

    stroke(color(246, 74, 170));
    strokeWeight(48);
    line(width * .5, height * .95, width * 0.095, height * .496);
    line(width * .5, height * .95, width * 0.905, height * .496);

    strokeWeight(50);
    arc(width * .305, height * .45, 340, 500, PI - (PI / 16), PI + (PI / 16) * 13);
    arc(width * .695, height * .45, 340, 500, PI + (PI / 16) * 3, 0 + (PI / 16));


  } else {
    noStroke()

    fill(color4);
    rect(width * .85, 0, width * .2, height);

    fill(color3);
    rect(0, height * 0.9, width, height * 0.1);

    fill(color2);
    rect(0, 0, width * 0.85, height * 0.1);

    fill(color1);
    rect(0, height * 0.1, width * .15, height);


    //circle
    stroke(245, 239, 94);
    strokeWeight(50);

    fill(255, 255, 240);
    ellipse(width * .5, height * .5, width * .85, height * .85);
  }

  let yellow = color(255, 234, 125);
  let white = color(255);

  bunny(yellow, white);
}

function drawHead() {
  stroke(0);
  strokeWeight(8);
  noFill();
  beginShape();

  vertex(width * .25, height * .6);
  vertex(width * .27, height * .65);
  vertex(width * .42, height * .75);
  vertex(width * .58, height * .75);
  vertex(width * .73, height * .65);
  vertex(width * .75, height * .6);
  endShape();

}

function drawBody() {
  if (mouseX > width * .46 & mouseX < width * .54 & mouseY > height * .53 & mouseY < height * .58) {
    noFill();
    arc(width * .35, height * .76, 30, 90, PI + HALF_PI, PI / 2);
    arc(width * .65, height * .76, 30, 90, PI / 2, PI + HALF_PI);

    line(width * .35, height * .816, width * .27, height * .86)
    line(width * .65, height * .816, width * .74, height * .865)
  } else {
    noFill();
    arc(width * .35, height * .76, 30, 90, PI + HALF_PI, PI / 2);
    arc(width * .65, height * .76, 30, 90, PI / 2, PI + HALF_PI);

    beginShape();
    vertex(width * .35, height * .816);
    vertex(width * .2, height * .9);
    vertex(width * .14, height);
    endShape();

    beginShape();
    vertex(width * .65, height * .816);
    vertex(width * .8, height * .9);
    vertex(width * .86, height);
    endShape();
  }

}

function eyes(color, color2) {


  // eye brow
  noFill();
  arc(width * .34, height * .35, 200, 200, PI, PI + (PI / 6) * 4);
  arc(width * .65, height * .35, 200, 200, PI + (PI / 3), TWO_PI);

  // eye shape

  if (mouseX > width * .46 & mouseX < width * .54 & mouseY > height * .53 & mouseY < height * .58) {
    //console.log(">w<");

    //left
    line(width * 0.3, height * .5, width * 0.43, height * .48);
    line(width * 0.3, height * .44, width * 0.43, height * .48);

    //right
    line(width * .57, height * .48, width * 0.7, height * .5);
    line(width * .57, height * .48, width * 0.7, height * .44);
  } else if (mic.getLevel() > 0.0009) {
    // Open


    noFill();
    fill(color);

    // eye balls
    ellipse(width * .39, height * .445, 55, 122);
    ellipse(width * .61, height * .445, 55, 122);

    //console.log("Open");

    noFill();
    arc(width * .35, height * .45, 150, 150, PI / 2 + PI / 4, PI + (PI / 4) * 3);
    arc(width * .65, height * .45, 150, 150, PI + (PI / 4), PI / 4);
    highlights(color2);
  } else {
    // Close
    //console.log("Close");
    line(width * 0.3, height * .5, width * 0.42, height * .5);
    line(width * .58, height * .5, width * 0.7, height * .5);
  }

}

function hair() {
  bezier(width * .64, height * .08, width * .65, height * .08, width * .66, height * .08, width * .69, height * .09);

  bezier(width * .64, height * .08, width * .55, height * .04, width * .5, height * .085, width * .45, height * .03);

  bezier(width * .45, height * .03, width * .45, height * .04, width * .45, height * .05, width * .46, height * .06);

  bezier(width * .46, height * .06, width * .34, height * .06, width * .27, height * .089, width * .25, height * .24)

  bezier(width * .25, height * .24, width * .28, height * .2, width * .32, height * .19, width * .345, height * .18);

  bezier(width * .35, height * .17, width * .3, height * .25, width * .35, height * .32, width * .38, height * .33);

  bezier(width * .38, height * .33, width * .385, height * .29, width * .41, height * .27, width * .43, height * .26);

  bezier(width * .44, height * .23, width * .40, height * .32, width * .46, height * .37, width * .48, height * .4);

  bezier(width * .48, height * .4, width * .51, height * .29, width * .63, height * .31, width * .66, height * .17);

  bezier(width * .66, height * .17, width * .665, height * .18, width * .67, height * .20, width * .67, height * .21);

  bezier(width * .67, height * .21, width * .69, height * .18, width * .69, height * .115, width * .675, height * .1);
}

function face_parts() {

  //nose
  fill(color(0));
  triangle(width * .47, height * .54, width * .53, height * .54, width * .5, height * .57);

  //tongue
  fill(252, 217, 255);
  translate(-100, 160);
  rotate(-0.25);
  arc(width * .571, height * .625, 55, 100, TWO_PI, PI - PI / 32);
  noFill();
  rotate(0.25);
  translate(100, -160);

  //mouth
  arc(width * .44, height * .65, 95, 40, 0, PI + PI / 32);
  arc(width * .558, height * .65, 95, 40, TWO_PI - PI / 32, PI);

  //left whiskers
  line(width * .3, height * .56, width * .35, height * .58);
  line(width * .28, height * .6, width * .34, height * .6);
  line(width * .3, height * .64, width * .35, height * .62);

  //right whiskers
  line(width * .7, height * .56, width * .65, height * .58);
  line(width * .72, height * .6, width * .64, height * .6);
  line(width * .7, height * .64, width * .65, height * .62);

}

function ears() {


  resetMatrix();
  scaling()
  bezier(width * .045, height * .205, width * .06, height * .01, width * .29, height * .01, width * .311, height * .1);

  bezier(width * .9565, height * .205, width * .93, height * .01, width * .71, height * .01, width * .68, height * .11);

  rotate(0.05);
  arc(width * .175, height * .32, 200, 800, TWO_PI - PI / 4, PI + PI / 4);

  resetMatrix();
  scaling()

  rotate(-0.05);
  arc(width * .825, height * .37, 200, 800, TWO_PI - PI / 4, PI + PI / 4);

  resetMatrix();
  scaling()
}

function highlights(color) {
  // Always last
  // eyes
  noStroke();
  fill(color);
  ellipse(width * .35, height * .42, 40, 40);
  ellipse(width * .57, height * .43, 40, 40);
}

function scaling() {
  //Adjust scaling of bunny

  scale(0.6);
  translate(width * 0.33, height * 0.38);
}
