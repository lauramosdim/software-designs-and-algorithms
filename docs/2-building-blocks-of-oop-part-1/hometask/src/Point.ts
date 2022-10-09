export class Point {
  private x: number
  private y: number

  constructor()
  constructor(x: number, y: number)
  constructor(x?: number, y?: number) {
    this.x = x ?? 0
    this.y = y ?? 0
  }

  public toString() {
    return `(${this.x}, ${this.y})`
  }

  public distance(): number
  public distance(other: Point): number
  public distance(x: number, y: number): number
  public distance(otherOrX?: any, y?: number): number {
    let targetX: number
    let targetY: number

    if (otherOrX instanceof Point) {
      targetX = otherOrX.x
      targetY = otherOrX.y
    } else if (typeof otherOrX === "number" && typeof y === "number") {
      targetX = otherOrX
      targetY = y
    } else {
      targetX = 0
      targetY = 0
    }

    return Math.sqrt((this.x - targetX) ** 2 + (this.y - targetY) ** 2)
  }
}
