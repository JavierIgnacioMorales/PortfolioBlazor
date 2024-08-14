

window.onscroll = function () {
    var headerHeight = document.querySelector('.myheader').offsetHeight;
    //var navbar = document.querySelector('.navbar');
    var navbarTitle = document.querySelector('.titulobarra');

    if (window.scrollY > (headerHeight - 80) ) {
        //navbar.classList.add('visible');
        navbarTitle.classList.add('visible');
    } else {
        //navbar.classList.remove('visible');
        navbarTitle.classList.remove('visible');
    }
};

window.toggleAboutme = function (isVisible) {
    var image = document.querySelector('.imgaboutme');
    var texto = document.querySelector('.textoaboutme');
    var text = document.querySelector('.conttext');
    if (isVisible) {
        image.style.width = '70%';
        texto.style.width = '30%';
        text.style.width = '30%';
    } else {
        image.style.width = '0%';
        texto.style.width = '0%';
        text.style.width = '100%';
    }
};

window.toggleAboutmevert = function (isVisible) {
    var image = document.querySelector('.imgaboutmevert');
    var text = document.querySelector('.conttextvert');
    var cont = document.querySelector('.contimgtextvert');
    if (isVisible) {
        image.style.height = '80%';
        cont.style.height= '100%';
        text.style.height = '20%';
    } else {
        image.style.height = '0%';
        text.style.height = '100%';
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

window.toggleProyectsvert = function (isVisible) {
    var proyects = document.querySelector('.proyectosvert');
    if (isVisible) {
        proyects.style.top = '20%';
        proyects.style.height = '80%';
    } else {
        proyects.style.top = '0%';
        proyects.style.height = '0%';
    }
}

window.toggleTecnology = function (isVisible) {
    var text = document.querySelector('.conttexttec');
    var textint = document.querySelector('.texttecnology')
    var conttec = document.querySelector('.alltecnology');
    if (isVisible) {
        conttec.style.left = '0';
        text.style.left = '80%';
        text.style.width = '20%';
        textint.style.left = '80%';
    } else {
        conttec.style.left = '-80%';
        text.style.left = '0';
        text.style.width = '30%';
        textint.style.left = '0%';
    }
};

window.toggleTecnologyvert = function (isVisible) {
    var text = document.querySelector('.conttexttecvert');
    var textint = document.querySelector('.texttecnologyvert')
    var conttec = document.querySelector('.alltecnologyvert');
    if (isVisible) {
        conttec.style.top = '0';
        text.style.top = '80%';
        text.style.height = '20%';
        textint.style.top = '80%';
    } else {
        conttec.style.top = '-80%';
        text.style.top = '0';
        text.style.heighy = '30%';
        textint.style.top = '0%';
    }
};
