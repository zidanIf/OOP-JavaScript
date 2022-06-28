// spead operad
const mhs = ['zidan', 'ishan' , 'fauzi'];
const mhs1 = [...mhs];
mhs1[3]='fajar';

console.log(mhs1);

const data = {
    nama: 'zidan',
    email : 'zidanfauzi32@gmail.com',
    umur : 19
}
const datar = {...data};
console.log(datar);


const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML= huruf;