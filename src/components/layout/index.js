// components
import Footer from "./Footer";
import Header from "./Header";

const LayOut = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayOut;
