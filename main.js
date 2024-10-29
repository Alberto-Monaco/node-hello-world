/*Creiamo la prima applicazione con NodeJs:
Iniziate creando un file main.js con un semplice console.log che dica hello node js
fate girare lo script usando node main.js
aggiungete allo script una variabile di ambiente chiamata PIN  con associato numero a piacere es. PIN=666
usate il modulo process per recuperare e stampare in console dalla proprietà env la variabile PIN
ora passate un argomento al vostro script e recuperatene il valore usando process e la proprietà argv per stamparlo in console
Bonus:
se il valore dell'argomento é admin ed il valore di PIN definito é 666 allora stampa in console Welcome Admin
altrimenti stampa Access restricted*/

console.log('Hello Node.js!')

const pin = process.env.PIN
//console.log(pin)
if (!pin) {
	console.error('manca il pin')
	process.exit(1)
}
const argument = process.argv[2]
if (!argument) {
	console.error('manca il argomento')
	process.exit(1)
}
//console.log(argument)
function canAccess(argument, pin) {}
if (argument === 'admin' && pin === '666') {
	console.log('Welcome Admin')
} else {
	console.log('Access restricted')
}

canAccess(argument, pin)
