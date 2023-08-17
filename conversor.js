document.getElementById('botaoConverter').addEventListener('click', converter);

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
