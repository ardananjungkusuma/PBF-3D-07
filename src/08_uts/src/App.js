import "./App.css";
import "./assets/css/aos.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/templatemo-digital-trend.css";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Homepage from "./pages/Home";
import Blogpage from "./pages/Blog";
import Pdetails from "./pages/ProjectDetails";
import Contactpage from "./pages/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

function Home() {
  return <Homepage />;
}

function Contact() {
  return <Contactpage />;
}

function Blog() {
  return <Blogpage />;
}

const Pdet = () => (
  <Provider store={store}>
    <Pdetails />
  </Provider>
);

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/projectdetails">
          <Pdet />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
