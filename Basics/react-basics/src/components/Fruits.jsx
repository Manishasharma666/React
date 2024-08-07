import Fruit from "./Fruit";

//This is parent component Fruits which is render in App

export default function Fruits() {
  // const fruits = ["apple", "mango", "grapes", "orange", "pineapple"];
  const fruits = [
    { name: "apple", price: "8", emoji: "🍎" , soldout: true},
    { name: "mango", price: "2", emoji: "🥭" , soldout: false},
    { name: "grapes", price: "5", emoji: "🍇", soldout: true },
    { name: "orange", price: "6", emoji: "🍊" , soldout: false},
    { name: "pineapple", price: "12", emoji: "🍍", soldout: false },
  ];

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
            soldout={fruit.soldout}
          />
        ))}

        {/* for array of objects */}
        {/* {fruits.map((fruit) => (
          <li key={fruit.name}> {fruit.emoji} {fruit.name} ${fruit.price} </li>
        ))} */}

        {/* {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li> // for normal array
        ))} */}
      </ul>
    </div>
  );
}
