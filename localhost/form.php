<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php
	if(!empty($_POST['telephone'] )) {
	    $to = "asdqwead22@gmail.com"; //куда отправлять письмо
	    $from = "a6hgj7kluj@gmail.com"; // от кого
	    $subject = "Проверка почты";
	    $message = 'Имя: '.$_POST['name'].'; Телефон: '.$_POST['telephone'].';';
	    $headers = "Content-type: text/html; charset=UTF-8 \r\n";
	    $headers .= "From: <почта@.ru>\r\n";
	    $result = mail($to, $subject, $message, $headers);
	    if ($result){ 
	    	echo "<p>Cообщение успешно отправлено. Пожалуйста, оставайтесь на связи</p>";
	    }
	    else{
	    	echo "<p>Cообщение не отправлено. Пожалуйста, попробуйте еще раз</p>";
	    }
	}
	else {
		echo "<p>Обязательные поля не заполнены. Введите номер телефона</p>";
	}
	?>
</body>
</html>