const sketchpadDiv = document.querySelector('#sketchpad-container');

for (let i = 0; i < 16; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.style.fontSize = '0';
    
    for (let j = 0; j < 16; j++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('box')
        newDiv.addEventListener('mouseover', () => {
            newDiv.classList.add('colored')
        })

        rowDiv.appendChild(newDiv)

    sketchpadDiv.appendChild(rowDiv);
    }
}

const eraseBtn = document.querySelector('#erase-btn');
const boxes = document.querySelectorAll('.box')

eraseBtn.addEventListener('click', () => {
    boxes.forEach(box => {
        box.classList.remove('colored');
        console.log(typeof box);
    })
    
})
