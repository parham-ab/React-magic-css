import ReactMarkdown from "react-markdown";

const Html = ({ children }) => {
  return (
    <>
      <ReactMarkdown>{children}</ReactMarkdown>
    </>
  );
};

export default Html;
