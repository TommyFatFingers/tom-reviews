<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Replace 'your-email@example.com' with your actual email address
    $recipient = "tom@tom-reviews.com";
    $subject = "New Contact Form Submission";

    $headers = "From: $name <$email>";

    // Send the email
    mail($recipient, $subject, $message, $headers);

    // Redirect to a thank you page or display a success message
    header("Location: ../thank_you.html");
    exit;
}
?>
