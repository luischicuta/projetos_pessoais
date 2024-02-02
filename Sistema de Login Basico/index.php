<!DOCTYPE html>
<html>
    <head>
        <title>Formulário</title>
        <meta charset="UTF-8"/>
        <link href="assets/css/style.css" rel="stylesheet"/>
    </head>
    <body>
        <?php
        if(isset($_POST['email']) && empty($_POST['email']) == false) {
            if(isset($_POST['senha']) && empty($_POST['senha']) == false){
                $email = $_POST['email'];
                $senha = $_POST['senha'];
                echo "Seu e-mail é ".$email." e sua senha é ".$senha;
            }
        }
        ?>
        <br><br>
        <hr>
    <div class="container">
        <div class="formulario">
            <form method="POST">

                <input type="email" name="email" placeholder="E-Mail" autofocus autocomplete="off"/><br/><br/>

                <input type="password" name="senha" placeholder="Senha" autocomplete="off"/><br/><br/>

                <input type="submit" value="Entrar"/>

            </form>
        </div>
    </div>
    </body>
</html>