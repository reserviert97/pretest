const alas = 5
const tinggi = 5

if ( 0 < alas < 10 ) {
  for (let i = 1; i <= 5; i++) {
    var string = ""
    for (let j = 1; j <= i; j++) {
      string += "*"
    }
    console.log(string);
  }
}else {
  console.log("maaf angka alas harus lebih besar dari nol dan lebih kecil dari 10");
  
}


