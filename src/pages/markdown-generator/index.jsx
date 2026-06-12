import { Container } from "@mui/system";
import UseTitle from "../../hooks/useTitle";
import HeaderTitle from "../../components/HeaderTitle";
import Text from "./components/Text";

const MarkdownGenerator = () => {
  UseTitle("Magic CSS - Markdown");
  return (
    <Container>
      <HeaderTitle
        title="Markdown Generator"
        description="Convert markdown to beautiful HTML preview in real time"
      />
      <Text />
    </Container>
  );
};

export default MarkdownGenerator;
