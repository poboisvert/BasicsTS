/* export class NumbersCollection {
  data: number[];

  constructor(data: numbers[]) {
    this.data = data;
  }
}
 */

export class NumbersCollection {
  constructor(public data: numbers[]) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftSide = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftSide;
  }
}
