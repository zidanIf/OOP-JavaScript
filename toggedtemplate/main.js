const nama ='zidan';
const umur = 19;

function highlight(string,...values){
    return string.reduce((result,str,i)=>`${result}${str}
    <span class="hl">${values[i] || ''} </span>`,'');
}

const str = highlight`halo,nama saya${nama},saya umur ${umur}tahun.`;
document.body.innerHTML=str;