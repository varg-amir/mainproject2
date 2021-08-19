import Home from "./pages/home/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Categories from "./pages/Categories/Categories";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import UserList from './pages/UserList/UserList'
import ProductListScreen from "./pages/ProductList/ProductList";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
     
      <Router>
      <NavBar/>
        <Switch>
          <Route path="/login" component={Login}/>
            
          <Route path='/singleproduct/:id' component={SingleProduct}/>
          <Route exact path="/categories">
            < Categories />
          </Route>
          
          <Route  path="/shoppingcart/:id?" component={ShoppingCart}/>
          <Route  path="/admin/userList" component={UserList}/>
          <Route  path="/admin/productlist" component={ProductListScreen}/>
           
          <Route exact path="/">
            < Home />
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
