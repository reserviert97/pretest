let uang = 50000
let hargaMie = 2500

let totalBeli = Math.floor(uang / hargaMie)
let totalBonus = Math.floor(totalBeli / 4)
let total = totalBeli + totalBonus

console.log(`Total mie yang didapatkan si anak : ${total}`)
