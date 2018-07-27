<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'vendor/autoload.php';

	if (!isset($_POST['email'])){
		die('Restricted access');
		$return['success'] = 0;
		echo json_encode($return);
	}
	$mail = new PHPMailer();
	$mail->IsSMTP();
	$mail->CharSet = 'UTF-8';

	// $mail->Host       = "smtp.zoho.com"; // SMTP server example
	// $mail->SMTPDebug  = 0;                     // enables SMTP debug information (for testing)
	// $mail->SMTPAuth   = true;                  // enable SMTP authentication
	// $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
	// $mail->Port       = 465;                    // set the SMTP port for the GMAIL server
	// $mail->Username   = "mailer@stompingit.com"; // SMTP account username example
	// $mail->Password   = "stompingit#54321";        // SMTP account password example

	// Godady Setting
		$mail->Host = 'sg2plcpnl0034.prod.sin2.secureserver.net';
		$mail->Port = 465;
		$mail->SMTPAuth = true;
		$mail->SMTPSecure = 'ssl';
		$mail->Username   = "no-spam@threetofour.com.au";
		$mail->Password   = "firDaus&3Mw";

	$mail->isHTML(false);                                  // Set email format to HTML

	$mail->setFrom('no-spam@threetofour.com.au', 'ThreeToFour website mailer');

	$mail->addAddress('hello@threetofour.com.au');
    $mail->addReplyTo($_POST['email'], $_POST['name']);

	$mail->Subject = 'new message from ' . $_POST['name'];
	$mail->Body = $_POST['message'];

	if($mail->send()) {
		$return = array(
            'success' => "1",
            'message' => "Your email has been sent."
            );
        
	}
	else{
        $return = array(
            'success' => "0",
            'message' => $mail->ErrorInfo
            );
	}
	// $return['success'] = 1;
	echo json_encode($return);
?>