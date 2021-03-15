/* class Sorter {
  collection: number[];

  constructor(collection: number[]) {
    this.collection = collection;
  }
}
 */
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

/* const numbersCollection = new NumbersCollection([1, 50, -10, 2]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data); */

/* const characterCollection = new CharactersCollection("XabyW");
const sorter = new Sorter(characterCollection);
sorter.sort();

console.log(characterCollection.data); */

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(2);
linkedList.add(1000);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();
