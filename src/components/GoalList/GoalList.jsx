//default react connection
import React from "react";

// custom css link
import "./GoalList.css";

const GoalList = (props) => {
  return (
    <ul className="w-1/2  mx-auto my-10">
      {props.goals.map((goal) => {
        return (
          <li
            className="bg-gray-100 hover:bg-white py-6 px-12 my-2"
            key={goal.id}
          >
            {goal.text}
          </li>
        );
      })}
    </ul>
  );
};

export default GoalList;
