const userInput = 5

if (userInput > 0 && userInput < 10) {
  for (let baris = 1; baris <= 5; baris++) {
    let print = ''
    for (let kolom = 0; kolom < baris; kolom++) {
      var p = []
      for(let i = 1; i <= 14; i++){
        let a = 0
        for (let j = 1; j <= i; j++) {
          if (i % j == 0) {
            a++
          }
        }
        if (a == 2) {
          p.push(i)
        }
      }
      print += p[kolom] + ' '
    }
    console.log(print);
}
}
