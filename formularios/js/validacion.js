function valida(event){
    //evita que el formulario se envie
    event.preventDefault();

    //obtener los valores de usuario y contraseña
    const usuario = document.getElementById("usuario").value;
    const contrasenia = document.getElementById("contrasenia").value;

    // validar usuarios

    if(usuario === "mauricioos" && contrasenia === "uno"){
        alert("inicio de sesión exitoso");
        window.location.href = "home.html";
    }else{
        alert('Termino de subscripcion, pasar a pagar siguiente periodo');

    }


}