let filtroSelectInput = document.querySelector('#filtro-da-foto');
let imagemEl  = document.querySelector('.foto-anotada > img');

filtroSelectInput.addEventListener('change', () => {
    imagemEl.style.filter = filtroSelectInput.value;
})

let seletorArquivoInput = document.querySelector('#imagem');
let reader = new FileReader();

seletorArquivoInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if(file.type && file.type.startsWith('image/')){
        reader.addEventListener('load', (e) => {
            imagemEl.setAttribute('src',e.target.result);
            imagemEl.setAttribute('alt', `Arquivo de imagem selecionado do computador: ${file.name}`);
        })
        reader.readAsDataURL(file);
    } else {
        console.error(`Arquivo ${file.name} não é uma imagem`);
    }
});
