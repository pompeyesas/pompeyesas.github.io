function setup() {
    createCanvas(300, 300);
    angleMode(DEGREES);
  }

const txt1 = document.getElementById('FunN')
const btn1 = document.getElementById('btn1')
const out1 = document.getElementById('output1')


  
function rerun(){
    for (i = 0;i < txt1.value; i++)
{
    bands();
}
document.getElementById("btn1").onclick = null;
    out1.innerHTML = "txt1.value" + "Bands popped this week!" ;
}

btn1.addEventListener('click',rerun)


  function bands(){
    // for (let i = 0; i < inputvalue )
    
  
      noFill()
      // background(220);
      strokeWeight(5);
      stroke(random(0, 255), random(0, 255), random(0, 255));
      arc(random(0, width), random(0, height), 50, 50, 0, random(0, 360));
      
  
    // noLoop();
  }
    
//   const callFunction = (func, n) => {
//     for (let i = 1; i <= n; i++) {
//         func()
//     }
// }

// callFunction(bands(), 7)