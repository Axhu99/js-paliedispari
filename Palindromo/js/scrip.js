// chiedo all'utente una parola 
const textUser = prompt("Dammi una parola").trim();

//creo la funzione che mi dara' TRUE o FALSE se la parola e' o meno palidroma
function isPalindroma(text){  
    
    /* const splitText = text.split("");
    const reverseText = splitText.reverse();
    const joinText = reverseText.join("") */

    return text.split('').reverse().join('') === text ? true : false;
}

// stampo il risultato
if (isPalindroma(textUser)){
    console.log('PALINDROMA');
}else{
    console.log('NON PALIDROMA');
}

