const colors = ["green","red", "rgb(93,93,208)", "#f3f3f3"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', ()=>{
    const ranNum = getRanNum();
    document.body.style.backgroundColor = colors[ranNum];
    color.textContent = colors[ranNum];
});

function getRanNum(){
    return Math.floor(Math.random()*colors.length)
}
