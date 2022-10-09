import { Point } from "./Point"

export abstract class Shape {
  protected color: string
  protected filled: boolean
  protected points: Point[]

  constructor(points: Point[])
  constructor(points: Point[], color: string, filled: boolean)
  constructor(points: Point[], color?: string, filled?: boolean) {
    if (points.length < 3) {
      throw new Error("At least 3 points are required to create a shape.")
    }
    this.points = points
    this.color = color ?? "green"
    this.filled = filled ?? true
  }

  public toString() {
    console.log(this)

    const { color, filled, points } = this
    const filledString = filled ? "filled" : "not filled"
    const pointsString = points.map((point) => point.toString()).join(", ")

    return `A Shape with color of ${color} and ${filledString}. Points: ${pointsString}.`
  }

  public getPerimeter() {
    return this.points.reduce((perimeter, point, index, array): number => {
      if (index === array.length - 1) {
        perimeter += point.distance(array[0])
      } else {
        perimeter += point.distance(array[index + 1])
      }
      return perimeter
    }, 0)
  }

  abstract getType(): string
}
