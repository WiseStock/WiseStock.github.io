<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];

    $para = "soporte.wisestock@gmail.com"; // Cambia esto al correo donde quieres recibir los mensajes.
    $asunto = "Nuevo mensaje de contacto";

    $contenido = "Nombre: $nombre\n";
    $contenido .= "Correo electrónico: $email\n\n";
    $contenido .= "Mensaje:\n$mensaje";

    // Envía el correo
    mail($para, $asunto, $contenido);

    // Redirige al usuario a una página de confirmación
    header("Location: confirmacion.html");
}
?>