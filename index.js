let canvas=  document.querySelector('canvas')
 let pen=   canvas.getContext('2d')
 pen.fillStyle='red'
 let cell=50
 let snakeC=[[0,0]]
 let direction='right'
 let score=100
 let gameOver=false
 let randomData=randomCell()
  let id=  setInterval(()=>{
    draw()
    update()

 },200)

//  pen.fillRect(0,0,cell,50)


document.addEventListener('keydown',(e)=>{
    // console.log(e,"he");
    if(e.key==='ArrowLeft'){
        direction='left'
    }
    else if(e.key==='ArrowDown'){
        direction='down'
    }
    else if(e.key==='ArrowUp'){
        direction='up'
    }
    else{
        direction='right'
    }
    
    // console.log('hehehe');
    

})


function draw(){
    if(gameOver===true){
        pen.font='40px sans-sarif'
        pen.fillStyle='white'
        pen.fillText('gameOver',200,300)
        clearInterval(id)
        return
    }
    pen.clearRect(0,0,1200,600)
    for(let i of snakeC){
        pen.fillStyle='red'
        pen.fillRect(i[0],i[1],cell,cell)
    }
    pen.fillStyle='green'
    pen.fillRect(randomData[0],randomData[1],cell,cell  )
    pen.font='50px sans-sarif'
    pen.fillText(`${score}`,500,200)



}
function update(){
   let headX=  snakeC[snakeC.length-1][0]
  let headY=  snakeC[snakeC.length-1][1]
   let newX
   let newY
   if(direction==='up'){
    newX=headX
    newY=headY-cell
    if(newY<0){
        gameOver=true
    }

   }
   else if(direction==='down'){
    newX=headX
    newY=headY+cell
    if(newY===600){
        gameOver=true
    }
   }
   else if(direction==='left'){
    newX=headX-cell
    newY=headY
    if(newX<0){
        gameOver=true
    }
   }
   else{
    newX=headX+cell
    newY=headY
    if(newX===1200){
        gameOver=true
    }

   }
   if(newX===randomData[0] && newY===randomData[1]){
     randomData=   randomCell()
     score+=1
   }
   else{
    snakeC.shift()
   }
   snakeC.push([newX,newY])

//   console.log(headX,headY,"hdehehe");
  


}

function randomCell(){
    return [
      Math.floor(Math.random()*(1200-cell)/cell)*cell  ,
        
        Math.floor(Math.random()*(600-cell)/cell)*cell
    ]
}