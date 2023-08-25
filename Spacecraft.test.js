const {Spacecraft}=require('./Spacecraft.js')


describe('Spacecraft working check',()=>{
    
    let spacecraft;

    beforeEach(() => {
        spacecraft = new Spacecraft(0, 0, 0, "N");
    });

    it("should crete a spacecraft object with 'SpaceCraft' constructor",()=>{
        expect(spacecraft.x).toBe(0);
        expect(spacecraft.y).toBe(0);
        expect(spacecraft.z).toBe(0);
        expect(spacecraft.direction).toBe('N');
    });

    it("should move forward when the 'f' command is given", () => {
        spacecraft.moveForward();
        expect(spacecraft.y).toBe(1);
    });

    it("should move backward when the 'b' command is given", () => {
        spacecraft.moveBackward();
        expect(spacecraft.y).toBe(-1);
    });

    it("should turn left when the 'l' command is given", () => {
        spacecraft.turnLeft();
        expect(spacecraft.direction).toBe("W");
    });

    it("should turn right when the 'r' command is given", () => {
        spacecraft.turnRight();
        expect(spacecraft.direction).toBe("E");
    });

    it("should move up when the 'u' command is given", () => {
        spacecraft.turnUp();
        expect(spacecraft.direction).toBe('U');
    });
});