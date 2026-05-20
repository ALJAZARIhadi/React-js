import { useState } from "react";

// Note i didnt import this component in App.js
export default function MyButton()
{
    console.log("render");

    const [name , setName] = useState("Ahmed");

    
    function buttonClicked(){
        if(name==="Ahmed"){
            setName("Hadi");
        }else{
            setName("Ahmed");
        }
    }

    return(
        <div>
            <button onClick={buttonClicked}>Click Me</button>
            <h1>{name}</h1>
        </div>
    );
}
