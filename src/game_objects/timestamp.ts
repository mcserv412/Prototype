export default class TimeStamps {
    time: number = 0
    start: number = 0
    pauseStart: number = 0
    totalPaused: number = 0

    startTime() {
        this.start = performance.now()

        document.addEventListener("visibilitychange", () => {
            if (document.hidden) {
                this.pauseStart = performance.now()
            } else {
                this.totalPaused += performance.now() - this.pauseStart
            }
        })
    }

    update() {
        this.time = performance.now() - this.start - this.totalPaused
    }

    draw(ctx:CanvasRenderingContext2D){
        ctx.fillStyle = "black"
        ctx.fillText(`${Math.round(this.time)}`, 50, 50)
    }
}