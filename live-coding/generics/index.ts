

interface ShoppingItem {
  name: string;
  quantity: number;
}

type OptionalItem = ShoppingItem | undefined;

const shoppingList = new Array<ShoppingItem>(
  {
    name: "Apple", 
    quantity: 2
  },
  {
    name: "Pie",
    quantity: 3
  }
);

const item: OptionalItem = shoppingList.find(item => item.name == "Apple");