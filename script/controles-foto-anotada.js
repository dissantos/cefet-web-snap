let filtroSelectInput = document.querySelector('#filtro-da-foto');
let imagemEl  = document.querySelector('.foto-anotada > img');

filtroSelectInput.addEventListener('change', () => {
    imagemEl.style.filter = filtroSelectInput.value;
})
