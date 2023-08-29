function rotateOnScroll(rotatingImage) {
    // Calculate scroll direction based on deltaY
    const scrollDirection = event.deltaY > 0 ? 1 : -1;

    // Update rotation angle based on scroll direction
    rotationAngle += scrollDirection * 10; // Adjust rotation speed as needed

    // Apply rotation transform to the image
    rotatingImage.style.transform = `rotate(${rotationAngle}deg)`;
}