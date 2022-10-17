import { Item } from "./Item"

export abstract class Weapon extends Item {
  private baseDamage: number
  private damageModifier = 0
  private baseDurability: number
  private durabilityModifier = 0
  protected static MODIFIER_CHANGE_RATE = 0.05

  constructor(
    name: string,
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super(name, value, weight)
    this.baseDamage = baseDamage
    this.baseDurability = baseDurability
  }

  public getBaseDamage() {
    return this.baseDamage
  }

  public setBaseDamage(newBaseDamage: number) {
    this.baseDamage = newBaseDamage
  }

  public getDamageModifier() {
    return this.damageModifier
  }

  public setDamageModifier(newDamageModifier: number) {
    this.damageModifier = newDamageModifier
  }

  public getBaseDurability() {
    return this.baseDurability
  }

  public setBaseDurability(newBaseDurability: number) {
    this.baseDurability = newBaseDurability
  }

  public getDurabilityModifier() {
    return this.durabilityModifier
  }

  public setDurabilityModifier(newDurabilityModifier: number) {
    this.durabilityModifier = newDurabilityModifier
  }

  public getDamage() {
    return this.baseDamage + this.damageModifier
  }

  public getDurability() {
    return Math.max(this.baseDurability + this.durabilityModifier, 0)
  }

  public toString() {
    return `${super.toString()}, Damage: , Durability: %`
  }

  public use() {}

  abstract polish(): void
}
