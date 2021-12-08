let ocultarMarcacoesInput = document.querySelector('#visibilidade-das-marcacoes');
let imagemsMarcadasEl = document.querySelectorAll('.marcacao');
let imagemMarcadaParentEl = document.querySelector('.marcacao').parentElement;

let imagemMarcadaSelecionada = document.querySelector('.selecionada');

let xMarcadoInput = document.querySelector('#x-da-marcacao');
let yMarcadoInput = document.querySelector('#y-da-marcacao');
let larguraMarcadoInput = document.querySelector('#largura-da-marcacao');
let alturaMarcadoInput = document.querySelector('#altura-da-marcacao');

let tituloMarcadoInput = document.querySelector('#titulo-da-marcacao');
let conteudoMarcadoInput = document.querySelector('#conteudo-da-marcacao');
let corMarcadoInput = document.querySelector('#cor-da-marcacao');

let formatoInput;

function atualizarControles(el){
    xMarcadoInput.value = parseFloat(el.style.left);
    yMarcadoInput.value = parseFloat(el.style.top);
    larguraMarcadoInput.value = parseFloat(el.style.width);
    alturaMarcadoInput.value = parseFloat(el.style.height);

    tituloMarcadoInput.value = el.getAttribute('data-titulo');
    conteudoMarcadoInput.value = el.getAttribute('data-conteudo');
    corMarcadoInput.value = el.getAttribute('data-cor');

    const formato = el.getAttribute('data-formato');
    formatoInput = document.querySelector(`[value=${formato}]`)
    formatoInput.checked = true;

}

atualizarControles(document.querySelector('.selecionada')); //ajuste inicial dos controles

ocultarMarcacoesInput.addEventListener('change', () => {
    imagemMarcadaParentEl.classList.toggle(ocultarMarcacoesInput.value);
});


imagemsMarcadasEl.forEach((imagemMarcadaEl) => {
    imagemMarcadaEl.addEventListener('click', () => {
        imagensMarcadasEl.forEach((el) => {
            el.classList.remove('selecionada'); //remove a classe selecionada de todas as outras
        });
        imagemMarcadaEl.classList.add('selecionada'); //add na que foi clicada

        imagemMarcadaSelecionada = imagemMarcadaEl;
        
        atualizarControles(imagemMarcadaSelecionada);

    });
});


