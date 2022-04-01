/* Palidroma
Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma */

/* Definizione
Il palindromo è una sequenza di lettere o di sillabe che possa essere letta anche in senso contrario dando come esito o la sequenza di partenza o un’altra sequenza pure dotata di senso. (es. otto, osso, level )*/


//Chiedo all'untente di inserire una parola
let user_word = String(prompt("Ciao, Inserisci una parola. Verificherò se è palindroma"));
/* console.log(user_word) */
/* console.log(typeof user_word) */

//Creo una funzione per capire se la parola inserita è palindroma

function palindrome_word (){
//Converto la parola in una sequenza di lettere che comporranno un array (appunto: oltre ad Array.from() si può usare anche il metodo .split(''))

let array_word = Array.from(user_word);
/* console.log(array_word) */

//inverto l'ordine del mio array

let array_word_reverse = array_word.reverse();
/* console.log(array_word_reverse); */

//trasformo il mio array in una nuova parola (stringa) senza che gli elementi siano separati con le virgole (appunto: con .toString() restituisce gli elementi separati)

let new_word = array_word_reverse.join("");
/* console.log(new_word) */

//Se le due stringhe sono uguali, allora la parola inserita dall'utente sarà palindroma

//imposto la condizione con IF

if (user_word === new_word){

    console.log(`La parola ${user_word} è palindroma`);

} else {

    console.log(`La parola ${user_word} non è palindroma`);
}

}

//invoco il funzionamento della mia funzione
palindrome_word()





















