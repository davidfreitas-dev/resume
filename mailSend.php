<?php

// Recebe os dados do formulário via POST
$name    = (isset($_POST['name'])) ? $_POST['name'] : '' ;
$email   = (isset($_POST['email'])) ? $_POST['email'] : '' ;
$message = (isset($_POST['message'])) ? $_POST['message'] : '' ;

// Valida o preenchimento dos campos
if (empty($name)):
	$retorno = array('codigo' => '0', 'mensagem' => 'Preencha o campo nome!');
	echo json_encode($retorno);
	exit();
endif;

if (empty($email)):
	$retorno = array('codigo' => '0', 'mensagem' => 'Preencha o campo e-mail!');
	echo json_encode($retorno);
	exit();
endif;

if (!filter_var($email, FILTER_VALIDATE_EMAIL)):
    $retorno = array('codigo' => '0', 'mensagem' => 'Formato de e-mail inválido!');
	echo json_encode($retorno);
	exit();
endif;

if (empty($message)):
	$retorno = array('codigo' => '0', 'mensagem' => 'Preencha o campo mensagem!');
	echo json_encode($retorno);
	exit();
endif;

// Trata as informações recebidas no campo e-mail
$email = preg_replace('/[^[:alnum:]_.-@]/', '', $email);

// Envia um email para o administrador do site
$recipient = 'davidfrei7as@outlook.com';
$subject = 'MENSAGEM DO SITE';
$message = utf8_decode($message);
$header = 'From: ' . $email;
@mail($recipient, $subject, $message, $header);

$retorno = array('codigo' => '1', 'mensagem' => 'Sua mensagem foi enviada! Aguarde contato.');
echo json_encode($retorno);
exit();

 ?>