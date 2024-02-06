const backgroundEffect = document.body.querySelector('.bg')
for(let i = 0; i*500 < document.body.scrollHeight+window.innerHeight; i++){
    console.log(document.body.clientHeight+document.body.scrollHeight);
    backgroundEffect.innerHTML += `<span class='filter-${i} filter-bg' style="top: ${(document.body.scrollHeight-800)*(Math.random()+i/7)}px; left: ${Math.random() < 0.5?document.body.scrollWidth*0.7-200*Math.random():200*Math.random()}px; "></span>`
}