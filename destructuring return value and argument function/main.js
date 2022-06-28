// destructuring return value

// urutan berpengaruh
function kalkulasi(a,b){   
    return[a+b,a - b, a * b , a / b];
}
const [tambah,kurang,kali ,bagi] = kalkulasi(9,9);
console.log(kurang);

// urutan tidak berpengaruh
function Data(n,m){
    return{
        nama : 'zidan',
        umur : 19,
        email: 'zidanfauzi@gmail.com'
    }
}
const{umur,nama,email} = Data();
console.log(nama);




// destructuring function argument
const Database = {
        nama : 'zidan',
        umur : 19,
        email: 'zidanfauzi@gmail.com',
        skill:{
            Html : 'Html',
            css: 'css',
            js: 'javascript'
        }
    }
function cetak({nama,umur,email,skill:{Html,css,js}}){
    return `halo cuy kenalin gw ${nama}, umur gw ${umur}, dan email gw adalah ${email},skill yang gw kuasai saat ini adalah ${Html} ,${css} ,${js}`;
}
console.log(cetak(Database));