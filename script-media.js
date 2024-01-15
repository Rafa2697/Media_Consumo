




function calcMedia(){
    const km = Number(document.getElementById('km').value)
    const litros = Number(document.getElementById('litros').value)
    let media = km / litros;
    console.log(media)
    if (isNaN(media)){
        document.getElementById('result-media').innerHTML = `Prencha os capos para ter a média de consumo`
        document.querySelector('body').style.background = `darkred` 
    }else{
        document.getElementById('result-media').innerHTML = `<span>${media.toFixed(2)}</span> Quilômetros por Litro`
        document.querySelector('body').style.background = `darkblue` 
    }

    
}