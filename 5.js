function cariKata(input, cari){
    let counter = 0
    
    // Penarian ke kanan
    for (let i = 0; i < input.length; i++) {
        if (input.substring(i, i + cari.length) == cari) {
            counter++
        }
    }

    // Pencarian dari kiri
    for (let i = input.length; i >= 0; i--) {
        if (input.substring(i, i - cari.length) == cari) {
            counter++
        }
    }

    return counter;
    
}

console.log(cariKata('banananana', 'nana'));
