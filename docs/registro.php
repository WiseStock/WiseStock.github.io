<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];

    $para = "contacto@wisestock.tech"; // Cambia esto al correo donde quieres recibir los mensajes.
    $asunto = "Nuevo mensaje de contacto";

    $contenido = "Nombre: $nombre\n";
    $contenido .= "Correo electrónico: $email\n\n";
    $contenido .= "Mensaje:\n$mensaje";

    // Envía el correo
    mail($para, $asunto, $contenido);

    // Puedes redirigir al usuario a una página de confirmación si lo deseas.
    header("Location: confirmacion.html");
}
?>
