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

const numbersCollection = new NumbersCollection([1, 420, -10, 2]);
numbersCollection.sort();
console.log(numbersCollection.data);

/*const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data); */

/* const characterCollection = new CharactersCollection("XabyW");
characterCollection.sort();
console.log(characterCollection.data); */

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(2);
linkedList.add(1000);

linkedList.sort();
linkedList.print();
