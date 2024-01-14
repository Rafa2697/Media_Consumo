




function calcMedia(){
    const km = Number(document.getElementById('km').value)
    const litros = Number(document.getElementById('litros').value)
    let media = km / litros;

    if (isNaN(km) || isNaN(litros)){
        document.getElementById('result-media').innerHTML = `${media} Quilômetros por Litro`
    }else{
        
        document.getElementById('result-media').innerHTML = (`Prencha os capos para ter a média de consumo`)
    }

    
}