/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

//funzione che genera numero random avente un minimo e un massimo

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//funzione che stabilisce se la somma di due numeri sia pari o dispari

function even_odd (numbers_sum) {

    if (numbers_sum % 2 == 0){
        return "pari";
        /* console.log("la somma dei due numeri è pari") */
    } else {

        return "dispari";
        /* console.log("la somma dei due numeri è dispari") */
    }

}

//chiedo ad utente di scegliere pari o dispari

let user_choice = String(prompt("Scegli pari o dispari"));
console.log(`Hai scelto ${user_choice}`);

//stabilisco una condizione, per escludere i casi in cui l'utente digiti altro

if (user_choice === "pari" || user_choice === "dispari"){

    //chiedo ad utente di inserire un numero da 1 a 5

    let user_num = parseInt(prompt("Scegli un numero da 1 a 5"));
    console.log(`Il tuo numero è : ${user_num}`);

    if (user_num > 5 ){

        alert("Attenzione! Scegli un numero da 1 a 5.")

    } 

    //invoco la funzione che genera un numero random da 1 a 5 da assegnare al pc
    let pc_random_num = getRandomInteger(1, 5);
    console.log(`Il numero del pc è : ${pc_random_num}`);

    //sommiamo i due numeri
    let sum = user_num + pc_random_num ;
    console.log(`La somma dei due numeri è: ${sum}`);
    
    let result = even_odd(sum);

    //Dichiariamo chi ha vinto

    if (result === user_choice){

        console.log("Hai vinto")

    } else {

        console.log("Hai perso")

    }
    

} else {

    alert("Attenzione! La tua scelta non è corretta.")
}







