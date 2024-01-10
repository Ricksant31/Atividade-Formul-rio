<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Formulário</title>
  <script>
    function limparCampo() {
      // Obtém o elemento de input pelo ID
      var campoInput = document.getElementById('meuInput');

      // Limpa o valor do campo
      campoInput.value = '';
    }
  </script>
</head>
<body>
  <form onsubmit="limparCampo(); return false;">
    <label for="meuInput">Digite algo:</label>
    <input type="text" id="meuInput" name="meuInput">
    <button type="submit">Enviar</button>
  </form>
</body>
</html>
