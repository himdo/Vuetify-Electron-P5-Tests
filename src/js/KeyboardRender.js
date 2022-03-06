let p5;

export function main(_p5) {
  p5 = _p5

  p5.setup = _ => {
    var canvas = p5.createCanvas(150, 150)
    canvas.parent("p5Canvas");

  	p5.background(220);

  }

  p5.draw = _ => {
  	p5.push();
  	// p5.translate(p5.width / 2, p5.height / 2);
    let c = p5.color(192,192,192);
    p5.fill(c)
    p5.rect(15,15,(20+3)*5+10,(20+3)*5+10)


    c = p5.color(150,150,150);
    p5.fill(c)
    p5.rect(15+10,5,((20+3)*5+10)/3,10)
    p5.rect((((20+3)*5+10)/3) * 2.375-10,5,(((20+3)*5+10)/3),10)
    p5.textSize(12)
    for (let y = 0; y < 5; y++) {
      for (let x = 0; x < 5; x++) {
        c = p5.color(255, 204, 0);
        p5.fill(c)
        if (x == 3 && y ==4) {
          p5.rect(20+(20+3)*x, 20+(20+3)*y, 40+3, 20);
          p5.fill(0, 102, 153);
          p5.text(x+1+5*y, 25+(20+3)*x, 35+(20+3)*y);
          break
        }
        p5.rect(20+(20+3)*x, 20+(20+3)*y, 20, 20);
        p5.fill(0, 102, 153);
        p5.text(x+1+5*y, 25+(20+3)*x, 35+(20+3)*y);


      }
    }
  	p5.pop();

  }
}
