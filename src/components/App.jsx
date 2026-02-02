import "../styles/App.css";
import { useState } from "react";
import PageHeader from "./PageHeader";
import Form from "./Form.jsx";
import CV from "./CV.jsx";

export default function App() {
  const [cvData, setCvData] = useState({
    name: "Abigail Biggins",
    email: "abigail.biggins@yahoo.com",
    tel: "(123) 456-7890",
    education: [],
    experience: [],
  });
  const [editMode, setEditMode] = useState(true);

  const editHandler = (evt) => {
    setEditMode(!editMode);
  };
  const submitHandler = (evt) => {
    evt.preventDefault(); // Prevent form submission
    setEditMode(false); 

    // @todo update the cvData with the submitted form data
  }

  return (
    <>
      <PageHeader />
      <main>
        <button type="button" onClick={editHandler}>Edit CV</button>
        {editMode && <Form data={cvData} submitHandler={submitHandler} />}
        <CV data={cvData} />
      </main>
    </>
  );
}
