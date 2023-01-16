
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

// Abfrage, Deklaration
let number01, number02;

number01 = prompt("Bitte erste Zahl eingeben:");
number02 = prompt("Bitte zweite Zahl eingeben:");

// Berechnung: Datentyp Number ist die mittelung, dass es ssich um eine Zahl handelt, nicht einen string
let sum = Number(number01) + Number(number02);

//Ausgabe
console.log("Die Summe der Zahlen ist: " + sum);