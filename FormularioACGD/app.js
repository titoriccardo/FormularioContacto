const nombre = document.getElementById("name")
const email = document.getElementById("email")
const asunto = document.getElementById("asunto")
const message = document.getElementById("message")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
const parrafo2 = document.getElementById("warnings2")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
        warnings += `Falta Nombre <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `Falta Correo <br>`
        entrar = true
    }
    if(asunto.value.length < 4){
        warnings += `Escriba Asunto <br>`
        entrar = true
    }
    if(message.value.length < 4){
        warnings += `Escriba Mensaje <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo2.innerHTML = "El mensaje fue enviado correctamente!"
    }
})
