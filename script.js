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
        rowDiv.classList.add('row')
        rowDiv.style.fontSize = '0';
        
        for (let j = 0; j < length; j++) {
            const boxDiv = document.createElement('div');
            boxDiv.classList.add('box')
            boxDiv.style.width = `${boxWidth}px`;
            boxDiv.style.height = `${boxWidth}px`;
            boxDiv.classList.add('box-hover')
            
            boxDiv.addEventListener('mousedown', (e) => {
                changeColor(e)
                console.log(colorTrigger)
            })  
            
            boxDiv.addEventListener('mouseover', (e) => {
                if (colorTrigger) {
                    console.log('moving too')
                    changeColor(e)
                    }
                console.log(colorTrigger)
            })

            rowDiv.appendChild(boxDiv)
    
        sketchpadDiv.appendChild(rowDiv);
        }
    }
}

function changeColor(e) {
    e.target.classList.add('colored');
    e.target.classList.remove('box-hover');
}

createSketchPad(26);

const eraseBtn = document.querySelector('#erase-btn');
const boxes = document.querySelectorAll('.box')

function clearPad() {
    const boxes = document.querySelectorAll('.box')
    boxes.forEach(box => {
        box.classList.remove('colored');
        box.classList.add('box-hover');
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