import "../FirstComponentStyle.css";
export default function MyFirstComponent() {
  const Person = {
    name:"Abdulhadi",
    email:"hadikezzhe@gmail.com"
  }
  const elmStyle ={
    backgroundColor:"red",
    fontSize:"20px",
    boxShadow:"0px 20px 10px blue"
  }
  return (
    <div>
      <h1 style={elmStyle}>Welcome {Person.name} component</h1>
      <p className=" whiteBg active">Email: {Person.email}</p>

      <h1 className={Person.name === "Abdulhadi" ? "greenBg" : "redBg"}>Welcome {Person.name} component </h1>
      
      <button onClick={sayHello}>Hi</button>
    </div>
  );
}

function sayHello()
{
  alert("Hello");
}