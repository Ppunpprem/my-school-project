import Navbar from "./components/Navbar";
import Navtext from "./Navtext";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Navtext />
    </>
  );
};

export { Layout };
