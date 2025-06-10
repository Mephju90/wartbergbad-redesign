<?php
$fname= $_POST['fname'];
$phone= $_POST['phone'];
$email= $_POST['email'];
$address= $_POST['address'];
$subject = "Kontaktformular Wartbergbad";
$message= $_POST['msg'];

if (isset($fname) && isset($email)) {
    global $to_email, $vpb_message_body, $headers;

    $to_email = "info@wartbergbad.de";
    $email_subject = "Neue Nachricht vom Kontaktformular";

    // HTML-E-Mail mit <br> und <strong>
    $vpb_message_body  = "Sie haben eine Nachricht von " . $_SERVER['HTTP_HOST'] . " erhalten, am " . date('d.m.Y') . ".<br><br>";
    $vpb_message_body .= "Hier sind die Details:<br><br>";
    $vpb_message_body .= "<strong>Name:</strong> " . htmlspecialchars($fname) . "<br>";
    $vpb_message_body .= "<strong>Phone No:</strong> " . htmlspecialchars($phone) . "<br>";
    $vpb_message_body .= "<strong>Email Address:</strong> " . htmlspecialchars($email) . "<br>";
    $vpb_message_body .= "<strong>Address:</strong> " . htmlspecialchars($address) . "<br>";
    $vpb_message_body .= "<strong>Subject:</strong> " . htmlspecialchars($subject) . "<br>";
    $vpb_message_body .= "<strong>Message:</strong><br>" . nl2br(htmlspecialchars($message)) . "<br><br>";

    // Header vorbereiten
    $headers  = "From: " . $fname . " <" . $email . ">\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";
    $headers .= "Message-ID: <" . time() . rand(1, 1000) . "@" . $_SERVER['SERVER_NAME'] . ">\r\n";

    if (@mail($to_email, $email_subject, $vpb_message_body, $headers)) {
        $status = 'Success';
        $output = "Glückwunsch " . htmlspecialchars($fname) . ", vielen Dank, dass Sie uns kontaktiert haben. Wir werden uns so schnell wie möglich bei Ihnen melden.";
    } else {
        $status = 'error';
        $output = "Sorry " . htmlspecialchars($fname) . ", Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später noch einmal.";
    }
} else {
    $status = 'error';
    $output = "Bitte füllen Sie alle Pflichtfelder aus.";
}

echo json_encode(array('status' => $status, 'msg' => $output));

?>