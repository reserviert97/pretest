const array = [6,22,34,15,2,13,26,57,42,32]

// Mencari bilangan terkecil
let terkecil = 0
for (let i = 0; i < array.length; i++) {
    if (i == 0) {
        terkecil = array[i]
    }
    if (terkecil > array[i]) {
        terkecil = array[i]
    }
}
console.log('Bilangan terkecil = '+terkecil);


// Mencari bilangan terbesar
let terbesar = 0
for (let i = 0; i < array.length; i++) {
    if (i == 0) {
        terbesar = array[i]
    }
    if (terbesar < array[i]) {
        terbesar = array[i]
    }
}
console.log('Bilangan terbesar = '+terbesar);

// Sortir arrau dari yang terkecil ke yang paling besar
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if(array[j] > array[j+1]){
            let temp = 0;
            temp = array[j]
            array[j] = array[j+1]
            array[j+1] = temp
        }
    }
}
console.log("hasil sortir dari yang terkecil ke yang paling besar " + array);

// Sortir array dari yang terbesar ke yang paling kecil
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if(array[j] < array[j+1]){
            let temp = 0;
            temp = array[j]
            array[j] = array[j+1]
            array[j+1] = temp
        }
    }
}
console.log("hasil sortir dari yang paling besar ke yang paling kecil " + array);

