// function init() {
//     return function (nama) {
//         console.log(nama);
//     }

// }
// let panggilNama = init();
// panggilNama('zidan');
// panggilNama('fauzi');


// closure function
function ucapkanSalam(waktu){
    return function (nama){
        console.log(`halo ${nama}, selamat${waktu}`);
    }
}

let selamatPagi = ucapkanSalam('pagi');
let selamatSiang = ucapkanSalam('siang');
let selamatMalam = ucapkanSalam('malam');

selamatPagi('ian'); 


function kelompok (angkota){
    return function (nama){
        console.log(`halo ${nama}, kamu berada di  kelompok ${angkota}`);
    }
}

kelompok ('1')('zidan');
kelompok ('2')('dan');
kelompok ('3')('idan');
kelompok ('4')('ian');