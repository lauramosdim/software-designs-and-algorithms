import { Item } from "./Item"
import { ItemComparator } from "./ItemComparator"

export class Inventory {
  items: Item[] = []

  public addItem(item: Item) {
    this.items.push(item)
  }

  public sort()
  public sort(comparator: ItemComparator)
  public sort(comparator?: ItemComparator) {
    if (comparator) {
      this.items.sort((a, b) => comparator.compare(a, b))
    } else {
      this.items.sort((a, b) => a.getValue() - b.getValue())
    }
  }

  public toString() {
    return this.items.join(", ")
  }
}
