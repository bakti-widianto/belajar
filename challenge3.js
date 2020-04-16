//ngbuat fungsi yang bisa ngubah number ke huruf romawi

// function romawi(n) {
//     var desi = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
//     var roma = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
//     var hasil= '';

//     for(var i = 0; i < desi.length; i++) {
//         while(n >= desi[i]){
//             n -= desi[i];
//             hasil += roma[i];

//         }
//     }

// return hasil
// }

// console.log('Script Testing untuk Konversi Romawi\n');
// console.log('input | expexted | result');
// console.log('------|----------|-------');
// console.log('4     | IV       | ', romawi(4));
// console.log('9     | IX       | ', romawi(9));
// console.log('13    | XIII     | ', romawi(13));
// console.log('1453  | MCDLIII  | ', romawi(1453));
// console.log('1646  | MDCXLVI  | ', romawi(1646));


// /*output
// input | expexted | result
// ------|----------|-------
// 4     | IV       | IV
// 9     | IX       | IX
// 13    | XIII     | XIII
// 1453  | MCDLIII  | MCDLII
// 1646  | MDCXLVI  | MDCXLVI*/



function romawi(n) {
    const kamus = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    }
    let hasil = '';

    console.log(kamus)
    

    for (const romawi in kamus) {   //romawi disini adalah key/property bisa diganti namanya, tapi ngerefer ke key object
          //console.log(kamus[romawi])
        while (n >= kamus[romawi]) {
            hasil += romawi;
            n -= kamus[romawi];


        }

    }

    return hasil
}
romawi(13)

// console.log('Script Testing untuk Konversi Romawi\n');
// console.log('input | expexted | result');
// console.log('------|----------|-------');
// console.log('4     | IV       | ', romawi(4));
// console.log('9     | IX       | ', romawi(9));
// console.log('13    | XIII     | ', romawi(13));
// console.log('1453  | MCDLIII  | ', romawi(1453));
// console.log('1646  | MDCXLVI  | ', romawi(1646));
