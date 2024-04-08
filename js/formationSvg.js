window.onload = ()=>{
    let svgAnims = document.querySelectorAll(".svg-animate");
    for(let svgAnim of svgAnims){    
    for (let i = 0; i < svgAnim.children.length; i++) {
    svgAnim.children[i].style.animationDelay = `${i * 0.25}s`;
    svgAnim.children[i].classList.add('path');
    }
    const backgroundEffect = document.body.querySelector('.bg')
    const height = document.body.clientHeight-500;
    console.log(document.body.clientHeight);
for(let i = 0; i*500 < height; i++){
    backgroundEffect.innerHTML += `<span class='filter-${i} filter-bg' style="top: ${(height)*(i/15)}px; left: ${Math.random() < 0.5?document.body.scrollWidth*0.7-200*Math.random():200*Math.random()}px; "></span>`
}
}
};