const inputs = document.querySelectorAll('input, textarea');
const formGroups = document.querySelectorAll(".form-group")
const progressbar = document.querySelector('progress');
const nav = document.querySelector('nav');
const name = nav.querySelector('.name');
const github = nav.querySelector('.github');
let sub = document.querySelector('input[type="submit"]');
let contentInputs = {}; 
progressbar.max = formGroups.length - 1;

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let input
window.addEventListener('scroll', (event) => {
  if(window.scrollY > 90) {
    nav.classList.add('nav-sticked');
    name.classList.remove('hide')
    github.classList.add('hide')
  }else{
    nav.classList.remove('nav-sticked');
    name.classList.add('hide')
    github.classList.remove('hide')
  }
});
document.addEventListener('DOMContentLoaded', (e) => {
  formGroups.forEach(inputContainer => {
    input = inputContainer.querySelector('input, textarea');
    if(input.value != ""){
      input.parentNode.classList.add('animation');
    }else if(input.value == ""){
      input.parentNode.classList.remove('animation');
    }
  })
  for (let i = 0; i < formGroups.length-1; i++) {
    input = formGroups[i].querySelector('input, textarea');
    if (input.value != '') {
      contentInputs[i] = true;
      progressbar.value += 1;
    }
    else {
      contentInputs[i] = false;
    }
  }
})
for (let i = 0; i < inputs.length - 1; i++){
  let field = inputs[i];
  field.addEventListener('input', (e) => {
    if(e.target.value != ""){
      e.target.parentNode.classList.add('animation');
      console.log(emailRegex.test(e.target.value))
    }else if(e.target.value == ""){
      
      e.target.parentNode.classList.remove('animation');
    }
  })
}

for (let i = 0; i < formGroups.length-1; i++) {
  const formGroup = formGroups[i];
  formGroup.addEventListener('change', (event)=> {
    if(formGroup.querySelector('datalist')){
      let inDataList = false;
      formGroup.querySelectorAll('option').forEach(option =>{
        
        if(formGroup.querySelector('input, textarea').value == option.innerHTML){
          console.log('good datalist')
          console.log(contentInputs)
          if(contentInputs[i] == false){
            console.log('change bar')
            contentInputs[i] = true;
            formGroup.querySelector('.err').innerHTML = null;
            progressbar.value += 1;
            inDataList = true;
          }
        }
      })
      if(inDataList == false && formGroup.querySelector('input, textarea').value != ''){
        formGroup.querySelector('input, textarea').value = '';
        formGroup.querySelector('.err').innerHTML = "Les élements ne sont pas dans la liste proposer";
      }
      if(contentInputs[i] == true && inDataList == false){
        console.log(formGroup.querySelector('input, textarea').value)
        contentInputs[i] = false;
        progressbar.value -= 1;
      }
    }else if(formGroup.querySelector('input[type="email"]')){
      if(emailRegex.test(formGroup.querySelector('input[type="email"]').value)){
        if(contentInputs[i] == false){
          contentInputs[i] = true;
          progressbar.value += 1;
        }
      }else if(contentInputs[i] == true && emailRegex.test(formGroup.querySelector('input[type="email"]')) == false){
        console.log(formGroup.querySelector('input, textarea').value)
        contentInputs[i] = false;
        progressbar.value -= 1;
      }
      if(formGroup.querySelector('input[type="email"]').value != '' && emailRegex.test(formGroup.querySelector('input[type="email"]').value) === false){
        formGroup.querySelector('.err').innerHTML = "Le format email est requis";
        
      }else{
        formGroup.querySelector('.err').innerHTML = null;
      }
    }
    else if (formGroup.querySelector('input, textarea').value != '' && contentInputs[i] == false) {
      contentInputs[i] = true;
      progressbar.value += 1;
      formGroup.querySelector('.err').innerHTML = null;
    }else if (contentInputs[i] == true) {
      if(formGroup.querySelector('input, textarea').value == ''){
        console.log(formGroup.querySelector('input, textarea').value)
        contentInputs[i] = false;
        progressbar.value -= 1;
      }
    }
    if(progressbar.value == progressbar.max){
      sub.disabled = false;
      sub.style.backgroundImage = "";
    }else{
      sub.disabled = true;
      sub.style.backgroundImage = "var(--linearGray)";
    }
  })
}


