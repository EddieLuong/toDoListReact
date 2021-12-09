import React, { useState } from "react";

function App() {
  const [assignments, setAssignment] = useState([
    { assign: "Nhiệm vụ 1", complete: false },
    { assign: "Nhiệm vụ 2", complete: false },
    { assign: "Nhiệm vụ 3", complete: false },
    { assign: "Nhiệm vụ 4", complete: false },
    { assign: "Nhiệm vụ 5", complete: false },
  ]);
  const [inputOn, setInputOn] = useState(false);
  const [value, setValue] = useState("");
  const completeAssign = (index) => {
    const newAssignment = assignments.map((item, i) => {
      if (index === i) {
        item.complete = !item.complete;
        return item;
      }
      return item;
    });
    setAssignment(newAssignment);
  };
  const eventKeyUp = (e) => {
    if (e.code === "Enter" && value !== "") {
      const data = {
        assign: value,
        complete: false,
      };
      setAssignment((prev) => {
        return [...prev, data];
      });
      setValue("");
    }
  };

  return (
    <div style={{ padding: 30 }}>
      <ul className="listAssignment">
        <h3>Need to do</h3>
        {assignments.map(
          (assignment, index) =>
            !assignment.complete && (
              <li
                onClick={() => {
                  completeAssign(index);
                }}
                key={index}
              >
                {assignment.assign}
              </li>
            )
        )}
      </ul>
      <ul className="completedAssignment">
        <h3>Completed</h3>
        {assignments.map(
          (assignment, index) =>
            assignment.complete && (
              <li
                onClick={() => {
                  completeAssign(index);
                }}
              >
                {" "}
                {assignment.assign}
              </li>
            )
        )}
      </ul>
      {inputOn ? (
        <input
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
          onKeyUp={(event) => {
            eventKeyUp(event);
          }}
        ></input>
      ) : (
        <div className="addAssign" type="text" placeholder="Add new assignment">
          <i
            onClick={() => {
              setInputOn(true);
            }}
          >
            +
          </i>
        </div>
      )}
    </div>
  );
}

export default App;
