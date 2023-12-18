let x = 0;
let y = 0;
let facing = undefined
let facings = ['North', 'East', 'Sud', 'West']

const form = document.getElementById("input__form-place");
document.getElementById("input__move").addEventListener("click", move);
document.getElementById("input__place").addEventListener("click", place);
document.getElementById("input__left").addEventListener("click", left);
document.getElementById("input__right").addEventListener("click", right);
document.getElementById("input__report").addEventListener("click", report);

function place() {
  x= +(form.elements['place__x'].value);
  y= +(form.elements['place__y'].value);
  facing= form.elements['place__facing'].value;

  console.log(`(${x}, ${y}, ${facing})`);
}

function move() {
  if(facing===undefined){
    error();
    return;
  }

  switch(facing) {
    case 'North':

      if(x>=4){
        error();
        break;
      };

      x++;
      break;
    case 'Sud':

      if(x<=0){
        error();
        break;
      };

      x--
    break;
    case 'East':

      if(y>=4){
        error();
        break;
      };

      y++;
      break;
    case 'West':

      if(y<=0){
        error();
        break;
      };

      y--
      break;
  }


  console.log(`(${x}, ${y}, ${facing})`);
}

function left() {
  if(facing===undefined){
    error();
    return;
  }

  let f = facings.indexOf(facing);
  console.log(f);

  f = f<0 ? 3 : f-1;
  facing = facings[f];

  console.log(`(${x}, ${y}, ${facing})`);
}

function right() {
  if(facing===undefined){
    error();
    return;
  }

  let f = facings.indexOf(facing);
  f = f>3 ? 0 : f+1;
  facing = facings[f];

  console.log(`(${x}, ${y}, ${facing})`);
}

function report() {
  if(facing===undefined){
    error();
    return;
  }

  document.getElementById("report").innerHTML = `(${x}, ${y}, ${facing})`;
}

function error() {
  alert('command forbitten');
}