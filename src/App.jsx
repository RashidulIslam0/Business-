import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Services from "./Components/Services/Services";
import Book from "./Pages/Book/Book";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/ser" element={<Services />} />
        </Routes>
        <Footer />
      </Router>

      {/* <Header />
      <Home />
      <Book />
      <Footer /> */}
    </>
  );
}

export default App;
