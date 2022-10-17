import { Consumable } from "./Consumable"

export class Pizza extends Consumable {
  private numberOfSlices: number
  private slicesEaten = 0

  constructor(numberOfSlices: number, spoiled: boolean) {
    super("pizza", 1, 1, spoiled)
    this.numberOfSlices = numberOfSlices
  }

  eat() {
    if (this.slicesEaten < this.numberOfSlices) {
      this.slicesEaten++
    }

    if (this.slicesEaten >= this.numberOfSlices) {
      this.setConsumed(true)
    }

    return `You eat a slice of the pizza.`
  }
}
