<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Configure email parameters (modify as needed)
    $to = "akshay1622004@gmail.com";
    $subject = "New message from your website";
    $headers = "From: $email";

    // Send the email
    mail($to, $subject, $message, $headers);
    
    // Redirect back to the contact form or a thank you page
    header("Location: contact.html");
}
?>
