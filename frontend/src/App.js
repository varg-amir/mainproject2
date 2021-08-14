import Home from "./pages/home/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Categories from "./pages/Categories/Categories";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Switch>
          <Route exact path="/">
            < Home />
          </Route>
          <Route exact path="/categories">
            < Categories />
          </Route>
          
          <Route exact path="/shoppingcart">
            < ShoppingCart />
          </Route>
          <Route path='/singleproduct/:id' component={SingleProduct}/>
          <Route exact path="/login">
            < Login />
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
