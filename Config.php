<?php

$host = "127.0.0.1";
$username = "root";
$password = "";
$db_name = "my_personal_web_site_sql";

$conn = new mysqli($host, $username, $password, $db_name);
if($conn->connect_error){
    die("Database Connecion Failed: " . $conn->connect_error);
}
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $name    = $_POST['name'] ?? '';
    $email   = $_POST['email'] ?? '';
    $phone   = $_POST['phone'] ?? '';
    $message = $_POST['message'] ?? '';

    $name = trim($name);
    $email = trim($email);
    $message = trim($message);
    if (empty($name) || empty($email) || empty($message)) {
    die("Errore: Nome, Email e Messaggio sono campi obbligatori.");
    }

    $sql = "INSERT INTO contacts (nameSql, emailSql, phoneSql, messageSql) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    if ($stmt) {
        $stmt->bind_param("ssss", $name, $email, $phone, $message);
        if ($stmt->execute()) {
            header("refresh:1;url=index.html"); 
        } else {
            echo "Errore durante l'invio del messaggio: " . $stmt->error;
        }

        $stmt->close();
    } else {
        echo "Errore nella preparazione della query: " . $conn->error;
    }
} else {
    echo "Metodo di invio non valido.";
}

$conn->close();
?>