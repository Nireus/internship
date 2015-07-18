<?php
    $recipient = "tanan@gazeta.pl";
    $subject = "SubskrypcjaNewslettera";
    $message = $_POST['email'];
    mail($recipient, $subject, $message) or die("Error!");
?>