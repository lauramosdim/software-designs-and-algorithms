import { Point } from "./point"
import { Shape } from "./Shape"

export class Triangle extends Shape {
  constructor(first: Point, second: Point, third: Point)
  constructor(
    first: Point,
    second: Point,
    third: Point,
    color: string,
    filled: boolean
  )
  constructor(
    first: Point,
    second: Point,
    third: Point,
    color?: string,
    filled?: boolean
  ) {
    if (color !== undefined && filled !== undefined) {
      super([first, second, third], color, filled)
    } else {
      super([first, second, third])
    }
  }

  public toString() {
    const pointsString = this.points
      .map((point, index) => `v${index + 1}=${point.toString()}`)
      .join(",")
    return `Triangle[${pointsString}]`
  }

  public getType() {
    const sides = this.points.reduce((acc: number[], point, index, array) => {
      if (index === array.length - 1) {
        acc.push(point.distance(array[0]))
      } else {
        acc.push(point.distance(array[index + 1]))
      }
      return acc
    }, [])

    const uniqueSides = sides
      .map((side) => side.toFixed(1))
      .filter(
        (side, _, array) => array.indexOf(side) === array.lastIndexOf(side)
      )

    if (uniqueSides.length === 0) {
      return "equilateral triangle"
    }

    if (uniqueSides.length === 1) {
      return "isosceles triangle"
    }

    return "scalene triangle"
  }
}
