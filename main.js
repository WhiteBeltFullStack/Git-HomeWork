'use strict'

function onBallClick(elBall, maxDiameter) {
  var currHeight = parseInt(elBall.style.height) || 100
  var currWidth = parseInt(elBall.style.width) || 100

  if (currHeight < maxDiameter) {
    elBall.style.height = currHeight + getRandomInt(20, 61) + 'px'
    elBall.style.width = currWidth + getRandomInt(20, 61) + 'px'
}else{
    elBall.style.height = 100 + 'px'
    elBall.style.width = 100 + 'px'
  }

  elBall.style.backgroundColor = getRandomColor()
  elBall.innerText = parseInt(elBall.style.height)
}
