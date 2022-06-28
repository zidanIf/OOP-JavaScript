// rest parameter
function data(...angka){
    return angka.reduce((a,b)=> a/b);
}
console.log(data(1,2,3,4));

function filter(type,...base){
    return base.filter(a => typeof a ===type);
}
console.log(filter('number', 1,2,5 ,'zidan','ishan',true,false));