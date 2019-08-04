const fun = (nEscalones, ...pPermitidos)=>{ // "...pPermitidos" mete los parametros en un Array con ese mismo nombre
    const arr = []                        
    arr[nEscalones] = 1
    for(let escalon = nEscalones-1; escalon>=0; escalon--){
        arr[escalon] = 0
        for (const paso of pPermitidos) {
            if(escalon+paso <= nEscalones){
                arr[escalon] += arr[escalon+paso]
            }
        }
    }
    console.log(`Opciones posibles: ${arr[0]}`)
}

fun(10,3,2,5)
// fun([n escalones], [paso permitido 1], [paso permitido 2] ... [paso permitido n])