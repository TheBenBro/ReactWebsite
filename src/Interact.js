


var canvas = document.getElementById("canvas");
if (canvas.getContext('2d')) {
    var context = canvas.getContext("2d");
}
const circle = {
    xPos: 22,
    yPos: 150,
    xDelta: 2,
    yDelta: 2,
    radius: 20,

    Draw: function () {
        context.beginPath();
        context.lineWidth = 5;
        context.strokeStyle = "rgb(133,166,199)";
        context.arc(circle.xPos, circle.yPos, circle.radius, 0, 2 * Math.PI);
        context.stroke();
        context.fillStyle = "rgb(133,166,199)";
        context.fill();
    },
    Update: function () {
        circle.yPos += circle.yDelta;
        circle.xPos += circle.xDelta;
        if (circle.yPos < circle.radius) {
            circle.yDelta *= -1; // change direction
        }
        else if (circle.yPos > (canvas.height - circle.radius)) {

            circle.yDelta *= -1;  // change direction
        }
        if (circle.xPos < circle.radius) {

            circle.xDelta *= -1; // change direction
        }
        else if (circle.xPos > (canvas.width - circle.radius)) {
            circle.xDelta *= -1;  // change direction
        }
    }
};

function changeText(event) {
    //target = event.target;
    circle.yDelta = getRndInteger(-3, 3);

    circle.xDelta = getRndInteger(-3, 3);

}
function changeCanvas(event) {
    canvas.style.backgroundColor = "rgb(50, 33, 69)";
};
function restoreCanvas(event) {
    canvas.style.backgroundColor = "black";
};
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function myFrame(timestamp) {
    // Clear the previous drawing
    context.clearRect(0, 0, canvas.width, canvas.height);
    circle.Draw();
    circle.Update();
    window.requestAnimationFrame(myFrame);
}
// Start the animation
function Interact(){
    myFrame();
    canvas.addEventListener("click", changeText);
    canvas.addEventListener("mouseover", changeCanvas);
    canvas.addEventListener("mouseout", restoreCanvas);
}









/* class Interact {

    constructor() {
        this.canvas = document.getElementById("canvas");
        if (this.canvas.getContext('2d')) {
            this.context = this.canvas.getContext("2d");
            this.circle = new Circle(this.canvas, this.context);
        }
    }


    changeText(event_) {
        //target = event_.target;
        this.circle.yDelta = getRndInteger(-3, 3);

        this.circle.xDelta = getRndInteger(-3, 3);

    }
    changeCanvas(event_) {
        this.canvas.style.backgroundColor = "rgb(50, 33, 69)";
    }
    restoreCanvas(event_) {
        this.canvas.style.backgroundColor = "black";
    }
    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    myFrame(timestamp) {
        // Clear the previous drawing
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.circle.Draw();
        this.circle.Update();
        window.requestAnimationFrame(myFrame);
    }
    addListeners() {
        this.canvas.addEventListener("click", changeText);
        this.canvas.addEventListener("mouseover", changeCanvas);
        this.canvas.addEventListener("mouseout", restoreCanvas);
    }
    // Start the animation
    myFrame();
    addListeners();
}
 */