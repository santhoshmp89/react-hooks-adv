import React, { useState } from "react";
import Button from "../useCallBackComp/Button";
import Counter from "../useCallBackComp/Counter";
import View from "../useCallBackComp/View";

const UseMemo = () => {
  const [count, setCount] = useState(0);

  const handleClick = React.useCallback(() => {
    setCount(1);
  }, []);
  
  return (
    <div>
      <h2>useMemo and useCallBack</h2>
      <View />
      <Counter value={count} />
      <Button handleClick={handleClick} />
    </div>
  );
};

export default UseMemo;
