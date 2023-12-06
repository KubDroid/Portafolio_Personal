<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get the form data
    $data = json_decode(file_get_contents("php://input"), true);

    // Process the form data
    $nombre = $data["nombre"];
    $email = $data["email"];
    $mensaje = $data["mensaje"];

    // Customize the email content
    $to = "ale.cubillo@gmail.com";
    $subject = "Nuevo mensaje de contacto";
    $message = "Nombre: $nombre\n";
    $message .= "Email: $email\n";
    $message .= "Mensaje:\n$mensaje";

    // Send the email
    mail($to, $subject, $message);

    // Send a response to the client
    echo "OK";
} else {
    // If the request method is not POST, respond with an error
    http_response_code(405);
    echo "Method Not Allowed";
}
?>
