//your code here
const images = document.querySelectorAll('.image')
let draggedElement = null;

images.forEach((image)=>{
    image.addEventListener('dragstart', (e)=>{
        draggedElement = e.target;
        e.target.style.opacity = '0.5';
  
})

image.addEventListener('dragend', (e)=>{
    e.target.style.opacity = '1';
    draggedElement = null;
});

image.addEventListener('dragover', (e)=>{
    e.preventDefault();
});

image.addEventListener('drop', (e)=>{
    e.preventDefault();

    if(draggedElement && draggedElement !== e.target){

        const draggedBackground = draggedElement.style.backgroundImage;
        e.target.style.backgroundImage = draggedBackground;
    }
})
})
