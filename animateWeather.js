
let data = JSON.parse(localStorage.getItem("storedForecast"));

function animateWeather() {
  canvas = document.querySelector('#weather-canvas');
  var ctx = canvas.getContext('2d');
  canvas.width  = 680;
  canvas.height = 280;

  class Sun {
    constructor(x, y, size){
      this.position = {x: x, y: y};
      this.sunColor = "yellow";
      this.size = size;
      this.rotation = 0;
    }

    drawBody() {
      ctx.save();
      ctx.translate(this.position.x, this.position.y);
      ctx.rotate(this.rotation * Math.PI / 180);
      ctx.beginPath();
      ctx.arc(0, 0, this.size, 0, Math.PI * 2);
      ctx.fillStyle = "gold";
      ctx.fill();
      ctx.restore();
    }

    drawRays(angle) {
      ctx.save();
      ctx.translate(this.position.x, this.position.y);
      ctx.rotate(this.rotation * Math.PI / 180);
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.moveTo(0, -40);
      ctx.lineTo(65, 0);
      ctx.lineTo(0, 40);
      ctx.fillStyle = this.sunColor;
      ctx.fill();
      ctx.restore();
    }

    update() {
      this.rotation += 0.1;
    }

    animate() {
      for (var i= 0; i< 13; i++){
        this.drawRays(i * 4);
      }
      this.drawBody();
      this.update();
    }
  }

  let sun = new Sun(70, 70, 40);
  function animateSun() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    sun.animate();
  }

  class Gust {
    constructor(x, y, size, color, speed){
      this.position= {x: x, y: y};
      this.offset= {x: 0, y: 200}
      this.velocity= {x: 0, y: 0};
      this.size = size;
      this.acceleration= {x: Math.random()*1, y: 0};
      this.cloudColor = color;
      this.moveSpeed = {x: speed, y:0}
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.position.x + 100, this.position.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.cloudColor;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(this.position.x, this.position.y - 20, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.cloudColor;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(this.position.x + 70, this.position.y + 20, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.cloudColor;
      ctx.fill();
    }

    move() {
      this.position.x += this.moveSpeed.x;
      let y = 20*Math.sin(this.position.x/100);
      this.position.y = y + 100;
    }

    respawn() {
      if (this.position.x > canvas.width){
        this.position.x = 0;
      }
    }

    animate() {
      this.draw();
      this.move();
      this.respawn();
    }
  }

  let windspeed = data.wind_speed / 10;
  let gustCenter = {x: 0, y: 0}
  let gusts = [];
  for (var i= 0; i<100; i++){
    let gust = new Gust(i*3, 100, 1, "#FFF", windspeed*3);
    gusts.push(gust);
  }
  function animateGusts() {
    ctx.clearRect(0, 0, 1200, 400);
    ctx.fillStyle = "#7371FC";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    gusts.forEach((gust) => {
      gust.animate();
    });
  }

  class Cloud {
    constructor(x, y, size, color, speed){
      this.position= {x: x, y: y};
      this.velocity= {x: 0, y: 0};
      this.size = size;
      this.acceleration= {x: Math.random()*1, y: 0};
      this.limitPosition= {x: 200, y: 200};
      this.cloudColor = color;
      this.moveSpeed = {x: speed, y:0}

    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.cloudColor;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(this.position.x + this.size+15, this.position.y + this.size, this.size + 15, Math.PI, Math.PI * 2);
      ctx.fillStyle = this.cloudColor;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(this.position.x + this.size*2 + 30, this.position.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.cloudColor;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(this.position.x + this.size, this.position.y - this.size + 10, this.size + 5, 0, Math.PI * 2);
      ctx.fillStyle = this.cloudColor;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(this.position.x + this.size*2 + 5, this.position.y - this.size, this.size - 10, 0, Math.PI * 2);
      ctx.fillStyle = this.cloudColor;
      ctx.fill();
    }

    move() {
      this.position.x += this.moveSpeed.x;
    }

    update() {
    }

    respawn() {
      if (this.position.x > canvas.width + this.size){
        this.position.x = 0 - 200;
      }
    }

    animate() {
      this.move();
      this.draw();
      this.update();
      this.respawn();
    }
  }

  let center = {x: -100, y: 200}
  let clouds = [];
  for (var i= 0; i< 8; i++) {
    let color = Math.random()*100;
    let cloud1 = new Cloud(center.x - 50*i, center.y - Math.random()*200, 25, `rgb(${color + 130}, ${color + 130}, ${color + 130})`, Math.random() * 0.5 + windspeed);
    clouds.push(cloud1);
  }

  function animateClouds(numClouds) {
    ctx.clearRect(0, 0, 1200, 400);
    ctx.fillStyle = "#7371FC";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    sun.animate();

    gusts.forEach((gust) => {
      gust.animate();
    });

    for (var i= 0; i<numClouds; i++) {
      clouds[i].animate();
    }
  }

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
    let flake = new Flake(Math.random()*canvas.width - 100, Math.random()*-200, 5);
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
      this.maxSpeed= {x: 1, y: this.bodySize * 2};
      this.limitPosition= {x: 200, y: 400};
    }

    draw() {
      ctx.beginPath();
      ctx.stroke();
      ctx.font=`${this.bodySize * 3}px FontAwesome`;
      ctx.fillText("'", this.position.x, this.position.y);
      ctx.fillStyle = "blue";
    }

    fall() {
      this.acceleration.y = 0.2;
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
        this.position.x = Math.random() * 1200 ;
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
    let drop = new Raindrop(Math.random()*1000, Math.random()*-1000, 5);
    drops.push(drop);
  }

  function animateRain() {
    ctx.clearRect(0, 0, 1200, 400);
    ctx.fillStyle = "#7371FC";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drops.forEach((drop) => {
      drop.animate();
    });
    for (var i= 0; i<3; i++) {
      clouds[i].animate();
    }
  }




  let weather = data.today_summary.toLowerCase();
  console.log(weather);

  if ( weather.includes("snow") ){
    setInterval(function (){
      animateSnow();
    }, 1000/30);
  } else if ( weather.includes("windy") ){
    setInterval(function (){
      // animateGusts();
    }, 1000/30);
  } else if ( weather.includes("rain") || weather.includes("drizzle") ){
    setInterval(function (){
      animateRain();
    }, 1000/30);
  } else if ( weather.includes("mostly cloudy") ){
    setInterval(function (){
      animateClouds(20);
    }, 1000/30);
  }  else if ( weather.includes("partly cloudy") || weather.includes("foggy") ){
    console.log("fog or clouds");
    setInterval(function (){
      animateClouds(3);
    }, 1000/30);
  } else if ( weather.includes("clear") ){
    setInterval(function (){
      animateSun();
    }, 1000/30);
  }
}
animateWeather();
