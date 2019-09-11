function squirm() {
  var vx = [];
  var vy = [];
  var px = [];
  var py = [];
  var w = window.innerWidth;
  var h = window.innerHeight;
  var id = setInterval(frame, 20);
  var counter = 0;
  var worms = document.getElementsByClassName("mover");

  console.log(worms[0]);
  for (i=0; i < worms.length; i++){
    vx[i] = (Math.random() - .5) * .25;
    vy[i] = (Math.random() - .5) * .25;
    py[i] = i * 200;
    px[i] = (3 - i) * 200;
  }

  function frame() {
    w = window.innerWidth;
    h = window.innerHeight;
    counter++;

    for (t = 0; t < worms.length; t++){
      if (counter % 10 < 1) {
        vx[t] += ((Math.random() - .5) * .25);
        vy[t] += ((Math.random() - .5) * .25);
      }

        if (py[t] > (h - 50)){
          vy[t] *= -1;
          py[t] = h - 50;
        } else if (py[t] < 50){
          vy[t]*= -1;
          py[t] = 50;
        } else {py[t] += vy[t]}

        if (px[t] > (w - 50)){
          vx[t] *= -1;
          px[t] = w - 50;}
        else if (px[t] < 50){
          vx[t]*= -1;
          px[t] = 50;
        } else {px[t] += vx[t]}
        
      worms[t].style.top = py[t] + 'px';
      worms[t].style.left = px[t] + 'px';
    }
    if (counter % 10 < 1) {counter = 1}}}