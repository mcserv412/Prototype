import Note from "./game_objects/note";
import InputListener from "./input";
import Chart from "./game_objects/chart";
import Key from "./game_objects/key";

const dumChart = {
    "bpm": 120, 
    "offset": 0,
    "duration": 15000, 
    "chart": [
        {"timestamp": 1000, "mode": "4k", "resetkey": {"2": "start"}},
        {"timestamp": 1250, "mode": "4k", "resetkey": {"2": "end", "3": "start"}},
        {"timestamp": 1500, "mode": "4k", "resetkey": {"3": "end", "5": "start"}},
        {"timestamp": 1750, "mode": "4k", "resetkey": {"5": "end", "6": "start"}},
        
        {"timestamp": 2000, "mode": "4k", "resetkey": {"6": "end", "2": "start", "6": "start"}}, 
        {"timestamp": 2500, "mode": "4k", "resetkey": {"2": "end", "6": "end", "3": "start", "5": "start"}},
        {"timestamp": 3000, "mode": "4k", "resetkey": {"3": "end", "5": "end"}},

        {"timestamp": 4000, "mode": "4k", "resetkey": {"2": "start"}},
        {"timestamp": 4125, "mode": "4k", "resetkey": {"2": "end", "3": "start"}},
        {"timestamp": 4250, "mode": "4k", "resetkey": {"3": "end", "5": "start"}},
        {"timestamp": 4375, "mode": "4k", "resetkey": {"5": "end", "6": "start"}},
        {"timestamp": 4500, "mode": "4k", "resetkey": {"6": "end", "2": "start", "5": "start"}}, 
        {"timestamp": 4750, "mode": "4k", "resetkey": {"2": "end", "5": "end", "3": "start", "6": "start"}},
        {"timestamp": 5000, "mode": "4k", "resetkey": {"3": "end", "6": "end"}},

        {"timestamp": 7000, "mode": "7k", "resetkey": {"4": "start"}}, 
        {"timestamp": 7250, "mode": "7k", "resetkey": {"4": "end", "1": "start", "7": "start"}},
        {"timestamp": 7500, "mode": "7k", "resetkey": {"1": "end", "7": "end", "4": "start"}},
        {"timestamp": 7750, "mode": "7k", "resetkey": {"4": "end"}},

        {"timestamp": 8000, "mode": "7k", "resetkey": {"1": "start", "2": "start"}},
        {"timestamp": 8500, "mode": "7k", "resetkey": {"1": "end", "2": "end", "6": "start", "7": "start"}},
        {"timestamp": 9000, "mode": "7k", "resetkey": {"6": "end", "7": "end", "3": "start", "4": "start", "5": "start"}},
        {"timestamp": 10000, "mode": "7k", "resetkey": {"3": "end", "4": "end", "5": "end"}},

        {"timestamp": 12000, "mode": "7k", "resetkey": {"1": "start"}},
        {"timestamp": 12100, "mode": "7k", "resetkey": {"1": "end", "2": "start"}},
        {"timestamp": 12200, "mode": "7k", "resetkey": {"2": "end", "3": "start"}},
        {"timestamp": 12300, "mode": "7k", "resetkey": {"3": "end", "4": "start"}},
        {"timestamp": 12400, "mode": "7k", "resetkey": {"4": "end", "5": "start"}},
        {"timestamp": 12500, "mode": "7k", "resetkey": {"5": "end", "6": "start"}},
        {"timestamp": 12600, "mode": "7k", "resetkey": {"6": "end", "7": "start"}},
        {"timestamp": 13000, "mode": "7k", "resetkey": {"7": "end", "1": "start", "4": "start", "7": "start"}},
        {"timestamp": 14000, "mode": "7k", "resetkey": {"1": "end", "4": "end", "7": "end"}}
    ]
}

export default class Game{
    width!: number
    height!: number
    notes!: Note[]
    events!: string[]
    keys!: Key[]
    event_listener!: InputListener
    chart!: Chart

    constructor(w : number, h : number){
        this.width = w
        this.height = h
        this.events = []
        this.notes = []

        this.keys = []
        const initial = 300
        this.addKeys(new Key(this, 100, 40, initial + 0 , this.height - 40, "black" , "a", 1))
        this.addKeys(new Key(this, 100, 40, initial + 100 , this.height - 40, "grey" , "s", 2))
        this.addKeys(new Key(this, 100, 40, initial + 200 , this.height - 40, "black" , "d", 3))
        this.addKeys(new Key(this, 100, 40, initial + 300 , this.height - 40, "grey" , " ", 4))
        this.addKeys(new Key(this, 100, 40, initial + 400 , this.height - 40, "black" , "j", 5))
        this.addKeys(new Key(this, 100, 40, initial + 500, this.height - 40, "grey" , "k", 6))
        this.addKeys(new Key(this, 100, 40, initial + 600, this.height - 40, "black" , "l", 7))
        
        this.chart = new Chart(this, this.keys)
        this.chart.readChart(dumChart) // @ts-ignore

        // Make an instance of event listener
        const inputListener = new InputListener() 
        window.addEventListener("keydown", function(e){
            inputListener.addEvent(e)
        })
    }
    update(){
        this.chart.update()
    }
    draw(ctx: CanvasRenderingContext2D){
        this.chart.draw(ctx)
        this.keys.forEach(key => {
            key.draw(ctx)
        })
    }
    addKeys(key:Key){
        this.keys.push(key)
    }
} 