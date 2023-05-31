class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    get count() {
      return this.sides.length;
    }
  
    get perimeter() {
      return this.sides.reduce((acc, side) => acc + side, 0);
    }
  
    get countSides() {
      return this.count;
    }
  }
  
  class Square extends Polygon {
    get isValid() {
      const [side1, side2, side3, side4] = this.sides;
      return side1 === side2 && side2 === side3 && side3 === side4;
    }
  
    get area() {
      const [side] = this.sides;
      return side ** 2;
    }
  }
  class Triangle extends Polygon {
    get isValid() {
      const [side1, side2, side3] = this.sides;
      return (
        side1 + side2 > side3 &&
        side2 + side3 > side1 &&
        side3 + side1 > side2
      );
    }
  }
  