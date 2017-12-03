// #4a4441; #a0ff78;

window.onload = function() { buildGrid(); }
window.onresize = function() { buildGrid(); }

const theCanvas = document.getElementById('oecumene');
const Oecumene = theCanvas.getContext("2d");

function buildGrid() {
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    
    theCanvas.width = parseInt((screenWidth - 100) / 20) * 20;
    theCanvas.height = parseInt((screenHeight - theCanvas.offsetTop - 50) / 20) * 20;
    
    Oecumene.strokeStyle = "#1e1c1b";
    Oecumene.lineWidth = 1;
    
    for(let i = 1; i < parseInt(theCanvas.width / 20); i++) {
        Oecumene.beginPath();
        Oecumene.moveTo(20 * i, 0);
        Oecumene.lineTo(20 * i, theCanvas.height);
        Oecumene.stroke();
    }
    
    for(let i = 1; i < parseInt(theCanvas.height / 20); i++) {
        Oecumene.beginPath();
        Oecumene.moveTo(0, 20 * i);
        Oecumene.lineTo(theCanvas.width, 20 * i);
        Oecumene.stroke();
    }
        
}
