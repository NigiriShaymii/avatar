class Ball {
  constructor(_line) {
    this.line = _line;
    this.r = 255;
    this.g = 200;
    this.b = 255;

    this.xPos1 = 0;
    this.yPos1 = 200;
    this.xPos2 = 0;
    this.yPos2 = 200;

    this.counter = 0;

    this.rad = width / 2;
    this.w = width;
    this.h = height;
  }

  display() {

    //line(this.xPos1, this.yPos1, this.xPos2 + 5, this.yPos2);
    stroke(this.r, this.g, this.b);

    //line(0, this.line, width, this.line); 
  }
  //       let bgYellow = color(164, 213, 53);
  //       let bgGreen = color(188, 255, 154);
  //       let mix = random(width);

  //       fill(bgYellow);
  //       circle(width * this.x , height * this.y, 100);

  //       fill(bgGreen);
  //       circle(width * (this.x * 2), height * (this.y * 2), 200);


  move() {

    frameRate(500);
    strokeWeight(15);

    this.counter += 5;

    stroke(this.r, random(this.g), random(100, this.b));

    if (this.counter < 100) {
      line(this.xPos1, this.line, this.xPos2 + 20, this.line);
      this.xPos1 += 5;
      this.xPos2 += 5;

      if (this.xPos1 == width) {
        this.xPos1 = 0;
        this.xPos2 = 0;
      }

    }

    if (this.counter >= 100 && this.counter < 200) {
      //line(xPos1, yPos1, point2 + 5, yPos1);

      line(this.xPos1 + 5, this.line + this.yPos1, this.xPos2 + 12, this.line + this.yPos2 - 10);

      this.xPos1 += 5;
      this.xPos2 += 5;

      this.yPos1 -= 5;
      this.yPos2 -= 5;

      //console.log(line);

    }

    if (this.counter >= 200 && this.counter < 250) {
      line(this.xPos1 + 10, this.line + this.yPos1 - 5, this.xPos2 + 18, this.line + this.yPos1 + 10);
      this.xPos1 += 12;
      this.xPos2 += 12;

      this.yPos1 += 15;
      this.yPos2 += 15;
    }

    if (this.counter >= 250 && this.counter < 300) {
      //line(xPos1, yPos1, point2 + 5, yPos1);

      line(this.xPos1 + 13, this.line + this.yPos1 + 5, this.xPos2 + 20, this.line + this.yPos2 - 3);

      this.xPos1 += 5;
      this.xPos2 += 5;

      this.yPos1 -= 5;
      this.yPos2 -= 5;


    }

    if (this.counter >= 300) {
      line(this.xPos1, this.line, this.xPos2 + 10, this.line);
      //     this.xPos1+= 5;
      //     this.xPos2+= 5;

      this.counter = 0;
    }

    if (this.xPos1 >= width) {
      this.xPos1 = 0;
      this.xPos2 = 0;

      this.yPos1 = 200;
      this.yPos2 = 200;
      this.counter = 0;
    }

    strokeWeight(8);
    fill(255, 227, 249, 25);
    stroke(255, 186, 249);
    ellipse(width / 2, height / 2, sin(frameCount * .03) * 790);
  }


  //       for (let i = 0; i < height; i+=100) {

  //       line(0, yPos+i , width , yPos+i); 
  //              yPos++;
  //         if( yPos == height)
  //           { yPos = 0;}
  //       }
}