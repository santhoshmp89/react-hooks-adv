import React, { useState } from "react";
import Button from "../useCallBackComp/Button";
import Counter from "../useCallBackComp/Counter";
import View from "../useCallBackComp/View";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const handleClick = React.useCallback(() => {
    setCount(1);
  }, []);

  const isEven = React.useMemo(() => {
    let i = 0;
    while (i < 9999) {
      i++;
    }
    return counter % 2 === 0 ? "Even" : "Odd";
  }, [counter]);

  return (
    <div>
      <h2>useMemo and useCallBack</h2>
      <View />
      <Counter value={count} />
      <Button handleClick={handleClick} />
      <br />
      <br />
      ------------------------------------------
      <br />
      <br />
      <button onClick={() => setCounter(counter + 1)}>
        Counter One : {counter} = {isEven}
      </button>
      <button onClick={() => setCounter2(counter2 + 1)}>
        Counter Two : {counter2}
      </button>
    </div>
  );
};

export default UseMemo;
