const data = {
    nama : 'zidan',
    umur : 19,
    email: 'zidanfauzi32@gmail.com'
}
const input = `<div class="data">
                    <h2> ${data.nama}</h2>
                    <p>${data.email}</p>
                </div>`;
console.log(input);


// latihan template literal 
const mhs = {
    nama: "zexe",
    email: "zexe@gmail.com"
};

const el = `<div class="mhs">
                <h2> nama :${mhs.nama}</h2>
                <span class="email"> email: ${mhs.email}</span>
            </div>`;

// document.body.innerHTML = el;


// lopping
const siswa = [
{
    nama: "sis",
    email: "sis@gmail.com"
},
{
    nama: "wa",
    email: "wa@gmail.com"
},
{
    nama: "is",
    email: "is@gmail.com"
}
];

const al =`<div class ="siswa">
    ${siswa.map(m => `<ul>
        <li>${m.nama}</li>
        <li>${m.email}</li>
    <ul>`).join("")}
</div>`;
// document.body.innerHTML= al;


const alat = [
    {
        nama : "speaker",
        warna : "hijau"
    },
    {
        nama : "cpu",
        warna : "hitam"
    },
    {
        nama : "mouse",
        warna : "merah"
    }
];

const gbng = `<div class="alat">
${alat.map(l => `<ul>
    <li>${l.nama}</li>
    <li>${l.warna}</li>
</ul>`).join("")}
</div>`;

document.writeln(gbng);








































// conditional
const lagu = {
    judul :"tetap dalam jiwa",
    penyanyi : "isyana",
    feat: "ray"
}

const datalagu = `<div  class="datalagu">
<ul>
<li>${lagu.penyanyi}</li>
<li>${lagu.judul} ${lagu.feat ? `(feat .${lagu.feat})`: ""}</li>
</ul>
</div>`;

// document.body.innerHTML= datalagu;


// nested
function cetakmatakuliah(matakuliah){
    return`
    <ol>
        ${matakuliah.map(mk=>`<li>${mk}</li>`).join('')}
    </ol>
    ;`
}
const random = {
    nama: "zidan",
    semester: 5,
    matakuliah:[
        'rekayasa perangkat lunak',
        'pemrograman web',
        'desain grafis'
    ]
};

const il = `<div class="random">
<h2>${random.nama}</h2>
<span class="semester">semester :${random.semester}</span>
<h4>mata kuliah:</h4>
${cetakmatakuliah(random.matakuliah)}
</div>`;

// document.body.innerHTML = il;

