let ocultarMarcacoesInput = document.querySelector('#visibilidade-das-marcacoes');
let imagemMarcadaParentEl = document.querySelector('.marcacao').parentElement;

ocultarMarcacoesInput.addEventListener('change', () => {
    imagemMarcadaParentEl.classList.toggle(ocultarMarcacoesInput.value)
})