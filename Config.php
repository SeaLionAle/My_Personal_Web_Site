<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require_once 'secrets.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $name    = trim($_POST['name'] ?? '');
    $email   = trim($_POST['email'] ?? '');
    $phone   = trim($_POST['phone'] ?? '');
    $message = trim($_POST['message'] ?? '');

    if (empty($name) || empty($email) || empty($message)) {
        die("Error: Name, Email, and Message are required fields.");
    }

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();                                            
        $mail->Host       = 'smtp.gmail.com'; 
        $mail->SMTPAuth   = true;                       
        $mail->Username   = MAIL_USERNAME;   
        $mail->Password   = MAIL_PASSWORD;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;  
        $mail->Port       = 465;                        

    
        $mail->setFrom(MAIL_USERNAME, 'Il tuo Sito Web'); 
        $mail->addAddress(MAIL_USERNAME);
        $mail->addReplyTo($email, $name); 

        $mail->isHTML(true);
        $mail->Subject = "Nuovo contatto dal sito da: $name";
        $body = "<h2>Hai ricevuto un nuovo messaggio!</h2>";
        $body .= "<p><strong>Nome:</strong> $name</p>";
        $body .= "<p><strong>Email:</strong> $email</p>";
        $body .= "<p><strong>Telefono:</strong> " . (!empty($phone) ? $phone : "Non fornito") . "</p>";
        $body .= "<p><strong>Messaggio:</strong><br>" . nl2br(htmlspecialchars($message)) . "</p>";
        
        $mail->Body    = $body;
        $mail->AltBody = strip_tags(str_replace("<br>", "\n", $body)); 
        $mail->send();
        
        echo "Message sent successfully! You'll be redirected shortly...";
        header("refresh:1;url=index.html"); 
        
    } catch (Exception $e) {
        echo "Error sending message. Error details: {$mail->ErrorInfo}";
    }

} else {
    echo "Invalid submit method."; 
}
?>