let balaozinhoDivEl = document.querySelector('#balaozinho');
let imagensMarcadasEl = document.querySelectorAll('.marcacao');

//balaozinhoDivEl.style.position = 'absolute'

imagensMarcadasEl.forEach((imgMarcadaEl) => {
    imgMarcadaEl.addEventListener('mouseover', (e)=>{
        balaozinhoDivEl.style.color = imgMarcadaEl.getAttribute('data-cor')
        balaozinhoDivEl.innerHTML = `
            <h2>${imgMarcadaEl.getAttribute('data-titulo')}</h2>
            <p>${imgMarcadaEl.getAttribute('data-conteudo')}</p>
        `
    });
    imgMarcadaEl.addEventListener('mousemove', (e)=>{
        balaozinhoDivEl.style.position = 'absolute';
        balaozinhoDivEl.style.top =  `${e.pageY}px`;
        balaozinhoDivEl.style.left = `${e.pageX}px`;
    });
    imgMarcadaEl.addEventListener('mouseout', () => {
        balaozinhoDivEl.innerHTML = '';
    })
});
