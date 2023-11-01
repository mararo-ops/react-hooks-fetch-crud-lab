import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions,onDeleteItem}) {
 
  //mapping each data items 
  const questionList=questions.map((question)=>{
    return(
      <QuestionItem key={question.id} question={question} onDeleteItem={onDeleteItem}/>
    )
  })
  return (
    <section>
      <h1>Quiz Questions</h1>
          <ul>
             {questionList}
         </ul>
    </section>
  );
}

export default QuestionList;
//When the application loads, get all the questions from http://localhost:4000/questions and
// display them using the QuestionList component.

//You'll need to add useState and useEffect for this deliverable, 
//but it's up to you to decide where it belongs! Think about which components will need access to the question data