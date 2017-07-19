// #4a4441; #a0ff78;

window.onload = function() { buildGrid(); }
window.onresize = function() { buildGrid(); }

var theCanvas = document.getElementById('oecumene');
var Oecumene = theCanvas.getContext("2d");

function buildGrid() {
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    
    theCanvas.width = parseInt((screenWidth - 100) / 20) * 20;
    theCanvas.height = parseInt((screenHeight - theCanvas.offsetTop - 50) / 20) * 20;
    
    Oecumene.strokeStyle = "#201c1a";
    Oecumene.lineWidth = 1;
    
    for(var i = 1; i < parseInt(theCanvas.width / 20); i++) {
        Oecumene.beginPath();
        Oecumene.moveTo(20 * i, 0);
        Oecumene.lineTo(20 * i, theCanvas.height);
        Oecumene.stroke();
    }
    
    for(var i = 1; i < parseInt(theCanvas.height / 20); i++) {
        Oecumene.beginPath();
        Oecumene.moveTo(0, 20 * i);
        Oecumene.lineTo(theCanvas.width, 20 * i);
        Oecumene.stroke();
    }
        
}
