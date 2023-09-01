const conteudoPtBr = [
    'binário',
    'decimal',
    'Binário',
    'Decimal',
    'Insira somente uma sequência binária.',
    'Conversor de binário para decimal',
    'Binário para Decimal',
    'Converter',
    'Opções de acessibilidade',
    'Fechar opções de acessibilidade',
    'Inverter Cores',
    'Aumentar tamanho da fonte',
    'Diminuir tamanho da fonte',
    'Tamanho da Fonte'
];

if (navigator.language === 'pt-BR') {

    let titulo = document.getElementById('titulo');

    document.title = conteudoPtBr[6];
    titulo.innerHTML = conteudoPtBr[0] + ' <span>&gt;</span><span style="animation-delay: 1s;">&gt;</span><span style="animation-delay: 2s;">&gt;</span> ' + conteudoPtBr[1];
    titulo.ariaLabel = conteudoPtBr[5];
    document.getElementById('labelBinario').innerHTML = conteudoPtBr[2];
    document.getElementById('labelDecimal').innerHTML = conteudoPtBr[3];
    document.getElementById('mensagemErro').innerHTML = conteudoPtBr[4];
    document.getElementById('botaoAcessibilidade').ariaLabel = conteudoPtBr[8];
    document.getElementById('botaoFecharAcessibilidade').ariaLabel = conteudoPtBr[9];
    document.getElementById('labelSwitch').innerHTML = conteudoPtBr[10];
    document.getElementById('botaoAumentarFonte').ariaLabel = conteudoPtBr[11];
    document.getElementById('botaoDiminuirFonte').ariaLabel = conteudoPtBr[12];
    document.getElementById('labelFonte').innerHTML = conteudoPtBr[13];
};

let tema = 'escuro';

document.getElementById('botaoConverter').addEventListener('click', converter);

document.getElementById('botaoAumentarFonte').addEventListener('click', aumentarFonte);

document.getElementById('botaoDiminuirFonte').addEventListener('click', diminuirFonte);

document.getElementById('switchClaro').addEventListener('change', inverterCores);

document.getElementById('inputBinario').addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        converter();
    }
});

function converter() {
    let binario = document.getElementById('inputBinario').value;

    if (binario) {
        console.log('valor inicial: ', binario);

        let binarioArray = binario.split('').reverse();
        console.log(binarioArray);

        let expoente = 0;
        let total = 0;

        for (let i = 0; i < binarioArray.length; i++) {

            let algarismo = binarioArray[i];

            if (algarismo == '0' || algarismo == '1') {
                let resultado = parseInt(algarismo) * Math.pow(2, expoente);
                total = total + resultado;

                console.log(algarismo, ' * 2 ^', expoente, ' = ', resultado, '\n', 'Total atual: ', total);

                expoente++;
            } else {
                console.log("Valor inválido encontrado: '", algarismo, "'");

                erro();

                break;
            }

        };

        console.log('Fim da operação.\nTotal final: ', total);

        document.getElementById('inputDecimal').value = total;
    }
}

function erro() {
    document.getElementById('modalErro').showModal();
}

function inverterCores() {
    let root = document.querySelector(':root');

    switch (tema) {
        case 'escuro':
            root.style.setProperty('--claro', '#00020a');
            root.style.setProperty('--escuro', '#e7eafe');
            root.style.setProperty('--meioClaro', 'rgba(0, 0, 0, 0.7)');
            root.style.setProperty('--meioEscuro', 'rgba(255, 255, 255, 0.5)');
            tema = 'claro'
            break;
        case 'claro':
            root.style.setProperty('--claro', '#e7eafe');
            root.style.setProperty('--escuro', '#00020a');
            root.style.setProperty('--meioClaro', 'rgba(255, 255, 255, 0.5)');
            root.style.setProperty('--meioEscuro', 'rgba(0, 0, 0, 0.7)');
            tema = 'escuro'
            break;
    }

}

function aumentarFonte() {
    let tamanhoFonte = parseFloat(window.getComputedStyle(document.documentElement).fontSize);
    document.documentElement.style.fontSize = (tamanhoFonte + 1) + 'px';
    console.log(tamanhoFonte);
}

function diminuirFonte() {
    let tamanhoFonte = parseFloat(window.getComputedStyle(document.documentElement).fontSize);
    document.documentElement.style.fontSize = (tamanhoFonte - 1) + 'px';
    console.log(tamanhoFonte);
}