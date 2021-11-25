



















function gridCreation() {
    let Parent = document.querySelector('.container')
    let size1 = document.querySelector('#gridSize').value
    let size = size1*size1
    Parent.style.gridTemplateColumns = `repeat(${size1},auto)`
    
    for (let num = 0; num < size; num++) {
        let grid = document.createElement("div")
        Parent.appendChild(grid)
        grid.classList.add('grid')


        

        grid.addEventListener('mouseover', (e) => {
            changeColor(e)
        })
    }
}

function changeColor(event) {
    event.target.style.backgroundColor = '#fefefe'
  }


gridCreation()


