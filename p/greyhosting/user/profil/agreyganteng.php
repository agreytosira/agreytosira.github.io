<?php
session_start();
if(!isset($_SESSION['username'])) {
header('location:../../index.php');
} else {
$username = $_SESSION['username'];
}

// Koneksi ke Database
$conn = mysqli_connect("localhost", "root", "", "cyberusteam");

function query($query) {
    global $conn;
    $result = mysqli_query($conn, $query);
    $rows = [];
    while ( $row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
    return $rows;
}

$user = query("SELECT * FROM user")[1];

?>
<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Cyberus Team - <?= $username ?></title>

  <!-- Bootstrap core CSS -->
  <link href="../../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom fonts for this template -->
  <link href="../../vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">

  <!-- Custom styles for this template -->
  <link href="../../css/stylegua.css" rel="stylesheet">

</head>

<body id="page-top">

  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="#page-top"><img src="../../img/logo.png" width="275px" alt=""></a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
        data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
        aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ml-auto">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="../index.php">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#profil"><?= $username ?></a>
          </li>
          <li class="nav-item">
            <a class="nav-link external-link" href="../../logout.php">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- Akhir Navbar -->

  <!-- Header -->
  <header class="masthead">
    <div class="container admin-intro">
      <div class="row">
        <div class="col-lg-7">
          <div class="intro-text text-left">
            <div class="intro-heading">Halo, <?= $username ?></div>
            <p>Selamat datang di halaman khusus Member / User.</p>
            <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Fanspage Resmi</a>

          </div>
        </div>
        <div class="col-lg-5">
          <img src="../../img/vectorintro.png" alt="" width="100%">
        </div>
      </div>
    </div>
  </header>
  <!-- Akhir Header -->

  <!-- Profil -->
  <section class="profil" id="profil">
      <div class="container">
          <div class="row">
              <div class="col-lg-12">
                  <h2 class="judul-section">PROFIL <?= $username ?></h2>
                  <br>
                  <div class="row">
                      <div class="col-lg-8 m-auto">
                      <p>Nama Lengkap : <?= $user["namalengkap"]; ?></p>
                    <p>Tanggal Lahir : <?= $user["tanggal"]; ?></p>
                    <p>Username : <?= $user["username"]; ?></p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  <!-- Akhir Profil -->

  <!-- Footer -->
  <footer class="text-center p-4 pt-5" style="background: darkblue; color: white;">
    <p>Cyberus Team 2018 - 2020 - Designed by <b>Agrey Tosira</b></p>
  </footer>
  <!-- Akhir Footer -->

  <!-- Bootstrap core JavaScript -->
  <script src="../../vendor/jquery/jquery.min.js"></script>
  <script src="../../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Plugin JavaScript -->
  <script src="../../vendor/jquery-easing/jquery.easing.min.js"></script>

  <!-- Contact form JavaScript -->
  <script src="../../js/jqBootstrapValidation.js"></script>
  <script src="../../js/contact_me.js"></script>

  <!-- Custom scripts for this template -->
  <script src="../../js/agency.min.js"></script>

</body>

</html>