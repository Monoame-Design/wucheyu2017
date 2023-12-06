//-------------
let GLOBAL = {}
GLOBAL.size = {
  ratioFixed: true,
  width: 1000,
  height: 1200
}

function initResize() {
  // GLOBAL.size = {
  //   ratioFixed: true,
  // }
  fitCanvasSize()
}

// essential global functions

function fitCanvasSize() {
  //given canvas width and height and window with height, fit canvas to window
  if (GLOBAL.size.ratioFixed) {

    let windowRatio = window.innerWidth / window.innerHeight
    let canvasRatio = GLOBAL.size.width / GLOBAL.size.height


    if (windowRatio > canvasRatio) {
      // window is wider than canvas
      let minH = window.innerHeight
      let minW = minH * canvasRatio
      //set canvas size
      canvas.style.width = minW + "px"
      canvas.style.height = minH + "px"
    } else {
      // window is taller than canvas
      let minW = window.innerWidth
      let minH = minW / canvasRatio
      //set canvas size
      canvas.style.width = minW + "px"
      canvas.style.height = minH + "px"
    }

  }

}

function windowResized() {
  fitCanvasSize()
}

function resetMargin() {
  document.body.style.backgroundColor = "#000"
  document.body.style.margin = "0px"
  document.body.style.padding = "0px"
  document.body.style.display = "flex"
  document.body.style.justifyContent = "center"
  document.body.style.alignItems = "center"

}
//-------------