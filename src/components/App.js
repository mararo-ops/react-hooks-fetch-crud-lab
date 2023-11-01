import React, { useState,useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  //fetching the data to display
  useEffect(()=>{
    fetch("http://localhost:3000/questions")
    .then(res=>res.json())
    .then(data=>setQuestions(data))
  },[])
 // Function to handle deleting a question
 function handleDeleteItem(deletedItemId) {
  // Remove the deleted question from the state
  setQuestions(questions.filter((question) => question.id !== deletedItemId));
 }
    // Function to handle adding a new question
  function handleAddItem(newItem) {
    setQuestions([...questions, newItem]);
  }


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddItem={handleAddItem}/> : <QuestionList questions={questions} onDeleteItem={handleDeleteItem}/>}
    </main>
  );
}

export default App;