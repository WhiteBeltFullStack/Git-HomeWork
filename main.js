'use strict'

function onBallClick(elBall) {
  var currHeight = parseInt(elBall.style.height) || 100
  var currWidth = parseInt(elBall.style.width) || 100


  elBall.style.height = currHeight + 50 + 'px'
  elBall.style.width = currWidth + 50 + 'px'

  elBall.innerText =  parseInt(elBall.style.height)
  
}

// 10.Change onBallClick() to increment the ball’s
//  width & height by 50px and
// display the updated diameter
// inside the ball. Remove the console.log(). ⇩
