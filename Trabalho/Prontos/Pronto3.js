// Lista de Cadastrados  
function listaDeDoadores () {

    console.log("\n-------------------------   LISTAGEM DE DOADORES:   -------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
      
        for (let i = 0; i < lista.length; i++) {
        
            
            let anoJunto = lista[i].dataAoContrario.substring(0, 4);  
            let mesJunto = lista[i].dataAoContrario.substring(4, 6);
            let diaJunto = lista[i].dataAoContrario.substring(6, 8);
            let dataCorreta = diaJunto + "/" + mesJunto + "/" + anoJunto;
            
            console.log(`${lista[i].nome}       | ${lista[i].idade}  |         |  ${lista[i].peso}  |     | ${lista[i].tipoSanguineo}   |        |  ${dataCorreta} `);
        }
    console.log("-----------------------------------------------------------------------------")
}