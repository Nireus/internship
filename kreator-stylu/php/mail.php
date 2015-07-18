<?php
    $recipient = "mail.do@ustawienia.com";
    $subject = "SubskrypcjaNewslettera";
    $message = $_POST['email'];
    mail($recipient, $subject, $message) or die("Error!");
?>