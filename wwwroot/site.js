



window.toggleImage = function (isVisible) {
    var image = document.querySelector('.imgaboutme');
    var text = document.querySelector('.textaboutme');
    if (isVisible) {
        image.style.width = '100%';
        text.style.width = '25%';
    } else {
        image.style.width = '0%';
        text.style.width = '100%';
    }
};

window.toggleProyects = function (isVisible) {
    var proyects = document.querySelector('.proyectos');
    var image = document.querySelector('.imgproyects');
    if (isVisible) {
        proyects.style.width = '100%';
        image.style.width = '0%';
    } else {
        proyects.style.width = '0%';
        image.style.width = '100%';
    }
}