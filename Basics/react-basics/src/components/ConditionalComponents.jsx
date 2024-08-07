import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponents(){
    const display = true;

    // its not a good practice to have multiple return statements. A Single component should always have only one return statement.
    // for one return statement in conditional rendering we use element variables i.e variables that store html code

    // conditional rendering using ternary operator
    // return display ? <h1>"I am happy" </h1> : <h1>"I am not happy"</h1>;
    return display ? <Welcome/> : <Code />;




    //conditional rendering using element variable
    // let message;
    // if(display){
    //     message = <h1>This is message 1</h1>
    // }else{
    //     message = <h1>This is message 2</h1>
    // }

    // return message;

    //conditional rendering on components
    // if(display){
    //     return(
    //         <div>
    //             <Code/>
    //         </div>
    //     )
    // }else{
    //     return(
    //         <div>
    //             <Welcome/>
    //         </div>
    //     )
    // }


    // conditional rendering 
    // if(display){
    //     return <div>
    //         <h3>conditional statement</h3>
    //     </div>
    // }else{
    //     return <div>
    //         <h3>Code everyday!</h3>
    //     </div>
    // }

}