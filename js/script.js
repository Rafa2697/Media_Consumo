// function abriPage(a){
//     let localPag = document.querySelector('body')
//     let pag = new XMLHttpRequest()

//     pag.onreadystatechange = () => {
//         if(pag.readyState == 4 && pag.status == 200){
//             localPag.innerHTML = pag.response
//         }
//     }

//     pag.open('GET', `../${a}.html`)
//     pag.send()
// }

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

// document.querySelector('#botao1').addEventListener('click', function() {
//     fetch('app2.html')
//         .then(response => response.text())
//         .then(data => {
//             let parser = new DOMParser();
//             let htmlDocument = parser.parseFromString(data, 'text/html');
//             let divContent = htmlDocument.querySelector('body').innerHTML;
//             document.querySelector('body').innerHTML = divContent;
//         })
//         .catch(error => {
//             console.error('Erro:', error);
//         });
// });


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

function displayLastSavedResult() {
    const mediaSalva = localStorage.getItem('mediaConsumo');
    if (mediaSalva) {
      document.getElementById('result-ult-media').innerHTML = `Última média: ${mediaSalva}`;
    }
  }


function calcMedia() {
    const km = Number(document.getElementById('km').value)
    const litros = Number(document.getElementById('litros').value)
    let media = km / litros;

    // Verifica se existe média salva no localStorage
    const mediaSalva = localStorage.getItem('mediaConsumo');
    document.getElementById('result-ult-media').innerHTML = `${mediaSalva}`

    if (isNaN(media)) {
        document.getElementById('result-media').innerHTML = `Prencha os capos para ter a média de consumo`
        document.querySelector('body').style.background = `darkred`
    } else {
        document.getElementById('result-media').innerHTML = `<span>${media.toFixed(2)}</span> Quilômetros por Litro`
        document.querySelector('body').style.background = `darkblue`
        salvarMedia();

    }


}

function salvarMedia() {
    const media = document.getElementById('result-media').textContent;
    console.log('Salvando média:', media);
    localStorage.setItem('mediaConsumo', media);
}
window.onload = function () {
    displayLastSavedResult();
    calcMedia(); // Perform initial calculation
  };

document.getElementById('km').addEventListener('change', () => {
    calcMedia();
    displayLastSavedResult()
});

document.getElementById('litros').addEventListener('change', () => {
    calcMedia();
    displayLastSavedResult()
})

