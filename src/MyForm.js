import { useState } from "react";

export default function MyForm() {
  const [formInputs, setFormInput] = useState({
    name: "",
    email: "",
    age: "",
    generalInfo: "",
    isStudent: false,
    country: "",
    status: "",
  });

  function handleChekBox(e) {
    setFormInput({ ...formInputs, isStudent: e.target.checked });
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(formInputs);
      }}
    >
      <label>Name:</label>
      <input
        required
        value={formInputs.name}
        onChange={(e) => {
          setFormInput({ ...formInputs, name: e.target.value });
        }}
      />
      <hr></hr>
      <label>Email:</label>
      <input
        value={formInputs.email}
        onChange={(e) => {
          setFormInput({ ...formInputs, email: e.target.value });
        }}
      />
      <hr></hr>
      <label>Age:</label>
      <input
        value={formInputs.age}
        onChange={(e) => {
          setFormInput({ ...formInputs, age: e.target.value });
        }}
      />
      <hr></hr>
      <select
        value={formInputs.country}
        onChange={(e) => {
          setFormInput({ ...formInputs, country: e.target.value });
        }}
      >
        <option>Syria</option>
        <option>Turkiye</option>
        <option>KSA</option>
        <option>Eygept</option>
      </select>
      <hr></hr>
      <div>
        <input
          value="student"
          type="radio"
          name="status"
          checked={formInputs.status == "student"}
          onChange={(e) => {
            setFormInput({ ...formInputs, status: e.target.value });
          }}
        />
        Student
        <input
          value="teacher"
          type="radio"
          name="status"
          checked={formInputs.status == "teacher"}
          onChange={(e) => {
            setFormInput({ ...formInputs, status: e.target.value });
          }}
        />
        Teacher
      </div>
      <hr></hr>
      <label>Are you Student ?</label>
      <input
        type="checkbox"
        checked={formInputs.isStudent}
        onChange={handleChekBox}
      />
      <hr></hr>
      <label>General Info:</label>
      <textarea
        value={formInputs.generalInfo}
        onChange={(e) => {
          setFormInput({ ...formInputs, generalInfo: e.target.value });
        }}
      />
      <hr></hr>
      <button type="submit">Submit</button>
    </form>
  );
}
