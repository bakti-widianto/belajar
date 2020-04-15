// membuat deret KASKUS

//  function deretKaskus(n){
//     var arr = [];
//     var x = 0;
//     for(var i = 0; i < n; i++){
//         x += 3;
//         if(x % 5 === 0 && x % 6 === 0){
//             arr.push('KASKUS');
//         }else if(x % 5 === 0){
//             arr.push('kas');
//         }else if(x % 6 === 0){
//             arr.push('kus');
//         }else {
//             arr.push(x)
//         }
//     }
//     return arr;
//  }


//  console.log(deretKaskus(10));


function deretKaskus(n) {
    let arr = [];

    for (let i = 3; i <= n * 3; i += 3) {
        console.log(i)
        if (i % 5 == 0 && i % 6 == 0) {
            arr.push('KASKUS')
        } else if (i % 5 == 0) {
            arr.push('KAS')
        } else if (i % 6 == 0) {
            arr.push('KUS')
        } else {
            arr.push(i)
        }


    }
    return arr
}

console.log(deretKaskus(10))
