



window.toggleAboutme = function (isVisible) {
    var image = document.querySelector('.imgaboutme');
    var text = document.querySelector('.conttext');
    if (isVisible) {
        image.style.width = '100%';
        text.style.width = '20%';
    } else {
        image.style.width = '0%';
        text.style.width = '100%';
    }
};

window.toggleProyects = function (isVisible) {
    var proyects = document.querySelector('.proyectos');
    if (isVisible) {
        proyects.style.left = '30%';
        proyects.style.width = '70%';
    } else {
        proyects.style.width = '0%';
        proyects.style.left = '0%';
    }
}

window.toggleTecnology = function (isVisible) {
    var text = document.querySelector('.texttecnology');
    var conttec = document.querySelector('.alltecnology');
    if (isVisible) {
        conttec.style.left = '0';
        text.style.left = '80%';
        text.style.width = '20%';
    } else {
        conttec.style.left = '-80%';
        text.style.left = '0';
        text.style.width = '40%';
    }
};
