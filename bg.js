
const backgroundEffect = document.body.querySelector('.bg')
for(let i = 0; i*500 < document.body.scrollHeight; i++){
    backgroundEffect.innerHTML += `<span class='filter-${i} filter-bg' style="top: ${document.body.scrollHeight*Math.random()}px; left: ${Math.random() < 0.5?document.body.scrollWidth-500-200*Math.random():200*Math.random()}px; "></span>`
}