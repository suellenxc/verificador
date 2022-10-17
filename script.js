    function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = ''
        var img =  document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                img.setAttribute('src', 'img/garoto.jpg')
            }else if (idade <= 39){
                img.setAttribute('src', 'img/moco.jpg')
            }else if (idade >= 40 && idade < 60) {
                img.setAttribute('src', 'img/homem.jpg')
            }else {
                img.setAttribute('src', 'img/idoso.jpg')
            }
        }else if (fsex[1].checked) {
            genero = 'mulher'
            if(idade >=0 && idade < 10){
                img.setAttribute('src', 'img/garota.jpg')
            }else if (idade <= 25){
                img.setAttribute('src', 'img/moca.jpg')
            }else if (idade >= 40 && idade < 60) {
                img.setAttribute('src', 'img/mulher.jpg')
            }else {
                img.setAttribute('src', 'img/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}