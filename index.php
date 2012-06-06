<?php

  /* Vars and Settings */
  define( 'WILD_URL', 'http://wildthings' . dirname($_SERVER["SCRIPT_NAME"]) );

?>

<!doctype html>
<html>

  <head>

    <title>Where the Wild Things Are</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <link href='http://fonts.googleapis.com/css?family=Shadows+Into+Light|Amatic+SC' rel='stylesheet' type='text/css'>

    <link rel="stylesheet" type="text/css" href="<?= WILD_URL ?>css/jquery.snippet.min.css">
    <link rel="stylesheet" type="text/css" href="<?= WILD_URL ?>css/main.css">

    <script src="<?= WILD_URL ?>js/modernizr.min.js"></script>

  </head>

  <body>

    <div id="prez">

      <section id="deck" class="one">
        <?php include_once('slides/one.php'); ?>
        <?php include_once('slides/two.php'); ?>
        <?php include_once('slides/three.php'); ?>
        <?php include_once('slides/four.php'); ?>
      </section>

    </div>

    <!-- Scripts -->
    <script src="<?= WILD_URL ?>js/jquery.min.js"></script>
    <script src="<?= WILD_URL ?>js/history/html4+html5/jquery.history.js"></script>
    <script src="<?= WILD_URL ?>js/jquery.fittext.js"></script>
    <script src="<?= WILD_URL ?>js/jquery.snippet.min.js"></script>
    <script src="<?= WILD_URL ?>js/script-ck.js"></script>
    <!-- end Scripts -->

  </body>

</html>
