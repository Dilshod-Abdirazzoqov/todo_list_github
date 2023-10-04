import React, { useState } from "react";
import "./NewGoal.css";

const NewGoal = (props) => {
  const [enteredText, setEnteredText] = useState("");

  const addNewGoalHandler = (e) => {
    e.preventDefault();

    const newGoal = {
      id: Math.floor(Math.random() * 100) + 1,
      text: enteredText,
    };

    props.onAddGoal(newGoal);
    setEnteredText("");
  };

  const enteredTextHandler = (event) => {
    setEnteredText(event.target.value);
  };

  return (
    <form className="form-control" onSubmit={addNewGoalHandler}>
      <div className=" flex  items-stretch justify-center">
        <input
          class="shadow appearance-none border rounded  py-12 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Write here..."
          value={enteredText}
          onChange={enteredTextHandler}
        />
        <button
          type="submit"
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-10 px-12 border border-gray-400 rounded shadow"
        >
          Post Goal
        </button>
      </div>
    </form>
  );
};

export default NewGoal;
