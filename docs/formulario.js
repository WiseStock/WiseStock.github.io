function enviarCorreo() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    var contenido = "Nombre: " + nombre + "\n";
    contenido += "Correo electrónico: " + email + "\n\n";
    contenido += "Mensaje:\n" + mensaje;

    var asunto = "Nuevo mensaje de contacto";

    // Componer el enlace de correo
    var mailtoLink = "mailto:soporte.wisestock@gmail.com" + "?subject=" + encodeURIComponent(asunto) + "&body=" + encodeURIComponent(contenido);

    // Abrir el cliente de correo del usuario
    window.location.href = mailtoLink;
}

document.getElementById("btnEnviar").addEventListener("click", enviarCorreo);
