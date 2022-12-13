const sketchpadDiv = document.querySelector('#sketchpad-container');
const sketchpadLength = sketchpadDiv.clientWidth;

function createSketchPad(length = 16) {
    // Clear board if any existing elements
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

            boxDiv.addEventListener('mouseover', () => {
                boxDiv.classList.add('colored')
            })
    
            rowDiv.appendChild(boxDiv)
    
        sketchpadDiv.appendChild(rowDiv);
        }
    }
}
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

// Slider for Etch A Sketch size
const sizeDisplayDiv = document.querySelector('#current-size');
const sizeSlider = document.querySelector('#size-slider');

sizeSlider.addEventListener('input', () => {
    // Update Size Display
    const size = sizeSlider.value;
    const string = `${size} × ${size}`;

    sizeDisplayDiv.textContent = string;

    // Update board
    clearPad();
    createSketchPad(size)
})