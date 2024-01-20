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