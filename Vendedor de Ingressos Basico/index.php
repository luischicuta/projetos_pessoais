<!DOCTYPE html>
<html>
    <head>
        <title>Ingressos para Cinema</title>
        <meta charset="UTF-8"/>
        <link rel="stylesheet" href="assets/css/style.css"/>
        <meta id="viewport" name="viewport" content="width=device-width, user-scalable=no"/>
        <link href="assets/images/play-button.png" rel="shortcut icon" type="image/x-png"/>
    </head>
    <body>
        <div class="painel">
            <form method="POST"><div class="painel-usuario">
                <div class="titulo-painel-usuario">RETIRE SEU INGRESSO</div>
                <p>Escolha o Filme:</p><br/>
                <select class="filme" name="filme" required>
                    <option value="0">--------</option>
                    <option value="1">Coringa 19:00 [DUBLADO]</option>
                    <option value="2">Malévola 19:30 [LEGENDADO]</option>
                    <option value="3">Bob Esponja 17:50 [DUBLADO]</option>
                    <option value="4">Coringa 22:00 [LEGENDADO]</option>
                    <option value="5">Malévola 17:00 [DUBLADO]</option>
                    <option value="6">Simpsons 18:00 [DUBLADO]</option>
                    <option value="7">Simpsons 20:20 [LEGENDADO]</option>
                    <option value="8">Bob Esponja 20:10 [LEGENDADO]</option>
                </select>
                <br/>
                <p>Coloque sua idade:</p>
                <input class="idade" type="text" name="idade" autofocus required autocomplete="off">
            </div>
                <div class="botão">
                    <input class="confirmar" type="submit" value="Confirmar"/>
                </div>
            </form>
            <?php
            define("VERSION", "0.0.1");
             if(isset($_POST['idade']) && !empty($_POST['idade'])) {
                $idade = $_POST['idade'];
                if($idade >= 60) {
                    echo "Sua entrada é gratuita pois você é idoso.";
                 } else {
                    echo "Retire seu ticket de pagamento no valor de 15,00R$";
                }
            }
            ?>
    </body>
</html>