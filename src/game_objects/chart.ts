import Note from "./note"
import TimeStamps from "./timestamp"
import type Game from "../game"

type ChartTimeStamp = {
    timestamp: number
    mode: string
    resetkey : ResetKey
}

type ChartData = {
    bpm : number,
    offset: number,
    duration: number,
    chart: ChartTimeStamp[]
}

type ResetKey = {
    "1" : string
    "2" : string
    "3" : string
    "4" : string
    "5" : string
    "6" : string
    "7" : string
}

export default class Chart{
    notes!: Note[]
    timestamp!: TimeStamps
    bpm!:number
    offset!:number
    duration!:number
    charts!:ChartTimeStamp[]
    game!:Game
    curCharIdx!:number

    constructor(game: Game){
        this.notes = []
        this.timestamp = new TimeStamps()
        this.timestamp.startTime()
        this.game = game
        this.charts = []
        this.curCharIdx = 0

    }
    update() {
        this.timestamp.update()
        
        while (this.curCharIdx < this.charts.length && this.timestamp.time >= this.charts[this.curCharIdx].timestamp) {
            const initial = 200
            Object.keys(this.charts[this.curCharIdx].resetkey).forEach((resetkey) => {
                if (resetkey == "1") {
                    this.notes.push(new Note(this.game, 100, 20, initial + 0, 0, "red"))
                }
                if (resetkey == "2") {
                    this.notes.push(new Note(this.game, 100, 20, initial + 100, 0, "blue"))
                }
                if (resetkey == "3") {
                    this.notes.push(new Note(this.game, 100, 20, initial + 200, 0, "green"))
                }
                if (resetkey == "4") {
                    this.notes.push(new Note(this.game, 100, 20, initial + 300, 0, "yellow"))
                }
                if (resetkey == "5") {
                    this.notes.push(new Note(this.game, 100, 20, initial + 400, 0, "purple"))
                }
                if (resetkey == "6") {
                    this.notes.push(new Note(this.game, 100, 20, initial + 500, 0, "pink"))
                }
                if (resetkey == "7") {
                    this.notes.push(new Note(this.game, 100, 20, initial + 600, 0, "cyan"))
                }
            })
            this.curCharIdx += 1
        }

        this.notes.forEach((note) => {
            note.update()
        })
    }
    draw(ctx : CanvasRenderingContext2D){
        this.notes.forEach((note) => {
            note.draw(ctx)
        })
        this.timestamp.draw(ctx)
    }
    readChart(file: ChartData){
        this.bpm = file.bpm
        this.offset = file.offset
        this.duration = file.duration
        this.charts = file.chart
    }
} 