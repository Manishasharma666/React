export default function Fruit({ name, price, emoji, soldout }) {

    return(
        <>
            <li>
                {emoji} {name} {price} {soldout ? "soldout" : ""}
            </li>
        </>
    )


    
  //conditional rendering of fruits based on its price
//   return (
//     <>
//       {price > 5 ? (
//         <li>
//           {emoji} {name} ${price}
//         </li>
//       ) : (
//         ""
//       )}
//     </>
//   );



  // return <li>
  //     {emoji} {name} ${price}
  // </li>



  //     return <div>
  //         {emoji} {name} ${price}
  //     </div>
}

// this is child component of Fruits component which is render in Fruits component
