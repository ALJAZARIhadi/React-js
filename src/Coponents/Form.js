import { useState } from "react";
import "./Form.css";
import Model from "./Model";
import MyComponent from "./MyCompnent";

export default function Form() {
  const [request, setRequest] = useState({
    name: "",
    age: "",
    phoneNumber: "",
    isEmployee: false,
    salary: "",
  });
  
  // جعلنا القيمة الابتدائية نص فارغ لتسهيل التحكم بها
  const [error , setError] = useState(""); 
  const [showModel , setShowModel] = useState(false)
  function handleChekBox(e) {
    setRequest({ ...request, isEmployee: e.target.checked });
  }

  function handleSubmit() {
    if(request.name === "" || request.name.length > 100 ){
      setError("Name is missing or not valid");
    } else if(request.phoneNumber === "" || request.phoneNumber.length !== 10){
      setError("Phone Number must be exactly 10 digits");
    } else if(request.age < 18 || request.age > 100  ){
      setError("Age is missing or not valid");
    } else {
      // إذا كان كل شيء صحيح، نفرغ الأخطاء وتظهر بيانات الفرم بالكونسول
      setError("");
      console.log("Form Submitted Successfully:", request);
    }
    setShowModel(true);
  }
  
  const btnIsDisabled = 
      request.name === "" ||
      request.age === "" ||
      request.phoneNumber === "" ||
      request.salary === "" ;
   
  function handleDivClick()
  {
    if(showModel)
    {
      setShowModel(false)
      console.log("show model gone false")
    }
  }
  return (
    <div>
      <form 
    onClick={handleDivClick}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="form-container"
      >
        <h1>Requesting a Loan</h1>
        <hr style={{ width: "100%" }} />

        <div className="form-group">
          <label>Name:</label>
          <input
            value={request.name}
            onChange={(e) => setRequest({ ...request, name: e.target.value })}
          />
        </div>
        <div className="form-group">
        <MyComponent currentInputs={request}  handleChange={setRequest} value={request.phoneNumber}/>
          {/* <label>Phone Number:</label>
          <input
            value={request.phoneNumber}
            onChange={(e) => setRequest({ ...request, phoneNumber: e.target.value })}
          /> */}
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            value={request.age}
            onChange={(e) => setRequest({ ...request, age: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Are you an employee?</label>
          <input
            style={{ width: "40px", height: "40px" }}
            type="checkbox"
            checked={request.isEmployee}
            onChange={handleChekBox}
          />
        </div>
        <div className="form-group">
          <label>Salary:</label>
          <select
            value={request.salary}
            onChange={(e) => setRequest({ ...request, salary: e.target.value })}
          >
            <option value="">Select Salary</option>
            <option>Less Than 500$</option>
            <option>Between 500$ and 2000$</option>
            <option>Above 2000$</option>
          </select>
          <button disabled={btnIsDisabled} type="submit" className={btnIsDisabled ? "disabled" :""}>
          Submit
        </button>
        </div>
      </form>

      <Model errorMessage={error} isVisible={showModel}/>
    </div>
  );
}
