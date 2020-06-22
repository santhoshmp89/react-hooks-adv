import React, { useState } from "react";

const ReactMemo = () => {
  const [student, setStudent] = useState([{ name: "santhosh", age: 13 }]);

  const addStudent = () => {
    setStudent([...`student`, { name: "kumar", age: 22 }]);
  };

  return (
    <div>
      <h3> ReactMemo - </h3>
      <button onClick={addStudent}>Add Student</button>
      <Student lists={student} />
    </div>
  );
};

const Student = React.memo(({ lists }) => {
  console.log("re-render");
  return (
    <ul>
      {lists.map(list => {
        return (
          <li>
            {" "}
            Name: {list.name}, Age: {list.age}
          </li>
        );
      })}
    </ul>
  );
});

export default ReactMemo;
