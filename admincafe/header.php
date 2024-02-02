<!DOCTYPE html>
<html>
<head>
    <title>Admin Café - Dashboard</title>
    <meta charset="UTF-8">
    <link href="assets/css/style.css" rel="stylesheet">
    <link href="Assets/images/favicon.png" rel="shortcut icon" type="image/x-png"/>
    <meta name="description" content="Painel administrativo para uma loja de Café e conveniência">
    <meta name="keywords" content="HTML,CSS,Café,Conviniência,Comida,Food,Coffee,Warn,Tasty,Hot">
    <meta name="author" content="Luis Paulo Cavalcante">
    <meta id="viewport" name="viewport" content="width=device-width, user-scalable=no"/>
    <div style="display:none;">Icons made by <a href="https://www.flaticon.com/authors/catkuro" title="catkuro">catkuro</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
</head>
<body>
    <!-- Header -->
    <div class="side-menu" id="side-menu">
        <a href=""><div class="menu-item">
            <div class="menu-image">
                <img src="Assets/images/home.png" width="40"><div style="display:none;">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>
            <div class="menu-title">Home</div>
        </div></a>
        <a href=""><div class="menu-item">
            <div class="menu-image">
                <img src="Assets/images/client.png" width="40">
            </div>
            <div class="menu-title">Clientes</div>
        </div></a>
        <a href=""><div class="menu-item">
            <div class="menu-image">
                <img src="Assets/images/basket.png" width="40">
            </div>
            <div class="menu-title">Produtos</div>
        </div>
        <div style="display:none;">Icons made by <a href="https://www.flaticon.com/authors/google" title="Google">Google</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
    <header id="header">
        <div onClick="toggleMenu()" class="side-menu-btn" style="cursor:pointer;" id="side-menu-btn">
            <img id="arrow-right" style="margin-top:15px;margin-left:40px;cursor:pointer;" src="Assets/images/arrow-right.png" width="50">
        </div>
        <div class="btn-hidden" id="hidden-btn" onClick="toggleMenu()" style="cursor:pointer;">
            <img src="Assets/images/arrow-right.png" width="30" style="margin-top:25px;margin-left:25px;">
        </div>
        <div class="logo-container" id="lg-cont">
            <a href="" style="text-decoration:none;"><div class="logo" style="text-align:center;color:white;font-family:arial;font-weight:bold;font-size:16px;line-height:40px;">LOGO</div></a>
            <div class="logo-text">Café e Conveniência</div>
        </div>
        <div class="login-panel">
            <div class="new-sell">
                <button>Nova Venda</button>
            </div>
            <div class="user-panel">
                <div class="usarname">
                    <div class="name">Luis Paulo</div>
                    <div class="role">Administrador</div>
                </div>
                <a href=""><div class="profile-photo"></div></a>
                <a href="" style="text-decoration:none;"><div class="exit">Sair</div></a>
            </div>
        </div>
    </header>
    <!-- Header-End -->
    <script src="Assets/js/script.js"></script>
</body>
</html>