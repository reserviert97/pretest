function convertDecimal(nomor){
    const hasil = []
    while(nomor >= 0){
        if (nomor == 0) {
            return "hasilnya : "+ hasil
        }
        if (nomor % 2 == 0) {
            hasil.push(1)
            nomor = nomor / 2
        }else{
            hasil.push(0);
            nomor = Math.floor(nomor / 2)
        }
    }
}

console.log(convertDecimal(12))
