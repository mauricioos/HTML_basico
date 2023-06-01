
const urlParams = new URLSearchParams(window.location.search);

const nombre_u = urlParams.get('nombre');
const apellido_p = urlParams.get('apellido_1');
const apellido_m = urlParams.get('apellido_2');
const correo_usr = urlParams.get('correo_1');

// DOM colocar las variables en los tag
document.getElementById('nombre_home').textContent = nombre_u;
document.getElementById('apellido_1_h').textContent = apellido_p + " ";
document.getElementById('apellido_2_h').textContent = apellido_m;
document.getElementById('correo_1_h').textContent = correo_usr;