// object literal
let mahasiswa1 = {
    nama: "zidan",
    energi : 10,
    makan: function (porsi){
    this.energi = this.energi+porsi;
    console.log(`halo ${this.nama},selamat makan`);
    }
}

let siswa2 ={
    nama: "fosi",
    energi : 40,

    makan: function (porsi){
        this.energi = this.energi+porsi;
        console.log(`halo ${this.nama},selamat makan`);
    }
}

let siswa3 ={
    nama: "xaxu",
    energi: 40,
    makan : function(porsi){
        this.energi = this.energi+porsi;
        console.log(`halo ${this.nama},selamat makan`);
    }

}

let siswa4 ={
    nama: "qeru",
    power: 1,

    kekuatan: function(energi){
        this.power = this.power +energi;
        console.log(`halo ${this.nama},selamat makan`);
    }
}