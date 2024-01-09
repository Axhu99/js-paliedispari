// Chiedo all'utente PARI o DISPARI e un numero da 1 a 5
const choice = prompt('Pari o Dispari').trim();
const choiceNumber = parseInt(prompt('scegli un numero tra 1 e 5'));

//! Validazioni
if (choice !== 'pari' && choice !== 'dispari'){
    alert('devi scegliere PARI o DISPARI!');
}

if(isNaN(choiceNumber)){
    alert('devi scegliere un numero')

} else if (choiceNumber < 1 || choiceNumber > 5){
    alert('Il numero deve essere compreso tra 1 e 5');
}


// genero un numero casuale compreso tra 1 e 5 (compresi)
const randomNumberCPU = Math.floor(Math.random()*5)+1;
console.log(randomNumberCPU)

// sommo i due numeri 
const sum = choiceNumber + randomNumberCPU;
console.log(sum)

// creo una funzione che da come risultato TRUE o FALSE in base a se il numero e' PARI
function isEven (num){
    return num % 2 === 0;
}

// controllo se la scenta fatta dall'utente corrisponde con il risultato e lo stampo
if (choice === 'pari' && isEven(sum)){ 
    console.log('hai vinto'); // si potrebbe migliore con un FLAg e in base a se e' TRUE o FALSE stmapare  
}
else if (choice === 'dispari' && !isEven(sum)){ 
    console.log('hai vinto');
} else console.log('hai perso')
