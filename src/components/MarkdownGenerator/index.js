// hooks
import UseTitle from "../../hooks/useTitle";
// components
import Text from "./Text";

const MarkdownGenerator = () => {
  // dynamic title
  UseTitle("Magic CSS - Markdown");

  return (
    <>
      <Text />
    </>
  );
};

export default MarkdownGenerator;
