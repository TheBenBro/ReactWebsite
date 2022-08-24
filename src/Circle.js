
class Circle{
    constructor(canvas_,context_){
        this.canvas = canvas_;
        this.context = context_;
        this.circle = {
            xPos: 22,
            yPos: 150,
            xDelta: 2,
            yDelta: 2,
            radius: 20
        }
    }
    Draw() {
        context.beginPath();
        context.lineWidth = 5;
        context.strokeStyle = "rgb(133,166,199)";
        context.arc(this.circle.xPos, this.circle.yPos, this.circle.radius, 0, 2 * Math.PI);
        context.stroke();
        context.fillStyle = "rgb(133,166,199)";
        context.fill();
    }
    Update() {
        this.circle.yPos += this.circle.yDelta;
        this.circle.xPos += this.circle.xDelta;
        if (this.circle.yPos < this.circle.radius) {
            this.circle.yDelta *= -1; // change direction
        }
        else if (this.circle.yPos > (this.canvas.height - this.circle.radius)) {

            this.circle.yDelta *= -1;  // change direction
        }
        if (this.circle.xPos < this.circle.radius) {

            this.circle.xDelta *= -1; // change direction
        }
        else if (this.circle.xPos > (this.canvas.width - this.circle.radius)) {
            this.circle.xDelta *= -1;  // change direction
        }
    }
}