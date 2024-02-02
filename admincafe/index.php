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
    <!-- Dashboard -->
    <section id="container">
        <div class="top-panels">
            <div class="panel">
                <div class="panel-title">Total de Vendas</div><div class="panel-image">
                    <img src="Assets/images/graphic.png" width="30"><div style="display:none;">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </div>
                <div class="number" id="sells">292</div>
            </div>
            <div class="panel">
                <div class="panel-title">Total Arrecadado</div><div class="panel-image">
                    <img src="Assets/images/cart.png" width="30"><div style="display:none;">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </div>
                <div class="number" id="funds">R$ 375</div>
            </div>
            <div class="panel">
                <div class="panel-title">Clientes</div><div class="panel-image">
                    <img src="Assets/images/client.png" width="30"><div style="display:none;">Icons made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </div>
                <div class="number" id="clients">28</div>
            </div>
        </div>
        <div class="bottom-panels">
            <div class="big-panel1">
                <div class="panel-title">Vendas por Dia</div>
                <div class="panel-image">
                    <img src="Assets/images/profits.png" width="30"><div style="display:none;">Icons made by <a href="https://www.flaticon.com/authors/dmitri13" title="dmitri13">dmitri13</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </div>
                <div class="table">
                    <table width="300" border="0">
                        <tr style="font-weight:bold;">
                            <td width="10">SEG</td>
                            <td width="10">TER</td>
                            <td width="10">QUA</td>
                            <td width="10">QUI</td>
                            <td width="10">SEX</td>
                            <td width="10">SAB</td>
                            <td width="10">DOM</td>
                        </tr>
                        <tr>
                            <td width="10">10/02</td>
                            <td width="10">11/02</td>
                            <td width="10">12/02</td>
                            <td width="10">13/02</td>
                            <td width="10">14/02</td>
                            <td width="10">15/02</td>
                            <td width="10">16/02</td>
                        </tr>
                        <tr>
                            <td width="10">45</td>
                            <td width="10">40</td>
                            <td width="10">40</td>
                            <td width="10">40</td>
                            <td width="10">40</td>
                            <td width="10">40</td>
                            <td width="10">47</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="big-panel2">
                <div class="panel-title">Produtos mais Vendidos</div><div class="panel-image">
                    <img src="Assets/images/basket.png" width="30"><div style="display:none;">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </div>
                <div class="products">
                    <ol>
                        <span><li>1. Misto Quente</li></span>
                        <li>2. Café com Leite</li>
                        <li>3. Bolo de Cenoura</li>
                        <li>4. Coxinha</li>
                        <li>5. Kibe</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
    <!-- Dashboard End -->
    <!-- Footer -->
    <footer id="footer">
        <div class="logo-container" id="lg-cont" style="background-color:rgb(87, 16, 16) !important;">
            <a href="" style="text-decoration:none;"><div class="logo" style="text-align:center;color:white;font-family:arial;font-weight:bold;font-size:16px;line-height:40px;background-color:rgb(151, 27, 27);">LOGO</div></a>
            <div class="logo-text" style="color:white;">Café e Conveniência</div>
        </div>
        <div class="copyright">LPC All Rights Reserved 2020</div>
    </footer>
    <!-- Footer End -->
    <script src="Assets/js/script.js"></script>
</body>
</html>