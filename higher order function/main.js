// higher order function berfungsi untuk mempersingkat kode program kita
function Angka(n){
    for(let i = 0; i < n ; i++){
        console.log(n);
    }
}
Angka(8);

// contoh 2
function Huruf(hitung){
    for (let i = 0; i < hitung;i++){
        console.log(`angka ini terdiri dari ${hitung}`);
    }
}
Huruf(10);

// FILTER(mengurutkan suatu element)
const angka = [1,2,3,4,5];

const Newangka = angka.filter(a => a >= 2);
    console.table(Newangka);

// MAP(menetapkan suatu element)
const Menetap = angka.map(a => a *2);
console.log(Menetap);

// reduce(melakukan sesuatu pada array)
const reduce = angka.reduce((a,b)=>
a+b);
console.log(reduce);


// chaining menggabungka seluruh element 
const Jumlah = [3,6,4,5,7];

const filter = Jumlah.filter(a => a>3)
.map(a => a+3)
.reduce((a,b)=> a +b )
console.log(filter);
