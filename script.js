const sketchpadDiv = document.querySelector('#sketchpad-container');
const sketchpadLength = sketchpadDiv.clientWidth;
let colorTrigger = false;

sketchpadDiv.addEventListener('mousedown', () => {      
    colorTrigger = true;  
});   

sketchpadDiv.addEventListener('mouseup', () => {      
    colorTrigger = false;  
});

function createSketchPad(length = 16) {
    sketchpadDiv.textContent = '';

    const boxWidth = sketchpadLength/length;

    for (let i = 0; i < length; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.style.fontSize = '0';
        
        for (let j = 0; j < length; j++) {
            const boxDiv = document.createElement('div');
            boxDiv.classList.add('box')
            boxDiv.style.width = `${boxWidth}px`;
            boxDiv.style.height = `${boxWidth}px`;
            
            boxDiv.addEventListener('mousedown', () => {
                boxDiv.classList.add('colored')            
            })  
            
            boxDiv.addEventListener('mousemove', () => {
                if (colorTrigger)
                boxDiv.classList.add('colored')              
            })

            rowDiv.appendChild(boxDiv)
    
        sketchpadDiv.appendChild(rowDiv);
        }
    }
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    e.target.classList.add('colored')
  }


let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

createSketchPad(16);

const eraseBtn = document.querySelector('#erase-btn');
const boxes = document.querySelectorAll('.box')

function clearPad() {
    const boxes = document.querySelectorAll('.box')
    boxes.forEach(box => {
        box.classList.remove('colored');
    })
}

eraseBtn.addEventListener('click', clearPad)

const sizeDisplayDiv = document.querySelector('#current-size');
const sizeSlider = document.querySelector('#size-slider');

sizeSlider.addEventListener('input', () => {
    clearPad();

    const size = sizeSlider.value;
    const string = `${size} × ${size}`;

    sizeDisplayDiv.textContent = string;
})

sizeSlider.addEventListener('change', () => {
    const size = sizeSlider.value;
    createSketchPad(size)
})