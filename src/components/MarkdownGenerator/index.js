import { Typography } from "@mui/material";
import UseTitle from "../../hooks/useTitle";
import Text from "./Text";

const MarkdownGenerator = () => {
  UseTitle("Magic CSS - Markdown");
  return (
    <>
      <Typography
        variant="h4"
        component="h1"
        textAlign="center"
        my={5}
        color={"#7689cd"}
      >
        Markdown Generator
      </Typography>
      <Text />
    </>
  );
};

export default MarkdownGenerator;
