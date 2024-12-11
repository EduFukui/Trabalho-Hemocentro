function buscarDoadorTipoA () {
    console.log("\n\n\n------------------------\nRESULTADO DA BUSCA: \n----------------------------------------------------------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    
for (let i = 0; i < listaDeDoadores.length; i++) {
    if (listaDeDoadores[i].tipoSanguineo === "A+" ) {



        for (let i = 0; i < listaDeDoadores.length; i++) {
            if (listaDeDoadores[i].tipoSanguineo === "A+") {
                console.log(`${listaDeDoadores[i].nome} . ${listaDeDoadores[i].idade} . ${listaDeDoadores[i].peso} . ${listaDeDoadores[i].tipoSanguineo} . ${listaDeDoadores[i].dataUltimaDoacao}`);
            } else {
                console.log('nada');
            }
        }

        console.log(` 
        ${listaDeDoadores[i].nome}
        ${listaDeDoadores[i].idade}
        ${listaDeDoadores[i].peso}
        ${listaDeDoadores[i].tipoSanguineo}
        ${listaDeDoadores[i].dataUltimaDoacao} 
        `);}

        else {console.log('nada')}
       
        }


        /*for (let number = 10; number >=0; number--) {
            if (number === 0) {console.log("Booom")}
            else if(number % 2 === 0) {console.log("Tic")}
            else {console.log("Tac")}
        }*/
        
    console.log("----------------------------------------------------------------------------")
    
};