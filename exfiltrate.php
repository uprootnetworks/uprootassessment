<html>
<form name="input" action="exfiltrate.php" method="get">
Search:
<input type="text" name="t">
<input type="submit" value="Submit">
</form>

<br>
</html>
<?php
if (isset($_GET['test'])) {
	echo $_GET['t'];
};
echo 'Welcome!';
?>
