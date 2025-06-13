<?php
    if(session_status() != PHP_SESSION_ACTIVE){
        session_start();
    }
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Header</title>
    <link rel="stylesheet" href="/games-vault/sass/main.css">
    <script type="module" src="games-vault/JS/main.js"></script>
</head>
<body>
    <header>
        <div class="headerLogo">
            <img src="../assets/GamesVaultLogo.png" alt="GamesVault Logo">
        </div>
        <form action="" method="get" class="headerSearch">
            <input class="headerSearch__input" type="search" autocomplete="off" placeholder="Search your favorite games...">
            <button type="submit" class="headerSearch__button" value="Search"><img src="../assets/magnifier.svg" alt="magnifier logo"></button>
        </form>
        <nav class="headerNav">
            <ul>
                <li><a href="../HTML/index.html">Vault</a></li>
                <li><a href="../HTML/discover.html">Discover</a></li>
                <li><a href="../HTML/profile.html">Profile</a></li>
            </ul>
        </nav>
        <div class="headerLogin">
            <a href="">
                <img src="./../assets/login.svg" alt="Login Logo">
                <span>Login</span>
            </a>
        </div>
    </header>
