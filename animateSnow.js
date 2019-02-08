console.log("Hello?");

canvas = document.querySelector('#weather-canvas');
var ctx = canvas.getContext('2d');
canvas.width  = 800;
canvas.height = 280;


class Flake {
  constructor(x, y, size){
    this.position= {x: x, y: y};
    this.velocity= {x: 0, y: 0};
    this.acceleration= {x: Math.random()/10, y: 0};

    this.bodySize= Math.random()*size + size;
    this.maxSpeed= {x: 1, y: this.bodySize / 2 - 0.5};
    this.limitPosition= {x: 200, y: 400};
  }

  draw() {

    ctx.beginPath();
    // ctx.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.font=`${this.bodySize * 2}px FontAwesome`;
    ctx.fillText('*', this.position.x, this.position.y);
    ctx.fillStyle = "#FFF";
  }

  fall() {
    this.acceleration.y = 0.1;
  }

  update() {
    if (this.velocity.x < this.maxSpeed.x) {
      this.velocity.x += this.acceleration.x;
    }
    this.position.x += this.velocity.x;

    if (this.velocity.y < this.maxSpeed.y) {
      this.velocity.y += this.acceleration.y;
    }
    this.position.y += this.velocity.y;
  }

  respawn() {
    if (this.position.y > this.limitPosition.y){
      this.position.y = Math.random() * -100;
      this.position.x = Math.random() * canvas.width - 200;
      this.acceleration.x = Math.random() / 5;
    }
  }

  animate() {
    this.fall();
    this.draw();
    this.update();
    this.respawn();
  }
}

let numFlakes = 50;

let flakes = [];
for (var i= 0; i<numFlakes; i++){
  let flake = new Flake(Math.random()*600 - 100, Math.random()*-200, 5);
  flakes.push(flake);
}

function animateSnow() {
  ctx.clearRect(0, 0, 1200, 400);
  ctx.fillStyle = "#7371FC";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  flakes.forEach((flake) => {
    flake.animate();
  });
}


class Raindrop {
  constructor(x, y, size){
    this.position= {x: x, y: y};
    this.velocity= {x: 0, y: 0};
    this.acceleration= {x: 0, y: 0};

    this.bodySize= Math.random()*size + size;
    this.maxSpeed= {x: 1, y: this.bodySize};
    this.limitPosition= {x: 200, y: 400};
  }

  draw() {

    ctx.beginPath();
    // ctx.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.font=`${this.bodySize * 3}px FontAwesome`;
    ctx.fillText("'", this.position.x, this.position.y);
    ctx.fillStyle = "blue";
  }

  fall() {
    this.acceleration.y = 0.1;
  }

  update() {
    if (this.velocity.x < this.maxSpeed.x) {
      this.velocity.x += this.acceleration.x;
    }
    this.position.x += this.velocity.x;

    if (this.velocity.y < this.maxSpeed.y) {
      this.velocity.y += this.acceleration.y;
    }
    this.position.y += this.velocity.y;
  }

  respawn() {
    if (this.position.y > this.limitPosition.y){
      this.position.y = 0;
      this.position.x = Math.random() * canvas.width ;
    }
  }

  animate() {
    this.fall();
    this.draw();
    this.update();
    this.respawn();
  }
}

let numDrops = 100;

let drops = [];
for (var i= 0; i<numDrops; i++){
  let drop = new Raindrop(Math.random()*800, Math.random()*-1000, 5);
  drops.push(drop);
}

function animateRain() {
  ctx.clearRect(0, 0, 1200, 400);
  ctx.fillStyle = "#7371FC";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  drops.forEach((drop) => {
    drop.animate();
  });
}
console.log(data.summary);
let weather = "Rain";

if ( weather.includes("Snow") ){
  setInterval(function (){
    animateSnow();
  }, 1000/30);
} else if ( weather.includes("Rain") ){
  setInterval(function (){
    animateRain();
  }, 1000/30);
}
