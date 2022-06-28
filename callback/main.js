//fetch
// searchButton.addEventListener('click',function(){
    
    //     const inputKeyword= document.querySelector('.input-keyword');
    //     fetch('http://www.omdbapi.com/?apikey=e4eda7da&s=' + inputKeyword.value)
    //     .then(response => response.json())
    //     .then(response => {
        //         const movies = response.Search;
//         let cards = '';
//         movies.forEach(m => cards += showcards(m));
//         const moviecontainer = document.querySelector('.movie-container');
//         moviecontainer.innerHTML= cards;

//         // ketika tombol di klik
//         const modalDetailButon = document.querySelectorAll('.modal-detail-button');

//         modalDetailButon.forEach(btn =>{           
    //             btn.addEventListener('click',function(){
        //                 const imdbid= this.dataset.imdbid;
        //                 fetch('http://www.omdbapi.com/?apikey=e4eda7da&i=' + imdbid)
//                 .then(response => response.json())
//                 .then(m => {
//                     const movieDetails =  showmoviedetail(m);
//                     const modalBody = document.querySelector('.modal-body'); 
//                     modalBody.innerHTML= movieDetails;
//                 });
//             });
//         });
//     });
// });




const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function(){
    const inputKeyword = document.querySelector('.input-keyword');
    const movies = await getMovies(inputKeyword.value);
    updateUI(movies);
});

function getMovies(keyword){
    return fetch('http://www.omdbapi.com/?apikey=e4eda7da&s=' + keyword)
        .then(response => response.json())
        .then(response => response.Search)

} 

function updateUI(movies){
    let cards = '';
    movies.forEach(m => cards += showcards(m));
    const moviecontainer = document.querySelector('.movie-container');
    moviecontainer.innerHTML = cards;
}

// ketika tombol di click
// event banding
document.addEventListener('click',async function(e){
    if(e.target.classList.contains('modal-detail-button')){
        const imdbid = e.target.dataset.imdbid;
        const movieDetails = await getMoviesDetails(imdbid);
        updateUIDetail(movieDetails);
    }
});

function getMoviesDetails(imdbid) {
    return fetch('http://www.omdbapi.com/?apikey=e4eda7da&i=' + imdbid)
                .then(response => response.json())
                .then(m => m)
};

function updateUIDetail(m){
    const movieDetails =  showmoviedetail(m);
                    const modalBody = document.querySelector('.modal-body'); 
                    modalBody.innerHTML= movieDetails;
}


















function showcards(m){
   return `<div class="col-md-4 my-3">
                        <div class="card">
                            <img src="${m.Poster}" class="card-img-top" alt="">
                            <div class="card-body">
                            <h5 class="card-title">${m.Title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                            <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                            </div>
                        </div>
                    </div>`;
}

function showmoviedetail(m){
    return ` <div class="container-fluid">
    <div class="row">
        <div class="col-md-3">
            <img src="${m.Poster}" class="img-fluid" alt="">
        </div>
        <div class="col-md">
            <ul class="list-group">
                <li class="list-group-item"><h4>${m.Title}</h4>${m.Year}</li>
                <li class="list-group-item"><strong>Director: </strong>${m.Director}</li>
                <li class="list-group-item"><strong>Actor :</strong>${m.Actors}</li>
                <li class="list-group-item"><strong>Writer:</strong>${m.Writer}</li>
                <li class="list-group-item"><strong>Plot</strong>${m.Plot}</li>
            </ul>
        </div>
    </div>
</div>`;
}