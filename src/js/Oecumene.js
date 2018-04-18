'use strict';

/** Класс описывает сетку для игры */
class Oecumene {
    
    /**
     * Создаёт Canvas и задаёт ширину/высоту экрана
     */
    constructor() {
        this.theCanvas = document.getElementById('oecumene');
        this.Oecumene = this.theCanvas.getContext("2d");
        
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
    }
    
    /**
     * Рисует сетку
     * @return {number} возвращает 1 просто так
     */
    buildGrid() {
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
    
}

module.exports.Oecumene = Oecumene;