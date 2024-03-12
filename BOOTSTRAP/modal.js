const myModal = new bootstrap.Modal('#exampleModal', {
    keyboard: false , backdrop: "static"
  })

const modalEl = document.querySelector("#exampleModal");
const emailInputEl =  document.querySelector("#exampleInputEmail1");
modalEl.addEventListener('shown.bs.modal', function(){
    emailInputEl.focus();
})