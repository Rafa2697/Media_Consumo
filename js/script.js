function abriPage(a){
    let localPag = document.querySelector('html')
    let pag = new XMLHttpRequest()

    pag.onreadystatechange = () => {
        if(pag.readyState == 4 && pag.status == 200){
            localPag.innerHTML = pag.response
        }
    }

    pag.open('GET', `../${a}.html`)
    pag.send()
}


function calcGasto(){
    const percurso = Number(document.getElementById('km').value)
    const mediaVeiculo = Number(document.getElementById('media-veiculo').value)
    const valorLitro = Number(document.getElementById('valor-litro').value)

    let gasto = (percurso / mediaVeiculo) * valorLitro;

    
    if (isNaN(gasto)){
        document.getElementById('result-media').innerHTML = `Prencha os capos para ter o resultado`
        document.querySelector('body').style.background = `darkred` 
    }else{
        document.getElementById('result-media').innerHTML = `<span>R$${gasto.toFixed(1)}</span> de gasto com combustivel`
        document.querySelector('body').style.background = `darkblue` 
    }

}

function calcMedia(){
    const km = Number(document.getElementById('km').value)
    const litros = Number(document.getElementById('litros').value)
    let media = km / litros;
  
    if (isNaN(media)){
        document.getElementById('result-media').innerHTML = `Prencha os capos para ter a média de consumo`
        document.querySelector('body').style.background = `darkred` 
    }else{
        document.getElementById('result-media').innerHTML = `<span>${media.toFixed(2)}</span> Quilômetros por Litro`
        document.querySelector('body').style.background = `darkblue` 
    }

    
}