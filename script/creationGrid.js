const container = document.querySelector('.container')

console.log(container)


/**Loops for 16 times, creating grids in the process and 
 * adding color mode Event Listeners on it with color configuration*/


gridColumn = 200
while (gridColumn > 100) {
    gridColumn = prompt('grid formula = 50*n \n your value must be less than or equal to 100')
}

gridCreation(gridColumn)



allGrids = document.querySelectorAll('.grid')


inputbtn = document.querySelector('#color')
inputbtn.addEventListener('onclick', eventListners())


function eventListners(){
    allGrids.forEach(element => {
        element.addEventListener('mouseover', function(event){
            colorPick = document.querySelector('#color').value
            event.target.style.borderColor = colorPick
            
        })
    });
}


/**Clear button function */

clearButton = document.querySelector('.clear')
clearButton.addEventListener('click', (event)=>{
    allGrids.forEach(element =>{
        element.style.borderColor = 'white'
    })
})

/**Change grid size event listener */


function gridCreation(gridSize) {
    for (let i = 0; i < 50*gridSize; i++) {
        let gridElement = document.createElement("div")
        
        container.appendChild(gridElement)
        gridElement.classList.add('grid')
    }
}
