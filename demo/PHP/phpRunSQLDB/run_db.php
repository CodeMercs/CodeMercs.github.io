<?php 
	/* Define */
	define("HOST", "");
	define("DATABASE", "");
	define("DATABASE_USER", "");
	define("DATABASE_PASSWORD", "");

	/* Connect */
	$conn = mysqli_connect(HOST, DATABASE_USER, DATABASE_PASSWORD, DATABASE);
	/* SQL */
	$sql = "SELECT `id`,`college_id`, `coop` FROM `student`";

	/* Mysqli */

	$result = mysqli_query( $conn, $sql );
	$row = mysqli_fetch_all( $result );
	
	/* Print */
	// var_dump($row);

	foreach ($row as $key => $value) {
		 var_dump($value);
		
		if (!is_null($value[2])) {
			echo  $value[0]. " : OK \n";
			$mysql = "UPDATE `college` SET `coop_group` = '$value[2]' WHERE `college`.`id` = $value[1]";
			var_dump($mysql);
			if (mysqli_query( $conn, $mysql)) {
				echo "OwO , Run \n";
			}
		}
	}

?>
