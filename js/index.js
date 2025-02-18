function logar() {

    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if (usuario == 'admin' && senha == 'admin') {
        alert('LOGIN OK');
        location.href = './html/home.html';
    } else {
        alert('ERRO usuário ou senha incorretos');
    }


}