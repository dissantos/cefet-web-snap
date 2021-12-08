let balaozinhoDivEl = document.querySelector('#balaozinho');
let imagensMarcadasEl = document.querySelectorAll('.marcacao');

//balaozinhoDivEl.style.position = 'absolute'

imagensMarcadasEl.forEach((imgMarcadaEl) => {
    imgMarcadaEl.addEventListener('mouseover', (e)=>{
        balaozinhoDivEl.style.color = imgMarcadaEl.getAttribute('data-cor')
        balaozinhoDivEl.innerHTML = `
            <h1>${imgMarcadaEl.getAttribute('data-titulo')}</h1>
            <h2>${imgMarcadaEl.getAttribute('data-conteudo')}</h2>
        `
    });
    imgMarcadaEl.addEventListener('mousemove', (e)=>{
        balaozinhoDivEl.style.position = 'absoule';
        balaozinhoDivEl.style.top =  `${e.pageY}px`;
        balaozinhoDivEl.style.left = `${e.pageX}px`;
    });
    imgMarcadaEl.addEventListener('mouseout', () => {
        balaozinhoDivEl.innerHTML = '';
    })
});