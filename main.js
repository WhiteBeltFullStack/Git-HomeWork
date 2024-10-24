'use strict'

function onBallClick(elBall) {
  var currHeight = parseInt(elBall.style.height) || 100
  var currWidth = parseInt(elBall.style.width) || 100

  if (currHeight >= 400) {
    currHeight = 50
    currWidth = 50
  }

  elBall.style.height = currHeight + 50 + 'px'
  elBall.style.width = currWidth + 50 + 'px'

  elBall.innerText = parseInt(elBall.style.height)
}
