import "./App.css";
import Header from "./components/Header/Header";
import Accordian from "./components/Body/Accordian";
import Home from "./components/Body/Home";
import {
  Route,
  // RouterProvider,
  Routes,
  // createBrowserRouter,
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar2";
import ComingSoon from "./components/Body/ComingSoon";
import NotFound from "./components/Body/NotFound";
import Burgee from "./components/Burgee/Burgee";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Routes>
        <Route index element={<Home />} errorElement={<NotFound />} />
        <Route
          path="/about"
          element={<Accordian />}
          errorElement={<NotFound />}
        />
        <Route
          path="/comingsoon"
          element={<ComingSoon />}
          errorElement={<NotFound />}
        />
        <Route
          path="/burgees"
          element={<Burgee />}
          errorElement={<NotFound />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
