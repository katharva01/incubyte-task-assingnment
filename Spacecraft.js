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
}

module.exports={
    Spacecraft
}