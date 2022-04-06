import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Header title={"Contacts App"} />
      <div className="content">
        <Home />
      </div>
    </>
  );
};

export default App;
