import { Comparable } from "./Comparable"

let id = 0
let counter = 0

export abstract class Item implements Comparable<Item> {
  private id = id
  private value: number
  private name: string
  private weight: number

  protected constructor(name: string, value: number, weight: number) {
    this.name = name
    this.value = value
    this.weight = weight
    id += 1
    counter += 1
  }

  static reset() {
    counter = 0
  }

  public compareTo(other: Item): number {
    if (this.value === other.value) {
      return this.name.toLowerCase().localeCompare(other.name.toLowerCase())
    }
    return this.value > other.value ? 1 : -1
  }

  public toString() {
    const { name, value, weight } = this
    return `${name} - Value: ${value}, Weight: ${weight.toFixed(2)}`
  }
  public getId() {
    return this.id
  }

  public getValue() {
    return this.value
  }

  public getName() {
    return this.name
  }

  public getWeight() {
    return this.weight
  }

  public setValue(price: number) {
    this.value = price
  }

  public setName(newName: string) {
    this.name = newName
  }

  public setWeight(newWeight: number) {
    this.weight = newWeight
  }

  abstract use()
}
