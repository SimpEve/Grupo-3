const home = document.querySelector("#home");
const nosotros = document.querySelector("#nosotros");
const contacto = document.querySelector("#contacto");
const conoce_al_equipo = document.querySelector("#conoce_al_equipo");
const botonMostrar = document.getElementById('botonMostrar');
const cuadroTexto = document.getElementById('cuadroTexto');

/*Menu Servicios*/
home.addEventListener("click",(h) =>{
    h.preventDefault();
    const sectionH = document.querySelector(".banner");
    sectionH.scrollIntoView({behavior:"smooth"})
});

nosotros.addEventListener("click",(n) =>{
    n.preventDefault();
    const sectionN = document.querySelector(".bannerN");
    sectionN.scrollIntoView({behavior:"smooth"})
});

contacto.addEventListener("click",(c) =>{
    c.preventDefault();
    const sectionC = document.querySelector(".Section-Contacto");
    sectionC.scrollIntoView({behavior:"smooth"})
});

conoce_al_equipo.addEventListener("click",(cae) =>{
    cae.preventDefault();
    const sectionCAE = document.querySelector(".nosotros");
    sectionCAE.scrollIntoView({behavior:"smooth"})
});
