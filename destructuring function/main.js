// destructuring function
// object
const data = {
    nama: "zidan",
    email : "zidanfauzi32@gmail.com",
    umur : 19
};

const {nama,email,umur} = data;

console.log(nama);
console.log(email);
console.log(umur);


// array skip item
const test =["satu","dua","tiga","empat","lima"];
const [a, ,c,d,e] = test;

console.log(c);

// return value pada function
function coba (){
    return[1,0];   
}
const [n,m] = coba();
console.log(m);

// rest parameter
const [w, ...simpan] = [6,9,8];
console.log(w);
console.log(simpan);