const DEFAULT_SIZE = 16

mode = 'color'
colorMode = document.querySelector('.color')
eraserMode = document.querySelector('.eraser')
rainMode = document.querySelector('.rain')
clearMode = document.querySelector('.clear')
slider = document.querySelector('#gridSize')

sliderSizeDisplay = document.querySelector('.sliderValue')

colorMode.onclick = (e)=>{
    mode = 'color'
}
eraserMode.onclick = (e)=>{
    mode = 'eraser'
}
rainMode.onclick = (e)=>{
    mode = 'rain'
}
clearMode.onclick = ()=>{
    clear()
}
slider.onmousemove = (e) => sliderSizeDisplay.innerText = `${slider.value} x ${slider.value}`
slider.onchange = (e) => {
    clear()
    gridSize(e.target.value)
}




container = document.querySelector('.container')

function clear(){
    gridAll = document.querySelectorAll('.grid')
    gridAll.forEach(grid => {
        grid.remove()
    });
}

function gridSize(size){
    fullSize = size * size 
    container.style.gridTemplateColumns = `repeat(${size},auto)`
    for (let loop = 0; loop < fullSize; loop++) {
        grid = document.createElement('div')
        container.appendChild(grid)
        grid.classList.add('grid')
        grid.addEventListener('mouseover', (e)=>changeColor(e))
        
    }
}

function changeColor(e) {
    if (mode === 'rain') {
      const randomR = Math.floor(Math.random() * 256)
      const randomG = Math.floor(Math.random() * 256)
      const randomB = Math.floor(Math.random() * 256)
      e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (mode === 'color') {
      e.target.style.backgroundColor = document.querySelector('#color').value
    } else if (mode === 'eraser') {
      e.target.style.backgroundColor = '#fdfdfd'
    }
  }


window.onload = () => {
    gridSize(DEFAULT_SIZE)
    slider.value = 16
    sliderSizeDisplay.innerText = '16 x 16'
  }
  