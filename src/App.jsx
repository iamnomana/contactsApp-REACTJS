import { hover } from "@testing-library/user-event/dist/hover";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Header title={"Students"} number={20} />
      <Header title={"Teachers"} number={30} />

      <Home />

      <Footer />
    </>
  );
};

export default App;
