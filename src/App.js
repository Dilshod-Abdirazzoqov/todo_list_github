import React, { useState } from "react";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";
function App() {
  const [courseGoals, setCourseGoals] = useState([
    { id: 1, text: "Advanced Course Material" },
    { id: 2, text: "Understandable Course Material" },
    { id: 3, text: "Worth-reading Course Material" },
    { id: 4, text: "Scientific Course Material" },
    { id: 5, text: "Upper-intermediate Course Material" },
  ]);

  const addConcatHandler = (newGoal) => {
    setCourseGoals(courseGoals.concat(newGoal));
  };
  return (
    <div className="App">
      <h1 className="heading">Todo List Github</h1>
      <NewGoal onAddGoal={addConcatHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
}

export default App;
