import { useEffect, useState } from "react";
import styles from "./search.module.css";

const url = "https://api.spoonacular.com/recipes/complexSearch";
const api_key = "fbf9789aea784ffa8ff8d5b8e74c56c8";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchFood(params) {
      const res = await fetch(`${url}?apiKey=${api_key}&query=${query}`);
      const data = await res.json();
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
