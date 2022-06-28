// promise
let ditepati = true;
const janji = new Promise((resolve,reject)=>{
    if(ditepati)
    {
        resolve('janji telah di tetapi');
    }else{
        reject('ingkar janji');
    }
});

janji
.then(ponse => console.log('ok! :' + ponse))
.catch(Response => console.log('kenapa! :' + Response))

const film = new Promise (resolve =>{
    setTimeout(()=>{
        resolve([{
            judul:'anu',
            sutradara: 'zidan',
            pemeran : 'dody,dadu'
        }]);
},1000);
});

const cuaca = new Promise (resolve =>{
    setTimeout(()=>{
        resolve([{
            kota : 'bekasi',
            temp : 20,
            kondisi : 'cerah berawan'
            }]);
        },5000);
    });


    Promise.all([film,cuaca])
    .then(response => {
        const [film,cuaca] = response;
        console.log(film);
        console.log(cuaca);
    });