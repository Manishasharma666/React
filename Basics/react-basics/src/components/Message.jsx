export default function Message(){
    function handleClick(){
        console.log("Button is clicked");
    }


    return <div>
        <button onClick={handleClick}>Click me to get a message</button>
    </div>
}