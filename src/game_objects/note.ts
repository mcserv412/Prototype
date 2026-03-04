import Game from "../game"

export default class Note{
    game!:Game
    width!:number
    height:number
    x!:number
    y!:number
    color!:string
    constructor(game:Game, w:number, h:number, x:number, y:number, color:string){
        this.game = game
        this.width = w
        this.height = h
        this.x = x
        this.y = y
        this.color = color
    }
    update(){
        this.y += 10
    }
    draw(ctx:CanvasRenderingContext2D){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}