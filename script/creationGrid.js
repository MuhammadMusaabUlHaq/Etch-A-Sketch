const sizeSlider = document.querySelector('#gridSize')



















function gridCreation() {
    let Parent = document.querySelector('.container')
    
    let size = sizeSlider.value * sizeSlider.value
    Parent.style.gridTemplateColumns = `repeat(${size},auto)`
    
    for (let num = 0; num < size; num++) {
        let grid = document.createElement("div")
        Parent.appendChild(grid)
        grid.classList.add('grid')


        

        grid.addEventListener('mouseover', (e) => {
            changeColor(e)
        })
    }
}

const valueParagraph = document.querySelector('.sliderValue')

function valueDisplay() {
    valueParagraph.innerText = sizeSlider.value
}

function changeColor(event) {
    event.target.style.backgroundColor = '#fefefe'
  }


gridCreation()
valueDisplay()

