const images = document.querySelectorAll('.image');
let draggedElement = null; // Track the element being dragged

images.forEach((image) => {
  // When dragging starts
  image.addEventListener('dragstart', (e) => {
    draggedElement = e.target; // Store the dragged element
    e.target.style.opacity = '0.5'; // Visual feedback
  });

  // When dragging ends
  image.addEventListener('dragend', (e) => {
    e.target.style.opacity = '1'; // Reset opacity
    draggedElement = null; // Clear the reference
  });

  // Allow dropping by preventing the default behavior
  image.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  // Handle drop event
  image.addEventListener('drop', (e) => {
    e.preventDefault();

    // Ensure the dragged element is not dropped on itself
    if (draggedElement && draggedElement !== e.target) {
      // Swap the background images
      const draggedBackground = draggedElement.style.backgroundImage;
      draggedElement.style.backgroundImage = e.target.style.backgroundImage;
      e.target.style.backgroundImage = draggedBackground;
    }
  });
});
