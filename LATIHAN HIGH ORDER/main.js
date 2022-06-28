// ambil semua element video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih hanya  'javascript lanjutan
const jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil durasi masing-masing
.map(item => item.dataset.duration)

// UBAH DURASI MENJADI INTEGER
.map(waktu =>{
    const parts = waktu.split(':').map(part => parseFloat(part));
    return (parts[0]*60 + parts[1]);
})
// jumlahkan seluruh element
.reduce((total,detik)=>total + detik);

// mengubah format 
const jam = Math.floor(jsLanjut/ 3600);
const menit = Math.floor((jsLanjut% 3600) / 60);
const detik = jsLanjut % 60;

// simpan dom
const pDurasi= document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} jam ,${menit} Menit ,${detik} Detik.`;

const jmlhvideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;

const pjmlvideo = document.querySelector('.jumlah-video');
pjmlvideo.textContent = `${jmlhvideo} Video.`;

const angka =``