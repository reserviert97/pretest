let musim = 'semi'
let tinggiPohon = 1
let totalTahun = 4

function pohonImajinasi(x, y) {
    if (y == 0) {
        return 'Tinggi akhir pohon ' + x
    }
    // Musim Semi
    x = x * 2
    console.log('Musim semi berakhir tinggi pohon saat ini : '+x)

    // Musim Gugur
    x = x + 1
    console.log('Musim gugur berakhir tinggi pohon saat ini : '+x)

    return pohonImajinasi(x, y-1)
}

console.log(pohonImajinasi(4, 3))
