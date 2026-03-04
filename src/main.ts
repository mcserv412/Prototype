import Game from "./game.js"
const fps = 60

window.addEventListener("load", function(){

    //Initializer
    const canvas = document.getElementById("c1") as  HTMLCanvasElement  
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D
    canvas.width = this.window.innerWidth
    canvas.height = this.window.innerHeight

    // Check the suitable device
    if (canvas.width < 1080) {
        canvas.style.display = 'none'
        const m = document.querySelector('h1') as HTMLElement
        m.style.display = 'flex'
    }
    this.document.addEventListener("click", function(){
        // Make an instance of game
        const game = new Game(canvas.width, canvas.height)
        function animate(){ 
            // Te animate function can be improved later, for now let it be this way
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            game.update()
            game.draw(ctx)
            requestAnimationFrame(animate)
        }
        animate()
    })
}) 