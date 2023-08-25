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
}

module.exports={
    Spacecraft
}