import { useState, useEffect } from "react";

const useDocTitle = () => {
  const [count, setCount] = useState(0);
  return [count, setCount];
};

export default useDocTitle;
