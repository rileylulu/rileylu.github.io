<?php
if(isset($_POST['submit'])) {
  $name = $_POST['name'];
  $mailFrom= $_POST['email'];
  $message = $_POST['message'];

  $mailTo = "luruiyi1988@hotmail.com";
  $headers = "From my site: ".$mailFrom;
  $txt = "You have received an e-mail from " .$name.".\n\n".$message;

  mail($mailTo,$txt,$headers);
  header("Location: index.php?mailsend");
}
?>
