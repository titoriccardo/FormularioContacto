<?php

$destinatario = 'titoriccardo@gmail.com';
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$asunto = $_POST['asunto'];
$message = $_POST['message'];


$header = "Enviado desde el formulario de contacto.";
$mensajeCompleto = "Nombre: " . $nombre . "\nCorreo: " .$email . "\nAsunto: " .$asunto . "\nMensaje: " .$message;

mail($destinatario, $asunto, $mensajeCompleto, $header);
echo "<script>alert('Mensaje enviado correctamente')</script>";
echo "<script> setTimeout(\"location.href='index.html'\",1000)</script>";

