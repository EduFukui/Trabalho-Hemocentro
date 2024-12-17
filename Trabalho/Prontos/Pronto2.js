// Buscar Doador por tipo sanguineo
function buscarDoadorTipoAMais () {
    console.log("\n\n\n------------------------\nRESULTADO DA BUSCA: \n----------------------------------------------------------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < lista.length; i++) {
    if (lista[i].tipoSanguineo === "A+") {
        let anoJunto = lista[i].dataAoContrario.substring(0, 4);  
        let mesJunto = lista[i].dataAoContrario.substring(4, 6);
        let diaJunto = lista[i].dataAoContrario.substring(6, 8);
        let dataCorreta = diaJunto + "/" + mesJunto + "/" + anoJunto;
    console.log(`${lista[i].nome} . ${lista[i].idade} . ${lista[i].peso} . ${lista[i].tipoSanguineo} . ${dataCorreta}`);
    }
}
console.log("----------------------------------------------------------------------------")
};

function buscarDoadorTipoBMais () {
    console.log("\n\n\n------------------------\nRESULTADO DA BUSCA: \n----------------------------------------------------------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < lista.length; i++) {
    if (lista[i].tipoSanguineo === "B+") {
        let anoJunto = lista[i].dataAoContrario.substring(0, 4);  
        let mesJunto = lista[i].dataAoContrario.substring(4, 6);
        let diaJunto = lista[i].dataAoContrario.substring(6, 8);
        let dataCorreta = diaJunto + "/" + mesJunto + "/" + anoJunto;
    console.log(`${lista[i].nome} . ${lista[i].idade} . ${lista[i].peso} . ${lista[i].tipoSanguineo} . ${dataCorreta}`);
    }
}
console.log("----------------------------------------------------------------------------")
};

function buscarDoadorTipoABMais () {
    console.log("\n\n\n------------------------\nRESULTADO DA BUSCA: \n----------------------------------------------------------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < lista.length; i++) {
    if (lista[i].tipoSanguineo === "AB+") {
        let anoJunto = lista[i].dataAoContrario.substring(0, 4);  
        let mesJunto = lista[i].dataAoContrario.substring(4, 6);
        let diaJunto = lista[i].dataAoContrario.substring(6, 8);
        let dataCorreta = diaJunto + "/" + mesJunto + "/" + anoJunto;
    console.log(`${lista[i].nome} . ${lista[i].idade} . ${lista[i].peso} . ${lista[i].tipoSanguineo} . ${dataCorreta}`);
    }
}
console.log("----------------------------------------------------------------------------")
};

function buscarDoadorTipoOMais () {
    console.log("\n\n\n------------------------\nRESULTADO DA BUSCA: \n----------------------------------------------------------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < lista.length; i++) {
    if (lista[i].tipoSanguineo === "O+") {
        let anoJunto = lista[i].dataAoContrario.substring(0, 4);  
        let mesJunto = lista[i].dataAoContrario.substring(4, 6);
        let diaJunto = lista[i].dataAoContrario.substring(6, 8);
        let dataCorreta = diaJunto + "/" + mesJunto + "/" + anoJunto;
    console.log(`${lista[i].nome} . ${lista[i].idade} . ${lista[i].peso} . ${lista[i].tipoSanguineo} . ${dataCorreta}`);
    }
}
console.log("----------------------------------------------------------------------------")
};

function buscarDoadorTipoAMenos () {
    console.log("\n\n\n------------------------\nRESULTADO DA BUSCA: \n----------------------------------------------------------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < lista.length; i++) {
    if (lista[i].tipoSanguineo === "A-") {
        let anoJunto = lista[i].dataAoContrario.substring(0, 4);  
        let mesJunto = lista[i].dataAoContrario.substring(4, 6);
        let diaJunto = lista[i].dataAoContrario.substring(6, 8);
        let dataCorreta = diaJunto + "/" + mesJunto + "/" + anoJunto;
    console.log(`${lista[i].nome} . ${lista[i].idade} . ${lista[i].peso} . ${lista[i].tipoSanguineo} . ${dataCorreta}`);
    }
}
console.log("----------------------------------------------------------------------------")
};

function buscarDoadorTipoBMenos () {
    console.log("\n\n\n------------------------\nRESULTADO DA BUSCA: \n----------------------------------------------------------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < lista.length; i++) {
    if (lista[i].tipoSanguineo === "B-") {
        let anoJunto = lista[i].dataAoContrario.substring(0, 4);  
        let mesJunto = lista[i].dataAoContrario.substring(4, 6);
        let diaJunto = lista[i].dataAoContrario.substring(6, 8);
        let dataCorreta = diaJunto + "/" + mesJunto + "/" + anoJunto;
    console.log(`${lista[i].nome} . ${lista[i].idade} . ${lista[i].peso} . ${lista[i].tipoSanguineo} . ${dataCorreta}`);
    }
}
console.log("----------------------------------------------------------------------------")
};

function buscarDoadorTipoABMenos () {
    console.log("\n\n\n------------------------\nRESULTADO DA BUSCA: \n----------------------------------------------------------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < lista.length; i++) {
    if (lista[i].tipoSanguineo === "AB-") {
        let anoJunto = lista[i].dataAoContrario.substring(0, 4);  
        let mesJunto = lista[i].dataAoContrario.substring(4, 6);
        let diaJunto = lista[i].dataAoContrario.substring(6, 8);
        let dataCorreta = diaJunto + "/" + mesJunto + "/" + anoJunto;
    console.log(`${lista[i].nome} . ${lista[i].idade} . ${lista[i].peso} . ${lista[i].tipoSanguineo} . ${dataCorreta}`);
    }
}
console.log("----------------------------------------------------------------------------")
};

function buscarDoadorTipoOMenos () {
    console.log("\n\n\n------------------------\nRESULTADO DA BUSCA: \n----------------------------------------------------------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < lista.length; i++) {
    if (lista[i].tipoSanguineo === "O-") {
        let anoJunto = lista[i].dataAoContrario.substring(0, 4);  
        let mesJunto = lista[i].dataAoContrario.substring(4, 6);
        let diaJunto = lista[i].dataAoContrario.substring(6, 8);
        let dataCorreta = diaJunto + "/" + mesJunto + "/" + anoJunto;
    console.log(`${lista[i].nome} . ${lista[i].idade} . ${lista[i].peso} . ${lista[i].tipoSanguineo} . ${dataCorreta}`);
    }
}
console.log("----------------------------------------------------------------------------")
};



function buscarDoadorTipoSangue () {
    console.log("\n\n\n-Tipos sanguineos: \n1. A+ \n2. B+ \n3. AB+ \n4. O+ \n5. A- \n6. B- \n7. AB- \n8. O- \n9. Voltar");

    const escolhaDoSangue = Number(readline.question('Digite o numero conforme o tipo sanguineo desejado: '))

    switch (escolhaDoSangue) {
        case 1: 
        buscarDoadorTipoAMais()
            break;
        case 2:
        buscarDoadorTipoBMais()
            break;
        case 3:
        buscarDoadorTipoABMais()
            break;
        case 4:
        buscarDoadorTipoOMais()
            break;
        case 5:
        buscarDoadorTipoAMenos() 
            break;
        case 6:
        buscarDoadorTipoBMenos()
            break;
        case 7:
        buscarDoadorTipoABMenos()
            break;
        case 8:
        buscarDoadorTipoOMenos()
            break;
        case 9:
            console.log("\nVoltando...")
            return;
        default:
            console.log("\nOpcao invalida\n");
            return;
    }

};