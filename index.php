<?php

  /* Vars and Settings */
  $baseUrl = dirname(__FILE__);

?>

<!doctype html>
<html>

  <head>

    <title>Where the Wild Things Are</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <link rel="stylesheet" type="text/css" href="<?= $baseUrl ?>/css/main.css">

    <script src="<?= $baseUrl ?>/js/modernizr.min.js"></script>

  </head>

  <body>

    <section id="deck"></section>

    <nav id="nav">
      <a href="#prev" class="icon">l</a>
      <a href="#next" class="icon">r</a>
    </nav>

    <!-- Scripts -->
    <script src="<?= $baseUrl ?>/js/jquery.min.js"></script>
    <script src="<?= $baseUrl ?>/js/history/html4+html5/jquery.history.js"></script>
    <script src="<?= $baseUrl ?>/js/script-ck.js"></script>
    <!-- end Scripts -->

  </body>

</html>
