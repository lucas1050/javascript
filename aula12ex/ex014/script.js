function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BO DIA
        img.src = 'fotodemanha.jpg'
        document.body.style.background = '#b39689'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'fotodetarde.jpg'
        document.body.style.background = '#677a98'
    } else {
        //BOA NOITE
        img.src = 'fotodenoite.jpg'
        document.body.style.background = '#282d42'
    }
}
