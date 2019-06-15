const userInput = 5;

const prima = [];
for (let i = 1; i <= 100; i++) {
  let a = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j == 0) {
      a++;
    }
  }
  if (a == 2) {
    prima.push(i);
  }
}

if (userInput > 0 && userInput < 10) {
  for (let baris = 1; baris <= 5; baris++) {
    let print = "";
    for (let kolom = 0; kolom < baris; kolom++) {
      print += prima[kolom] + " ";
    }
    console.log(print);
  }
}else {
  console.log('Input harus lebih besar dari 0 dan lebih kecil dari 10');
}
