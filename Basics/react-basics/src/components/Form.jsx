import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  //   const [name, setName] = useState(""); // this is for single input

  // function handleChange(e){
  //     setName(e.target.value);
  // }

  return (
    <div>
      <form>
        {/* handling multiple inputs */}

        <input
          type="text"
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          value={name.firstName}
        />
        <input
          type="text"
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          value={name.lastName}
        />

        <button
          onClick={(e) => {
            e.preventDefault();
            console.log(name);
        }}
        >
          submit
        </button>

        {/* <input onChange={(e)=>{handleChange(e);}} type="text"  value={name}/> */}
        {/* <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
        /> */}
      </form>
    </div>
  );
}
