const eyes = document.querySelectorAll(".secretEye");
const input_password = document.getElementById("inputForm_password");

let mostrar = true;

const newTemplate = ()=>{
    eyes[0].style.display = mostrar?"none":"block";
    eyes[1].style.display = !mostrar?"none":"block";
    input_password.type = !mostrar?"password":"text";
    mostrar = !mostrar;
    
}

eyes[0].addEventListener('click', newTemplate);
eyes[1].addEventListener('click', newTemplate);
