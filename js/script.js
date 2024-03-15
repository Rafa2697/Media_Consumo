


let pages = ['app2.html', 'app1.html'];
let currentPage = 0;

document.querySelector('#botao').addEventListener('click', function () { // nesse evento usando fetch o body do app1 toma o lugar do body do index. 
    currentPage = (currentPage + 1) % pages.length
    fetch(pages[currentPage])
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let htmlDocument = parser.parseFromString(data, 'text/html');
            let divContent = htmlDocument.querySelector('main').innerHTML;
            document.querySelector('main').innerHTML = divContent;
        })
        .catch(error => {
            console.error('erro:', error);
        })
})




function calcGasto() {
    const percurso = Number(document.getElementById('km').value)
    const mediaVeiculo = Number(document.getElementById('media-veiculo').value)
    const valorLitro = Number(document.getElementById('valor-litro').value)

    let gasto = (percurso / mediaVeiculo) * valorLitro;


    if (isNaN(gasto)) {
        document.getElementById('result-media').innerHTML = `Prencha os capos para ter o resultado`
        document.querySelector('body').style.background = `darkred`
    } else {
        document.getElementById('result-media').innerHTML = `<span>R$${gasto.toFixed(1)}</span> de gasto com combustivel`
        document.querySelector('body').style.background = `darkblue`
    }

}


// funções app1

window.onload = function () {
    // Verifica se existe média, km e litros salvos no localStorage
    const mediaSalva = localStorage.getItem('mediaConsumo');
    const kmSalvo = localStorage.getItem('km');
    const litrosSalvo = localStorage.getItem('litros');
    if (mediaSalva && kmSalvo && litrosSalvo) {
        document.getElementById('result-ult-media').innerHTML = `Última média: <span>${mediaSalva}</span> Quilômetros por Litro, com <span>${kmSalvo}</span> km e <span>${litrosSalvo}</span> litros.`;
    }
}
function calcMedia() {
    const km = Number(document.getElementById('km').value)
    const litros = Number(document.getElementById('litros').value)
    let media = km / litros;
   // Verifica se existe média, km e litros salvos no localStorage
   const mediaSalva = localStorage.getItem('mediaConsumo');
   const kmSalvo = localStorage.getItem('km');
   const litrosSalvo = localStorage.getItem('litros');
   if (mediaSalva && kmSalvo && litrosSalvo) {
       document.getElementById('result-ult-media').innerHTML = `Última média de consumo: ${mediaSalva} Quilômetros por Litro, com ${kmSalvo} km e ${litrosSalvo} litros.`;
   }

    if (isNaN(media)) {
        document.getElementById('result-media').innerHTML = `Prencha os campos para ter a média de consumo`
        document.querySelector('body').style.background = `darkred`
    } else {
        // Salva a média no localStorage
        localStorage.setItem('mediaConsumo', media.toFixed(2));
        localStorage.setItem('km', km);
        localStorage.setItem('litros', litros);
        document.getElementById('result-media').innerHTML = `<span>${media.toFixed(2)}</span> Quilômetros por Litro`
        document.querySelector('body').style.background = `darkblue`
    }
}

