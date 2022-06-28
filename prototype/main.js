function siswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;
}
siswa.prototype.makan = function (porsi) {
    this.energi += porsi;
    return `halo ${this.nama},selamat makan`;
}

let dan = new siswa('dan', 10);

// class
class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }
    makan(porsi) {
        this.energi += porsi;
        return `halo ${this.nama},selamat datang`;
    }
}

let zidan = new Mahasiswa('zidan', 10);

// prototype
var myObject = function(name){
    this.anu = name;
    return this;
};
 
console.log(typeof myObject.prototype); // object
 
myObject.prototype.getName = function(){
    return this.zidan;
};