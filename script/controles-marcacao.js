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

let formatoStr = imagemMarcadaSelecionada.getAttribute('data-formato');
let formatoInput = document.querySelector(`[value=${formatoStr}]`);

function atualizarControles(el) {
    xMarcadoInput.value = parseFloat(el.style.left);
    yMarcadoInput.value = parseFloat(el.style.top);
    larguraMarcadoInput.value = parseFloat(el.style.width);
    alturaMarcadoInput.value = parseFloat(el.style.height);

    tituloMarcadoInput.value = el.getAttribute('data-titulo');
    conteudoMarcadoInput.value = el.getAttribute('data-conteudo');
    corMarcadoInput.value = el.getAttribute('data-cor');

    formatoStr = el.getAttribute('data-formato');
    formatoInput = document.querySelector(`[value=${formatoStr}]`);
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


//modificar marcacao selecionada
xMarcadoInput.addEventListener('change',() => {
    imagemMarcadaSelecionada.style.left= `${parseFloat(xMarcadoInput.value)}px`;
});
yMarcadoInput.addEventListener('change',() => {
    imagemMarcadaSelecionada.style.top= `${parseFloat(yMarcadoInput.value)}px`;
});
larguraMarcadoInput.addEventListener('change',() => {
    imagemMarcadaSelecionada.style.width= `${parseFloat(larguraMarcadoInput.value)}px`;
});
alturaMarcadoInput.addEventListener('change',() => {
    imagemMarcadaSelecionada.style.height= `${parseFloat(alturaMarcadoInput.value)}px`;
});

tituloMarcadoInput.addEventListener('change', () => {
    imagemMarcadaSelecionada.setAttribute('data-titulo', tituloMarcadoInput.value);
});
conteudoMarcadoInput.addEventListener('change', () => {
    imagemMarcadaSelecionada.setAttribute('data-conteudo', conteudoMarcadoInput.value);
});
corMarcadoInput.addEventListener('change', () => {
    imagemMarcadaSelecionada.setAttribute('data-cor', corMarcadoInput.value);
});

let formatosMarcacaoInput = document.querySelectorAll('[name="formato-da-marcacao"]');
formatosMarcacaoInput.forEach((formatoMarcado) => {
    formatoMarcado.addEventListener('change', () => {
        imagemMarcadaSelecionada.classList.remove(formatoStr);
        if(formatoMarcado.checked){
            imagemMarcadaSelecionada.setAttribute('data-formato',formatoMarcado.value);
            imagemMarcadaSelecionada.classList.add(formatoMarcado.value);
            formatoStr = formatoMarcado.value;
        }
    })
})

