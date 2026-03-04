import Game from "../game"

export default class Key{
    game!:Game
    width!:number
    height:number
    x!:number
    y!:number
    color!:string
    key!:string
    show!:boolean
    num!: number
    constructor(game:Game, w:number, h:number, x:number, y:number, color:string, key:string, num:number){
        this.game = game
        this.width = w
        this.height = h
        this.x = x
        this.y = y
        this.color = color
        this.key = key
        this.show = true 
        this.num = num
    }
    update(){

    }
    draw(ctx:CanvasRenderingContext2D){
        if (this.show) {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }
    showKey(){
        this.show = true
    }
    hideKey(){
        this.show = false
    }
}