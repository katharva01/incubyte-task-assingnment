class Spacecraft{
    constructor(x,y,z,direction){
        this.x=x;
        this.y=y;
        this.z=z;
        this.direction=direction;
    }

    moveForward() {
        switch (this.direction) {
            case "N":
                this.y++;
                break;
            case "S":
                this.y--;
                break;
            case "E":
                this.x++;
                break;
            case "W":
                this.x--;
                break;
            case "U":
                this.z++;
                break;
            case "D":
                this.z--;
                break;
        }
    }

    moveBackward() {
        switch (this.direction) {
            case "N":
                this.y--;
                break;
            case "S":
                this.y++;
                break;
            case "E":
                this.x--;
                break;
            case "W":
                this.x++;
                break;
            case "U":
                this.z--;
                break;
            case "D":
                this.z++;
                break;
        }
    }

    turnLeft() {
        switch (this.direction) {
            case "N":
                this.direction="W";
                break;
            case "S":
                this.direction="E";
                break;
            case "E":
                this.direction="N";
                break;
            case "W":
                this.direction="S";
                break;
            case "U":
                this.direction="N";
                break;
            case "D":
                this.direction="S";
                break;
        }
    }

    turnRight() {
        switch (this.direction) {
            case "N":
                this.direction="E";
                break;
            case "S":
                this.direction="W";
                break;
            case "E":
                this.direction="S";
                break;
            case "W":
                this.direction="N";
                break;
            case "U":
                this.direction="S";
                break;
            case "D":
                this.direction="N";
                break;
        }
    }

    turnUp() {
        this.direction="U";
    }

    turnDown() {
        this.direction="D";
    }
}

function translateCommands(commands) {
    let spacecraft = new Spacecraft(0, 0, 0, "N");

    for (const command of commands) {
        if (command === "f") {
            spacecraft.moveForward();
        } else if (command === "b") {
            spacecraft.moveBackward();
        } else if (command === "l") {
            spacecraft.turnLeft();
        } else if (command === "r") {
            spacecraft.turnRight();
        } else if (command === "u") {
            spacecraft.turnUp();
        } else if (command === "d") {
            spacecraft.turnDown();
        }
    }

    return spacecraft;
}

module.exports={
    Spacecraft,
    translateCommands
}