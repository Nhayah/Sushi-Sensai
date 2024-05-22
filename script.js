let inputs = document.getElementsByClassName("formulario__input");

for(let i = 0; i < inputs.length; i++){
    inputs[i].addEventListener("keyup", function(){
        if(this.value.length >= 1){
            this.nextElementSibling.classList.add("fijar");
        }else{
            this.nextElementSibling.classList.remove("fijar")
        }
    });
}s

document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');
    
    window.addEventListener('load', function() {
        preloader.style.display = 'none';
        content.style.display = 'block';
        document.body.style.overflow = 'auto'; // Restaurar el desplazamiento
    });
});
