'use strict';

/** Класс описывает сетку для игры */
class Oecumene {
    
    /**
     * Создаёт Canvas и задаёт ширину/высоту экрана
     */
    constructor() {
        this.theCanvas = document.getElementById('oecumene');
        this.Oecumene = this.theCanvas.getContext("2d");
        
        this.theCanvas.addEventListener('click', function(){ 
            Oecumene.getCoords(event, this)
        })
        
        
        
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
    }
    
    /**
     * Рисует сетку
     * @return {number} возвращает 1 просто так
     */
    renderGrid() {
        this.theCanvas.width = parseInt((this.screenWidth - 100) / 20) * 20;
        this.theCanvas.height = parseInt((this.screenHeight - this.theCanvas.offsetTop - 50) / 20) * 20;

        this.Oecumene.strokeStyle = "#1e1c1b";
        this.Oecumene.lineWidth = 1;

        for(let i = 1; i < parseInt(this.theCanvas.width / 20); i++) {
            this.Oecumene.beginPath();
            this.Oecumene.moveTo(20 * i, 0);
            this.Oecumene.lineTo(20 * i, this.theCanvas.height);
            this.Oecumene.stroke();
        }

        for(let i = 1; i < parseInt(this.theCanvas.height / 20); i++) {
            this.Oecumene.beginPath();
            this.Oecumene.moveTo(0, 20 * i);
            this.Oecumene.lineTo(this.theCanvas.width, 20 * i);
            this.Oecumene.stroke();
        }
        
        return 1;    
    }
    
    /**
     * Получаем координаты клика
     */
    static getCoords(event, cnv) {
        event = event || window.event;
        let x = parseInt(event.pageX) - parseInt(cnv.offsetLeft) - 3;
        let y = parseInt(event.pageY) - parseInt(cnv.offsetTop) - 3;
        
        if(x < 0) x = 0;
        if(y < 0) y = 0;
        
        let cell = {
            x : parseInt(x / 20 + 1),
            y : parseInt(y / 20 + 1),
        }
        
        cnv.getContext("2d").fillStyle = '#a0ff78';
        cnv.getContext("2d").fillRect((cell.x * 20 - 19), cell.y * 20 - 19, 18, 18);
        
        console.log("(x, y) = " + cell.x + ", " + cell.y)        
    }
}

//module.exports.Oecumene = Oecumene;