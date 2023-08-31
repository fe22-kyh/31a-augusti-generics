class CacheMemory<T> {

  save(ref: string, value: T): void { /* void är optional, default är det void */
    localStorage.setItem(ref, JSON.stringify(value));
  }

  retrieve(ref: string): T {
    const obj = localStorage.getItem(ref);

    if(obj == null) throw new Error("Object not found in local storage");

    return JSON.parse(obj);
  }
}


const itemMemory = new CacheMemory<ShoppingItem>();
const numberMemory = new CacheMemory<number>();

itemMemory.save("item", {name: "apple", quantity: 3});
const shoppingItem = itemMemory.retrieve("item");

numberMemory.save("last-visited", 31082023);
const lastVisited = numberMemory.retrieve("last-visited");
