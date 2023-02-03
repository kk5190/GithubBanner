window.addEventListener('load', function(){
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = this.window.innerHeight;
  console.log(ctx);

  ctx.lineWidth = 3;
  ctx.strokeStyle = 'red';
  ctx.beginPath();
  ctx.moveTo(canvas.width/2, 0);
  ctx.lineTo(canvas.width/2, canvas.height);
  ctx.stroke()

  ctx.strokeStyle = 'green';
  ctx.beginPath();
  ctx.moveTo(0, canvas.height/2);
  ctx.lineTo(canvas.width, canvas.height/2);
  ctx.stroke()

  const text = 'hello canvas how are you!';
  const textX = canvas.width/2;
  const textY = canvas.height/2;
  
  ctx.fillStyle = 'yellow';
  ctx.strokeStyle = 'white';
  
  ctx.font = '80px Helvetica';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  // ctx.fillText(text, textX, textY);
  // ctx.strokeText(text, textX, textY);

  const maxTextWidth = canvas.width * 0.5;
  function wrapText(text){
    let linesArray = [];
    let lineCounter = 0;
    let line = '';
    let words = text.split(' ');
    for (let i=0; i < words.length; i++) {
      let testLine = line + words[i] + ' ';
      if (ctx.measureText(testLine).width > maxTextWidth){
        line = words[i] + ' ';
        lineCounter++;
      } else {
        line = testLine;
      }
      linesArray[lineCounter] = line;
    }
    linesArray.forEach((el, index)=>{
      ctx.fillText(el, canvas.width/2, canvas.height/2 + index * 80)
    });
    console.log(linesArray)
    
  }
  wrapText(text)
})