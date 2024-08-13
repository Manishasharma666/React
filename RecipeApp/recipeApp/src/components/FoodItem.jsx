export default function FoodItem({food}){
    return <div>
        <img src={food.image}/>
         <h1 key={food.title}>{food.title}</h1>
         <button>view recipe</button>
    </div>
}