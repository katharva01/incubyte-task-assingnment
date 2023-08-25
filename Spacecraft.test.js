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
});