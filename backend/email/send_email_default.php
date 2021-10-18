<?php 

header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');

// default response data
$dataResponse = array();
$dataResponseStatus = 0;

// email
$emailTitle = "Sended from React JS";

// user
$userName = addslashes(trim($_POST['name']));
$userEmail = addslashes(trim($_POST['email']));
$userMessage = addslashes(trim($_POST['message']));

// sender
$senderName = "React E-mail Sender";
$senderEmail = "PUT_SENDER_EMAIL_HERE";

// receiver
$receiverName = "React E-mail Sender";
$receiverEmail = "PUT_RECEIVER_EMAIL_HERE";

// ENVIO DE EMAIL
require_once("phpmailer/PHPMailerAutoload.php");	    
$mail = new PHPMailer();
$mail->IsSMTP = ('smtp');
$mail->Mailer = ('mail');
$mail->SMTPSecure = 'ssl';
$mail->SMTPAuth = true;
$mail->From = $senderEmail;
$mail->FromName = $senderName;
$mail->AddReplyTo( $userEmail, $userName );
$mail->AddAddress( $receiverEmail, $receiverName );
$mail->IsHTML(true);
$mail-> CharSet = 'UTF-8';
$mail->AddEmbeddedImage("./logo.png", "logomarca");

// e-mail template
include 'email_template_default.php';

$mail->Subject  = $emailTitle;
$mail->Body = $emailBody;
$mail->AltBody = $emailBody;
$sendedEmail = $mail->Send();
$mail->ClearAllRecipients();
$mail->ClearAttachments();

if ($sendedEmail) {  
	$dataResponseStatus = 1;
} else {
	$dataResponseStatus = 2;
}

$dataResponse['response'] = $dataResponseStatus;

$resultadosJson = json_encode($dataResponse);
echo $resultadosJson;
