// MUI
import { Typography } from "@mui/material";
// hooks
import UseTitle from "../../hooks/useTitle";
// components
import Text from "./Text";

const MarkdownGenerator = () => {
  // dynamic title
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
