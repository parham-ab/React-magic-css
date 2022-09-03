import { useEffect } from "react";

const UseTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, []);
};

export default UseTitle;