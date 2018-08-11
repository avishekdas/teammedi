/*Layouts js goes here*/

console.log('here');

var image = document.querySelector('.doctor-image-hover');
var box = document.querySelector('.doctor-bio-hover');

console.log(image)
console.log(box)

image.addEventListener('mouseover', function() {
    box.style.display = 'block';
})

image.addEventListener('mouseout', function() {
    box.style.display = 'none';
})

box.addEventListener('mouseover', function() {
    box.style.display = 'block';
})

box.addEventListener('mouseout', function() {
    box.style.display = 'none';
})