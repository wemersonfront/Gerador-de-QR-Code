function GerarQRCode(){
    var inputUsuario = document.querySelector('textarea').value;
    var GoogleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=360x360&chld=H&chl=';
    var conteudoQRcode = GoogleChartAPI + encodeURIComponent(inputUsuario);
    document.querySelector('#QRCodeimage').src = conteudoQRcode
}