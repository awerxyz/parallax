const leftOrchid = document.querySelector('.leftOrchid');
const rightOrchid = document.querySelector('.rightOrchid');

const main = document.querySelector("main");

document.addEventListener('mousemove', function(event) {
    const offsetX = (window.innerWidth - event.pageX) / window.innerWidth - 0.5;
    const offsetY = (window.innerHeight - event.pageY) / window.innerHeight - 0.5;
    leftOrchid.style.transform = `translate(${offsetX * 20}px, ${offsetY * 20}px)`; // Adjust the multiplier for orchid movement
    rightOrchid.style.transform = `translate(${-offsetX * 20}px, ${-offsetY * 20}px)`; // Adjust the multiplier for orchid movement
});

document.addEventListener('touchmove', function(event) {
    const touch = event.touches[0];
    const offsetX = (window.innerWidth - touch.pageX) / window.innerWidth - 0.2;
    const offsetY = (window.innerHeight - touch.pageY) / window.innerHeight - 0.2;
    leftOrchid.style.transform = `translate(${offsetX * 30}px, ${offsetY * 30}px)`; // Adjust the multiplier for orchid movement
    rightOrchid.style.transform = `translate(${-offsetX * 30}px, ${-offsetY * 30}px)`;
    // Update parallax effect based on touch events
});


if(window.innerWidth >= 402){
    main.style.maxHeight = `${windoq.innerWidth * 0.6}px`;
} 
else{
    main.style.maxHeight = `${windoq.innerWidth * 1.6}px`;
}