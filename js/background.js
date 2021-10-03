

const idxArray = Array(6).fill().map((v,i)=>i);
const randomIdx = Math.floor(Math.random()*idxArray.length);

document.body.style.backgroundImage = `url("images/${randomIdx}.jpg")`;


