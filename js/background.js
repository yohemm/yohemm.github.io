const backgroundEffect = document.body.querySelector('.bg')
const nb = (document.body.scrollHeight-window.innerHeight)/1000;
for(let i = 0; i < nb; i++){
    console.log(document.body.clientHeight+document.body.scrollHeight);
    backgroundEffect.innerHTML += `<span class='wp-blur-bg filter-${i} filter-bg' style="bottom: ${(document.body.scrollHeight+window.innerHeight)*((Math.random()*i)/nb)+700}px; left: ${Math.random() < 0.5?document.body.scrollWidth*0.7-200*Math.random():200*Math.random()}px; "></span>`
}