import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const character = this.data.split("");

    const leftSide = character[leftIndex];
    character[leftIndex] = character[rightIndex];
    character[rightIndex] = leftSide;

    this.data = character.join("");
  }
}
