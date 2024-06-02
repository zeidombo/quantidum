<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "zeid@quantidum.com";
    $subject = "New Contact Form Submission";
    
    $firstName = htmlspecialchars($_POST['first-name']);
    $lastName = htmlspecialchars($_POST['last-name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $reason = htmlspecialchars($_POST['reason']);
    $message = htmlspecialchars($_POST['message']);
    
    $body = "First Name: $firstName\n";
    $body .= "Last Name: $lastName\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n";
    $body .= "Reason: $reason\n";
    $body .= "Message: $message\n";
    
    $headers = "From: $email";
    
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
} else {
    echo "Invalid request method.";
}
?>
