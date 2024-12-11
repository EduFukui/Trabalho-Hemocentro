const readline = require('readline-sync');

function buscarDoadorTipoSangue () {
    console.log("\n-Tipos sanguineos: \n1. A+ \n2. B+ \n3. AB+ \n4. O+ \n5. A- \n6. B- \n7. AB- \n8. O-");

    const escolhaDoSangue = readline.questionInt('Digite o numero conforme o tipo sanguineo desejado: ')

    switch (escolhaDoSangue) {
        case 1:
            
            break;
        case 2:
           
            break;
        case 3:
            
            break;
        case 4:
            
            break;
        case 5:
        
            return;
        case 6:
            
            return;
        case 7:
            
            return;
        case 8:
            
            return;
        default:
            
            return;
    }

}


/*
    console.log("\nDigite o tipo sanguíneo desejado: ");











    console.log("\nEscolha um Pokemon para adicionar:");
    for (let i = 0; i < PokemonDisp.length; i++) {console.log(`${i+1}. ${PokemonDisp[i].nome}`)}
    const escolha = readline.questionInt('Digite o numero conforme o pokemon: ')

    if (MochilaDoTreinador.length < 6) {
        const pokEscolhido = PokemonDisp[escolha-1];
        MochilaDoTreinador.push(pokEscolhido);
        console.log(`${pokEscolhido.nome} foi adicionado na mochila.`)
    }
    else if (p) {

    }
    else {console.log('Nenhum pokemon disponivel.');
    }*/

buscarDoadorTipoSangue()