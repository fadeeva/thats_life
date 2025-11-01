const CELL_settings = {
    size  : 18,
    colors: {
        empty : "#252525",
        fill  : "#a0ff78",
        stroke: "#1e1c1b",
    }
}

/** Класс описывает сетку для игры */
class Oecumene {
    
    /**
     * Создаёт Canvas и задаёт ширину/высоту экрана
     */
    constructor() {
        this.theCanvas = document.getElementById("oecumene");
        this.Oecumene = this.theCanvas.getContext("2d");
        
        this.theCanvas.addEventListener("click", function(){
            Oecumene.renderCell(event, this);
        })

        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        
        document.getElementById("game_start").addEventListener("click", function(){ 
            Oecumene.start(event)
        })
    }
    
    static start(event) {
        console.log(stack)
    }
    
    
    /**
     * Рисует сетку
     */
    renderGrid() {
        this.theCanvas.width = parseInt((this.screenWidth - 100) / 20) * 20;
        this.theCanvas.height = parseInt((this.screenHeight - this.theCanvas.offsetTop - 50) / 20) * 20;

        this.Oecumene.strokeStyle = CELL_settings.colors.stroke;
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
    }
    
    /**
     * Основная функция для заливки/удаления клетки
     */
    static renderCell(event, cnv) {
        let cell = Oecumene.getCoords(event, cnv);
        let needFill = Oecumene.stackCheck(cell);
        
        Oecumene.drawCell(cnv, cell, needFill);
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

        return cell;
    }
    
    /**
     * Проверяем массив с координатами, если координата
     * есть в массиве, то удаляем, если нет,
     * то добавляем координаты в массив.
     */
    static stackCheck(cell) {
        if(stack.length == 0) {
            stack.push(cell);
            return true;
        } else {
            for(let i = 0; i < stack.length; i++) {
                if(stack[i].x == cell.x && stack[i].y == cell.y ) {
                    stack.splice(i, 1);
                    return false;
                }
            }
            stack.push(cell);
        }
        return true;
        
    }
    
    /**
     * Заливает клетку зелёным или фоновым цветом,
     * в зависимости от значения needFill
     */
    static drawCell(cnv, cell, needFill) {
        let color = CELL_settings.colors.empty;
        
        if(needFill) color = CELL_settings.colors.fill; 
        
        cnv.getContext("2d").fillStyle = color;
        cnv.getContext("2d").fillRect((cell.x * 20 - 19), cell.y * 20 - 19,
                                      CELL_settings.size, CELL_settings.size);
    }
}

//module.exports.Oecumene = Oecumene;