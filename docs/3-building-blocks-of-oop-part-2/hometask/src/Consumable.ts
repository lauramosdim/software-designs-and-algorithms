import { Item } from "./Item"

export abstract class Consumable extends Item {
  private consumed: boolean = false
  private spoiled: boolean

  constructor(name: string, value: number, weight: number, spoiled: boolean) {
    super(name, value, weight)
    this.spoiled = spoiled
  }

  public use() {
    if (this.consumed) {
      return `There is nothing left of the ${this.getName()} to consume.`
    }

    const sick = this.isSpoiled() ? "\nYou feel sick." : ""

    return `${this.eat()}${sick}`
  }

  public isConsumed() {
    return this.consumed
  }

  public setConsumed(newConsumed: boolean) {
    this.consumed = newConsumed
  }

  public isSpoiled() {
    return this.spoiled
  }

  public toString() {
    const consumed = this.consumed ? "consumed" : "not consumed"
    const spoiled = this.spoiled ? "spoiled" : "not spoiled"
    return `${super.toString()}, ${spoiled}, ${consumed}`
  }

  abstract eat(): string
}
