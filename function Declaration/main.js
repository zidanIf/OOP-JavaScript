// function declaration
// function Mahasiswa(nama,power){
//     let mahasiswa ={}
//     mahasiswa.nama = nama
//     mahasiswa.power = power

//     mahasiswa.kekuatan = function(max){
//         this.power += max;
//         console.log(`halo ${this.nama},kekuatan maxsimal`);
//     }
//     return mahasiswa;
// }
// let zidan = Mahasiswa("zidan",10);
// let kireng = Mahasiswa ("kireng",30);



function Siswa(nama,energi){
    let siswa ={};

    siswa.nama = nama
    siswa.energi = energi

    siswa.makan = function (porsi){
        this.energi += porsi;
        console.log(`halo ${this.nama},selamat makan`)
    }
    return siswa;
}

let dodi = Siswa("dodi",30);